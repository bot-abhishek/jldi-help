import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz"],
  // weight omitted — Fraunces is a variable font; axes alone selects the full range
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "JaldiHelp — Local services, sorted.",
  description: "Ireland's location-first marketplace for trusted local services — from a leaking tap to a wedding priest.",
  openGraph: {
    title: "JaldiHelp — Local services, sorted.",
    description: "Ireland's location-first marketplace for trusted local services — from a leaking tap to a wedding priest.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plusJakarta.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}