import type { Metadata } from "next";
import { Cormorant_Garamond, Syne } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-var",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-syne-var",
});

export const metadata: Metadata = {
  title: {
    default: "MasteryPath",
    template: "%s | MasteryPath",
  },
  description: "AI-driven adaptive learning for Python, AI Engineering, Forex, and Stocks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cormorantGaramond.variable} ${syne.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
