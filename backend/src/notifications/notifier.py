import logging
from typing import Generic, Iterable

from .abc.notification import AbstractNotification
from .abc.recipient import AbstractRecipient
from .abc.transport_client import AbstractTransportClient, ConnectableClientMixin, ClosableClientMixin
from .abc.types import Message, Contact

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)


class Notifier(Generic[Message, Contact]):
    _transport_client: AbstractTransportClient[Message, Contact]
    _notification: AbstractNotification[Message]
    _recipients: Iterable[AbstractRecipient[Contact]]

    def __init__(
            self,
            transport_client: AbstractTransportClient[Message, Contact],
            notification: AbstractNotification[Message],
            recipients: Iterable[AbstractRecipient[Contact]]
    ) -> None:
        self._transport_client = transport_client
        self._notification = notification
        self._recipients = recipients

    async def notify(self) -> None:
        try:
            if isinstance(self._transport_client, ConnectableClientMixin):
                logger.debug("Connecting transport client...")
                await self._transport_client.connect()
                logger.debug("Transport client connected.")
        except Exception as e:
            logger.exception("Failed to connect transport client.")
            return

        for recipient in self._recipients:
            try:
                logger.debug(f"Sending notification to recipient: {recipient}")
                result = await self._transport_client.send(self._notification, recipient)
                if not result.success:
                    logger.error(f"Notification failed for recipient {recipient}: {result.error}")
            except Exception as e:
                logger.exception(f"Unexpected error while sending notification to recipient: {recipient}")

        try:
            if isinstance(self._transport_client, ClosableClientMixin):
                logger.debug("Closing transport client...")
                await self._transport_client.close()
                logger.debug("Transport client closed.")
        except Exception as e:
            logger.exception("Failed to close transport client.")
