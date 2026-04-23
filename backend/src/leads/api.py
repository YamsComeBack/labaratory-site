from typing import Annotated

from fastapi import APIRouter, HTTPException, Depends, status

from .dependencies import get_create_lead_usecase
from .exceptions import LeadAlreadyExistsError
from .schemas import PublicLeadSchema
from .usecases import CreateLeadUseCase

router = APIRouter(
    prefix="/leads",
    tags=["Leads"]
)


@router.post(
    "/",
    status_code=status.HTTP_201_CREATED,
)
async def create_new_lead(
        create_lead: Annotated[CreateLeadUseCase, Depends(get_create_lead_usecase)]
) -> PublicLeadSchema:
    try:
        lead = await create_lead.run()
    except LeadAlreadyExistsError as e:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=str(e),
        )
    else:
        return lead
