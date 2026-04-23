import os

DB_NAME = os.getenv("laboratory_sait__db__name", "labdb")
DB_USER = os.getenv("laboratory_sait__db__username", "postgres")
DB_PASS = os.getenv("laboratory_sait__db__password", "postgres")
DB_HOST = os.getenv("laboratory_sait__db__host", "localhost")
DB_PORT = os.getenv("laboratory_sait__db__port", "5432")

DB_URL = f"postgres://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

TORTOISE_ORM_CONFIG = {
    "connections": {"default": DB_URL},
    "apps": {
        "models": {
            "models": [
                "aerich.models",
                "leads.models",
                "photos.models",
            ],
            "default_connection": "default",
        }
    },
}
