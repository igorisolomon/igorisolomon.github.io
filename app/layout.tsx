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

export const metadata: Metadata = {
  title: "Solomon Igori - Software Engineer",
  description: "Software Engineer from the United Kingdom with 5 years of experience.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.className} font-light antialiased`}>{children}</body>
    </html>
  )
}
