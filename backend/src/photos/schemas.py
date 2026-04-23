from datetime import datetime
from pydantic import BaseModel, HttpUrl
from typing import Optional

class PublicPhoto(BaseModel):
    id: int
    title: Optional[str] = None
    alt: Optional[str] = None
    url: HttpUrl
    created_at: datetime