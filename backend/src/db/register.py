from fastapi import FastAPI
from tortoise.contrib.fastapi import register_tortoise
from tortoise.exceptions import ConfigurationError
from tortoise.log import logger

from .config import TORTOISE_ORM_CONFIG


def register_orm(app: FastAPI) -> None:
    try:
        register_tortoise(app=app, config=TORTOISE_ORM_CONFIG)
        logger.info("Orm is registered.")
    except ConfigurationError as e:
        logger.critical("Orm is not registered!")
        raise e
