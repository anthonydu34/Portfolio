import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARAZORANA.dev",
  description:
    "Portfolio freelance fullstack developper, CS student and open source contributor",
  keywords:
    "freelance, fullstack, developer, portfolio, open source, contributor, france, student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
