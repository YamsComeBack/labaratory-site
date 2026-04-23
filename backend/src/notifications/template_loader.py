import logging
from pathlib import Path
from typing import Optional, Any

from jinja2 import Environment, FileSystemLoader, Template
from jinja2.exceptions import TemplateNotFound

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)


class TemplateLoader:
    _environment: Environment
    _loaded_template: Template | None

    def __init__(self, templates_directory: Path) -> None:
        if not templates_directory.is_dir():
            logger.error(f"Directory '{templates_directory}' does not exist or is not a directory.")
            raise ValueError(f"Invalid templates directory: {templates_directory}")

        self._environment = Environment(loader=FileSystemLoader(templates_directory))
        self._loaded_template: Optional[Template] = None
        logger.debug(f"Jinja2 environment initialized with directory: {templates_directory}")

    def _load_template(self, template_name: str) -> None:
        try:
            self._loaded_template = self._environment.get_template(template_name)
            logger.debug(f"Template '{template_name}' successfully loaded.")
        except TemplateNotFound:
            logger.exception(f"Template '{template_name}' not found.")
            raise

    def _render_template(self, context: dict[str, Any]) -> str:
        if self._loaded_template is None:
            logger.error("No template is loaded. Cannot render.")
            raise RuntimeError("Template not loaded. Call _load_template first.")
        logger.debug("Rendering template with provided context.")
        return self._loaded_template.render(**context)

    def quick_render(self, template_name: str, context: dict[str, Any]) -> str:
        logger.info(f"Rendering template '{template_name}' with context.")
        self._load_template(template_name)
        return self._render_template(context)
