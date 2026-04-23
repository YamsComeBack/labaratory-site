from datetime import datetime

from pydantic import BaseModel, PositiveInt, EmailStr, Field
from pydantic_extra_types.phone_numbers import PhoneNumber


class CreateLeadSchema(BaseModel):
    email: EmailStr
    phonenumber: PhoneNumber
    first_name: str = Field(min_length=3, max_length=64)
    last_name: str = Field(min_length=3, max_length=64)
    patronymic: str = Field(min_length=3, max_length=64)


class PublicLeadSchema(CreateLeadSchema):
    id: PositiveInt
    created_at: datetime
    updated_at: datetime
    is_new: bool
