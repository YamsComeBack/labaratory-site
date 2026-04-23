from fastapi import APIRouter, UploadFile, File, Form, HTTPException, Query
from starlette import status
from pathlib import Path
import shutil, imghdr, mimetypes, hashlib
from .models import Asset, AssetKind

router = APIRouter(prefix="/assets", tags=["Assets"])
MEDIA_ROOT = (Path(__file__).resolve().parents[1] / "media").resolve()
ASSETS_DIR = MEDIA_ROOT / "assets"
ASSETS_DIR.mkdir(parents=True, exist_ok=True)

def _hash_file(fp: Path) -> str:
    h = hashlib.sha256()
    with fp.open("rb") as f:
        for chunk in iter(lambda: f.read(8192), b""):
            h.update(chunk)
    return h.hexdigest()

@router.post("/upload", status_code=status.HTTP_201_CREATED)
async def upload_asset(
    file: UploadFile = File(...),
    kind: str = Form("image"),
    alt: str | None = Form(None),
    title: str | None = Form(None),
    tags: str | None = Form(None),  # "projects,hero"
):
    suffix = Path(file.filename).suffix.lower()
    mime = file.content_type or mimetypes.guess_type(file.filename)[0] or "application/octet-stream"
    rel_path = f"assets/{hashlib.md5(file.filename.encode()).hexdigest()[:2]}/{file.filename}"
    dst = ASSETS_DIR.parent / rel_path
    dst.parent.mkdir(parents=True, exist_ok=True)

    with dst.open("wb") as out:
        shutil.copyfileobj(file.file, out)

    digest = _hash_file(dst)
    # простая дедупликация: если уже есть с таким hash — удалить новый файл и вернуть существующий
    exist = await Asset.get_or_none(hash=digest)
    if exist:
        try: dst.unlink(missing_ok=True)
        except: pass
        return {"id": exist.id, "url": exist.url, "kind": exist.kind}

    a = await Asset.create(
        kind=kind, filename=file.filename, storage_path=rel_path,
        mime=mime, bytes=dst.stat().st_size, alt=alt, title=title,
        tags=[t.strip() for t in (tags.split(",") if tags else [])] or None,
        hash=digest
    )
    return {"id": a.id, "url": a.url, "kind": a.kind}

@router.get("")
async def list_assets(kind: str | None = None, tag: str | None = None):
    q = Asset.all().order_by("-created_at")
    if kind: q = q.filter(kind=kind)
    if tag:  q = q.filter(tags__contains=[tag])
    return await q.values("id","kind","filename","mime","bytes","alt","title","tags","created_at","storage_path")

@router.get("/resolve")
async def resolve_by_old_path(path: str = Query(..., description="e.g. images/projects/foo.jpg")):
    # позволим миграции по старым путям: ищем по filename или тегам
    a = await Asset.get_or_none(filename=Path(path).name)
    if not a:
        raise HTTPException(404, "asset not found")
    return {"url": a.url, "alt": a.alt, "title": a.title, "mime": a.mime}
