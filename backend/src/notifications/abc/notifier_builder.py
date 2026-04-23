from abc import ABC, abstractmethod
from typing import Generic, Optional, final, Any, Self

from notifications.abc.notification import AbstractNotification
from notifications.abc.recipient import AbstractRecipient
from notifications.abc.transport_client import AbstractTransportClient
from notifications.abc.types import Message, Contact
from notifications.notifier import Notifier


class AbstractNotifierBuilder(ABC, Generic[Message, Contact]):
    _transport_client: Optional[AbstractTransportClient[Message, Contact]]
    _notification: Optional[AbstractNotification[Message]]
    _recipients: set[AbstractRecipient[Contact]]

    @final
    def __init__(self) -> None:
        self._transport_client = None
        self._notification = None
        self._recipients = set()

    @abstractmethod
    def add_client(self, *args: Any, **kwargs: Any) -> Self:
        pass

    @abstractmethod
    def add_notification(self, *args: Any, **kwargs: Any) -> Self:
        pass

    @abstractmethod
    def add_recipient(self, *args: Any, **kwargs: Any) -> Self:
        pass

    @final
    def build(self) -> Notifier[Message, Contact]:
        if self._transport_client is None:
            raise ValueError("Transport client must be provided before building the Notifier.")

        if self._notification is None:
            raise ValueError("Notification must be provided before building the Notifier.")

        if not self._recipients:
            raise ValueError("At least one recipient must be added before building the Notifier.")

        return Notifier(
            transport_client=self._transport_client,
            notification=self._notification,
            recipients=self._recipients
        )
