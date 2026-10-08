import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ivory Ink | Timeless Calligraphy",
  description: "A refined studio of contemporary Islamic calligraphy, thoughtful design and timeless art.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
