from abc import ABC, abstractmethod
from typing import Generic

from notifications.abc.notification import AbstractNotification
from notifications.abc.recipient import AbstractRecipient
from notifications.abc.types import Message, Contact
from notifications.dto import NotificationResult


class AbstractTransportClient(ABC, Generic[Message, Contact]):
    @property
    @abstractmethod
    def name(self) -> str:
        pass

    @abstractmethod
    async def send(
            self,
            notification: AbstractNotification[Message],
            recipient: AbstractRecipient[Contact]
    ) -> NotificationResult:
        pass


class ConnectableClientMixin(ABC):
    @abstractmethod
    async def connect(self) -> None:
        pass


class ClosableClientMixin(ABC):
    @abstractmethod
    async def close(self) -> None:
        pass
