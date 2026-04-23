from tortoise import fields
from tortoise.models import Model

from db.mixins import TimeStempMixin


class Lead(Model, TimeStempMixin):
    email = fields.CharField(max_length=128, unique=True)
    phonenumber = fields.CharField(unique=True, max_length=20)
    first_name = fields.CharField(max_length=64)
    last_name = fields.CharField(max_length=64)
    patronymic = fields.CharField(max_length=64)
    is_new = fields.BooleanField(default=True)

    class Meta:
        table = "leads"
