import logging
from email.message import EmailMessage
from typing import Self, Any

from aiosmtplib import SMTP, SMTPException

from .abc.notification import AbstractNotification
from .abc.notifier_builder import AbstractNotifierBuilder
from .abc.recipient import AbstractRecipient
from .abc.transport_client import AbstractTransportClient, ConnectableClientMixin, ClosableClientMixin
from .dto import NotificationResult
from .template_loader import TemplateLoader

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)


class EmailRecipient(AbstractRecipient[str]):
    _email: str

    def __init__(self, email: str) -> None:
        if not email or "@" not in email:
            logger.error(f"Invalid email address provided: '{email}'")
            raise ValueError(f"Invalid email address: '{email}'")
        self._email = email
        logger.debug(f"EmailRecipient initialized with address: {email}")

    def get_transport_contact(self) -> str:
        logger.debug(f"Returning transport contact: {self._email}")
        return self._email


class EmailNotification(AbstractNotification[EmailMessage]):
    _subject: str
    _body: str

    def __init__(self, subject: str, body: str) -> None:
        if not subject.strip():
            logger.error("Email subject is empty.")
            raise ValueError("Email subject cannot be empty.")
        if not body.strip():
            logger.error("Email body is empty.")
            raise ValueError("Email body cannot be empty.")
        self._subject = subject
        self._body = body
        logger.debug(f"EmailNotification initialized with subject: '{subject}'")

    def get_transport_message(self) -> EmailMessage:
        logger.debug(f"Creating EmailMessage with subject: '{self._subject}'")
        try:
            message = EmailMessage()
            message["Subject"] = self._subject
            message.add_alternative(self._body, subtype="html")
            logger.debug("EmailMessage created successfully.")
            return message
        except Exception as e:
            logger.exception("Failed to create EmailMessage.")
            raise RuntimeError("Unable to build email message.") from e


class EmailTransportClient(
    AbstractTransportClient[EmailMessage, str],
    ConnectableClientMixin,
    ClosableClientMixin
):
    _default_sender: str
    _smtp: SMTP

    def __init__(self, default_sender: str, username: str, password: str, host: str, port: int, use_tls: bool) -> None:
        self._default_sender = default_sender
        self._smtp = SMTP(username=username, password=password, hostname=host, port=port, use_tls=use_tls)
        logger.debug(f"EmailTransportClient initialized with sender: '{default_sender}', host: '{host}:{port}'")

    @property
    def name(self) -> str:
        return "Email"

    async def connect(self) -> None:
        try:
            logger.debug("Connecting to SMTP server...")
            await self._smtp.connect()
            logger.debug("SMTP connection established.")
        except SMTPException as e:
            logger.exception("Failed to connect to SMTP server.")
            raise ConnectionError("SMTP connection failed.") from e

    async def close(self) -> None:
        try:
            logger.debug("Closing SMTP connection...")
            await self._smtp.quit()
            logger.debug("SMTP connection closed.")
        except SMTPException as e:
            logger.exception("Failed to close SMTP connection.")

    async def send(
            self,
            notification: AbstractNotification[EmailMessage],
            recipient: AbstractRecipient[str]
    ) -> NotificationResult:
        try:
            logger.debug("Building email message for sending...")
            message = notification.get_transport_message()
            contact = recipient.get_transport_contact()
            logger.info(f"Sending email to: {contact}")
            await self._smtp.send_message(message, sender=self._default_sender, recipients=contact)
            logger.info("Email sent successfully.")

            return NotificationResult(success=True)
        except SMTPException as e:
            logger.exception("SMTP error occurred during email sending.")
            return NotificationResult(success=False, error=str(e))
        except Exception as e:
            logger.exception("Unexpected error while sending email.")
            return NotificationResult(success=False, error="Unexpected error: " + str(e))


class EmailNotifierBuilder(AbstractNotifierBuilder[EmailMessage, str]):
    def add_client(
            self,
            default_sender: str,
            username: str,
            password: str,
            host: str,
            port: int,
            use_tls: bool
    ) -> Self:
        try:
            self._transport_client = EmailTransportClient(
                default_sender=default_sender,
                username=username,
                password=password,
                host=host,
                port=port,
                use_tls=use_tls
            )
            logger.debug("EmailTransportClient added to builder.")
            return self
        except Exception as e:
            logger.exception("Failed to initialize EmailTransportClient.")
            raise RuntimeError("Unable to configure email client.") from e

    def add_notification(
            self,
            subject: str,
            template_name: str,
            context: dict[str, Any],
            template_loader: TemplateLoader
    ) -> Self:
        try:
            logger.debug(f"Rendering template '{template_name}' with context: {context}")
            body = template_loader.quick_render(template_name, context)
            self._notification = EmailNotification(subject=subject, body=body)
            logger.debug("EmailNotification added to builder.")
            return self
        except Exception as e:
            logger.exception("Failed to render template or initialize EmailNotification.")
            raise e

    def set_notification(self, notification: EmailNotification) -> Self:
        self._notification = notification
        logger.debug("EmailNotification set on builder.")
        return self

    def add_recipient(
            self,
            email: str
    ) -> Self:
        try:
            recipient = EmailRecipient(email=email)
            self._recipients.add(recipient)
            logger.debug(f"Recipient '{email}' added to builder.")
            return self
        except Exception as e:
            logger.exception(f"Failed to add recipient: '{email}'")
            raise ValueError(f"Failed to add recipient: '{email}'") from e
