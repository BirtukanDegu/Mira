import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mira",
  description: "Mira is a cozy little Kanban for your moods and thoughts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='antialiased'
      >
        {children}
      </body>
    </html>
  );
}
