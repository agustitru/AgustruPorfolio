import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agustí Trullén - Ingeniero en Telecomunicaciones | Portfolio",
  description: "Portfolio profesional de Agustí Trullén, Ingeniero en Telecomunicaciones especializado en desarrollo de software, iOS, Android, diseño 3D, redes y telecomunicaciones en Barcelona.",
  keywords: ["Agustí Trullén", "Ingeniero Telecomunicaciones", "Desarrollo Software", "iOS", "Android", "Barcelona", "Desarrollo Web", "Redes", "Diseño 3D"],
  authors: [{ name: "Agustí Trullén" }],
  openGraph: {
    title: "Agustí Trullén - Ingeniero en Telecomunicaciones",
    description: "Portfolio profesional especializado en desarrollo de software y telecomunicaciones",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
