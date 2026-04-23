import logging.config
from pathlib import Path

import yaml


def _load_logging_config(path: Path) -> dict[str, str]:
    with open(path) as file:
        config = yaml.safe_load(file)
        return dict(config)


def init_logging(path: Path) -> None:
    config = _load_logging_config(path)
    logging.config.dictConfig(config)
