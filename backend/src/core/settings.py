import logging
from pathlib import Path

from pydantic import BaseModel, ValidationError, PostgresDsn
from pydantic_settings import BaseSettings, SettingsConfigDict

from core.logging import init_logging

PROJECT_DIRECTORY = Path(__file__).parent.parent.parent.resolve()

init_logging(PROJECT_DIRECTORY / "logging.yaml")

logger = logging.getLogger(__name__)


class DatabaseSettings(BaseModel):
    name: str
    username: str
    password: str
    host: str
    port: int

    @property
    def url(self) -> str:
        postgres_dsn = PostgresDsn.build(
            scheme="postgres",
            username=self.username,
            password=self.password,
            host=self.host,
            port=self.port,
            path=self.name
        )
        return str(postgres_dsn)


class EmailSettings(BaseModel):
    username: str
    password: str
    host: str
    port: int
    use_tls: bool = True
    templates_directory: Path = PROJECT_DIRECTORY / "src/notifications/templates"


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=PROJECT_DIRECTORY / ".env",
        env_prefix="laboratory_sait__",
        env_nested_delimiter="__"
    )

    db: DatabaseSettings
    email: EmailSettings


def load_env_settings() -> Settings:
    try:
        settings = Settings()  # type: ignore
        logger.info("Environ variables loaded.")
    except ValidationError as e:
        logger.critical("Environ variables not loaded or unset!")
        raise e
    else:
        return settings


settings = load_env_settings()
