from fastapi import APIRouter, FastAPI

from leads.api import router as leads_router
from contact.api import router as contact_router
from photos.api import router as photos_router
from photos.api import router as assets_router

ROUTERS = [
    leads_router,
    contact_router,
    photos_router,
    assets_router,
]

def register_routers(app: FastAPI, prefix: str = "/api") -> None:
    api_router = APIRouter(prefix=prefix)
    for router in ROUTERS:
        api_router.include_router(router)
    app.include_router(api_router)
