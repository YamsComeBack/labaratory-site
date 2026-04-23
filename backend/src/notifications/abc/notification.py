from abc import ABC, abstractmethod
from typing import Generic

from .types import Message


class AbstractNotification(ABC, Generic[Message]):
    @abstractmethod
    def get_transport_message(self) -> Message:
        pass
