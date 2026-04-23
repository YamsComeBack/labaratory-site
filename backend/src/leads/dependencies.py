from .schemas import CreateLeadSchema
from .usecases import CreateLeadUseCase


def get_create_lead_usecase(lead: CreateLeadSchema) -> CreateLeadUseCase:
    return CreateLeadUseCase(
        create_lead_schema=lead
    )
