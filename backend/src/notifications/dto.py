from dataclasses import dataclass
from typing import Optional


@dataclass(frozen=True)
class NotificationResult:
    success: bool
    error: Optional[str] = None

    def __post_init__(self) -> None:
        if self.success and self.error is not None:
            raise ValueError("Successful result cannot have an error message!")

        if not self.success and self.error is None:
            raise ValueError("Failed result must have an error message!")
