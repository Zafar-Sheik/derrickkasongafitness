// app/layout.tsx
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <body className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {children}
      </body>
    </html>
  );
}
