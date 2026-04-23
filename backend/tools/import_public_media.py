import requests, os
from pathlib import Path

FRONT_PUBLIC = Path(__file__).resolve().parents[2] / "frontend" / "public"
API = "http://localhost:8000/api/assets/upload"

def walk_and_upload(root: Path, kind: str, tag: str):
    for p in root.rglob("*"):
        if p.is_file():
            files = {"file": (p.name, p.open("rb"), None)}
            data = {"kind": kind, "tags": tag}
            print("Upload:", p)
            r = requests.post(API, files=files, data=data, timeout=60)
            r.raise_for_status()

def main():
    # фото проектов
    walk_and_upload(FRONT_PUBLIC / "images" / "projects", "image", "projects")
    # общие изображения
    walk_and_upload(FRONT_PUBLIC / "images", "image", "images")
    # svg как изображения (не ui-иконки)
    walk_and_upload(FRONT_PUBLIC / "svg" / "Main", "svg", "hero")
    # видео (если есть большие ролики)
    walk_and_upload(FRONT_PUBLIC / "video", "video", "video")

if __name__ == "__main__":
    main()
