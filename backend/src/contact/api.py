import os
import re
from pathlib import Path
from typing import List
from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, EmailStr, Field

from notifications.email import EmailNotifierBuilder, EmailNotification
from notifications.template_loader import TemplateLoader

router = APIRouter(prefix="/contact", tags=["Contact"])

BASE_DIR = Path(__file__).resolve().parents[2]
PHONE_RE = re.compile(r"^\+?[0-9\s\-]{10,20}$")
DRY_RUN = os.getenv("laboratory_sait__email__dry_run", "0").lower() in {"1", "true", "yes"}
DEBUG_SMTP = os.getenv("laboratory_sait__email__debug", "0").lower() in {"1", "true", "yes"}

class ContactForm(BaseModel):
    fio: str = Field(min_length=3, max_length=100)
    email: EmailStr
    phone: str
    agree: bool

def _require_env(name: str) -> str:
    val = os.getenv(name)
    if not val:
        raise HTTPException(status_code=500, detail=f"ENV '{name}' is not set")
    return val

def _parse_recipients(s: str) -> List[str]:
    # поддержка одного или нескольких адресов через запятую/точку с запятой/пробел
    raw = re.split(r"[,\s;]+", s.strip())
    return [x for x in raw if x]

@router.post("", status_code=status.HTTP_204_NO_CONTENT)
async def submit_contact(form: ContactForm) -> None:
    if not form.agree:
        raise HTTPException(status_code=400, detail="Consent is required.")
    if not PHONE_RE.match(form.phone):
        raise HTTPException(status_code=400, detail="Invalid phone format.")
    if DRY_RUN:
        print("[DRY_RUN] contact form:", form.model_dump())
        return

    try:
        username = _require_env("laboratory_sait__email__username")
        password = _require_env("laboratory_sait__email__password")
        host     = os.getenv("laboratory_sait__email__host", "smtp.mail.ru")
        port     = int(os.getenv("laboratory_sait__email__port", "465"))
        use_tls  = (port == 465)
        recipients = _parse_recipients(_require_env("laboratory_sait__email__recipient"))

        templates_dir = BASE_DIR / "templates" / "emails"
        loader = TemplateLoader(templates_dir)

        # пробуем шаблон
        try:
            builder = (
                EmailNotifierBuilder()
                .add_client(
                    default_sender=username, username=username, password=password,
                    host=host, port=port, use_tls=use_tls
                )
                .add_notification(
                    subject="Новая заявка с сайта",
                    template_name="contact.html",
                    context={"fio": form.fio, "email": form.email, "phone": form.phone},
                    template_loader=loader
                )
            )
        except Exception as tpl_err:
            # фолбэк без шаблона
            if DEBUG_SMTP: print(f"[TEMPLATE] fallback: {tpl_err}")
            html = (
                f"<h2>Новая заявка</h2>"
                f"<p><b>ФИО:</b> {form.fio}</p>"
                f"<p><b>Email:</b> {form.email}</p>"
                f"<p><b>Телефон:</b> {form.phone}</p>"
            )
            builder = (
                EmailNotifierBuilder()
                .add_client(
                    default_sender=username, username=username, password=password,
                    host=host, port=port, use_tls=use_tls
                )
                .set_notification(EmailNotification(subject="Новая заявка с сайта", body=html))
            )

        for r in recipients:
            builder.add_recipient(r)

        notifier = builder.build()
        await notifier.notify()
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"Contact endpoint error: {e}")