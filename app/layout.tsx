import type { Metadata } from "next";
import "./globals.css";
import { ArchitectsDaughter } from "@/fonts";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${ArchitectsDaughter.className} antialiased scrollbar`}>
        {children}
      </body>
    </html>
  );
}
