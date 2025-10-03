import type React from "react"
import type { Metadata } from "next"
import { Lexend } from "next/font/google"
import "./globals.css"

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

const DEFAULT_URL = process.env.NEXT_PUBLIC_WEB_URL || "https://igorisolomon.github.io"

export const metadata: Metadata = {
  metadataBase: new URL(DEFAULT_URL),
  title: "Solomon Igori - Software Engineer",
  description: "Software Engineer from the United Kingdom with 5 years of experience.",
  keywords: ["portfolio", "personal portfolio", "software engineer"],
  authors: [{ name: "Solomon Igori", url: DEFAULT_URL }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Solomon Igori - Software Engineer",
    description: "Software Engineer from the United Kingdom with 5 years of experience.",
    url: DEFAULT_URL,
    siteName: "Solomon Igori",
    images: [
      {
        url: "/hero-screenshot.png",
        width: 1200,
        height: 630,
        alt: "Solomon Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solomon Igori - Software Engineer",
    description: "Software Engineer from the United Kingdom with 5 years of experience.",
    images: ["/hero-screenshot.png"],
    creator: "@pinavel_travel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${lexend.className} font-light antialiased`}>{children}</body>
    </html>
  )
}
