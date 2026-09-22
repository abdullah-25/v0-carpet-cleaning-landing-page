import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Red Fox Steam Clean - Professional Steam Cleaning Services | Toronto",
  description:
    "Professional steam cleaning services for carpets, rugs, upholstery, and tile & grout in the Greater Toronto Area. Call (416) 460-5911 for a free quote.",
  keywords: ["carpet cleaning", "steam cleaning", "rug cleaning", "upholstery cleaning", "tile and grout cleaning", "Toronto", "GTA"],
  openGraph: {
    title: "Red Fox Steam Clean - Professional Steam Cleaning Services",
    description: "Professional steam cleaning for carpets, rugs, upholstery, and tile & grout. Serving the Greater Toronto Area.",
    type: "website",
    url: "https://redfoxsteamclean.com",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Red Fox Steam Clean",
  "description": "Professional steam cleaning services for carpets, rugs, upholstery, and tile & grout in the Greater Toronto Area.",
  "url": "https://redfoxsteamclean.com",
  "telephone": "+1-416-460-5911",
  "email": "info@redfoxsteamclean.com",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 43.6532,
      "longitude": -79.3832
    },
    "geoRadius": "50000"
  },
  "serviceType": ["Carpet Cleaning", "Rug Cleaning", "Upholstery Cleaning", "Tile and Grout Cleaning"],
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-416-460-5911",
    "contactType": "customer service",
    "email": "info@redfoxsteamclean.com",
    "availableLanguage": "English"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
