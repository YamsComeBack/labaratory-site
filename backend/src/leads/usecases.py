import logging

from tortoise.exceptions import IntegrityError

from . import exceptions
from . import models
from . import schemas
from .schemas import CreateLeadSchema

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)


class CreateLeadUseCase:
    _create_lead_schema: CreateLeadSchema

    def __init__(self, create_lead_schema: schemas.CreateLeadSchema) -> None:
        self._create_lead_schema = create_lead_schema

    async def _create_lead(self) -> schemas.PublicLeadSchema:
        lead_data = self._create_lead_schema.model_dump()

        try:
            logger.debug("Attempting to create lead.")
            lead = await models.Lead.create(**lead_data)
        except IntegrityError:
            msg = "Lead already exists."
            logger.warning(msg)
            raise exceptions.LeadAlreadyExistsError(msg)
        else:
            logger.info("Lead created successfully.")
            return schemas.PublicLeadSchema.model_validate(lead, from_attributes=True)

    async def run(self) -> schemas.PublicLeadSchema:
        lead = await self._create_lead()
        return lead
