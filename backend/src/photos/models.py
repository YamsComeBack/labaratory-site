from tortoise import fields, models
from db.mixins import TimeStempMixin  # у тебя уже есть

class AssetKind(str):
    IMAGE = "image"
    SVG = "svg"
    VIDEO = "video"
    OTHER = "other"

class Asset(models.Model, TimeStempMixin):
    id = fields.IntField(pk=True)
    kind = fields.CharField(max_length=16, default=AssetKind.IMAGE)
    filename = fields.CharField(max_length=255)     # исходное имя
    storage_path = fields.CharField(max_length=512) # относительный путь под /media (на диске/облаке)
    mime = fields.CharField(max_length=64)
    bytes = fields.IntField()
    width = fields.IntField(null=True)              # для image/video (если знаем)
    height = fields.IntField(null=True)
    alt = fields.CharField(max_length=255, null=True)
    title = fields.CharField(max_length=255, null=True)
    tags = fields.JSONField(null=True)              # например ["projects","hero"]
    hash = fields.CharField(max_length=64, null=True, index=True) # для дедупа

    class Meta:
        table = "assets"

    @property
    def url(self) -> str:
        return f"/media/{self.storage_path}"
