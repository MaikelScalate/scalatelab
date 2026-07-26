import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Scalate | E-commerce Growth Company",
  description:
    "Agencia especializada en optimización de conversiones (CRO), diseño web y crecimiento para marcas e-commerce.",

  metadataBase: new URL("https://scalatelab.com"),

  openGraph: {
    title: "Scalate Lab",
    description:
      "Construimos marcas e-commerce que escalan de manera rentable.",
    siteName: "Scalate Lab",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}