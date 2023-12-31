import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "akeo.me",
  description: "Happy New Year 2024",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
