import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;800&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/gosha-sans" />
      </head>
      <body>{children}</body>
    </html>
  );
}