from abc import ABC, abstractmethod
from typing import Generic

from .types import Contact

class AbstractRecipient(ABC, Generic[Contact]):
    @abstractmethod
    def get_transport_contact(self) -> Contact:
        pass
