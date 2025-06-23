import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import RouteChangeAdHandler from "@/components/RouteChangeAdHandler"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Side Hustlers",
  description:
    "Calculate your potential Instagram earnings based on followers, engagement rate, and niche. Free Instagram income calculator for influencers and content creators.",
  keywords:
    "instagram earnings calculator, instagram income calculator, influencer earnings, social media monetization",
  authors: [{ name: "Instagram Earnings Calculator" }],
  openGraph: {
    title: "Instagram Earnings Calculator - Find Out How Much You Can Earn",
    description: "Calculate your potential Instagram earnings based on followers, engagement rate, and niche.",
    url: "https://instagram-earnings-calculator.com",
    siteName: "Instagram Earnings Calculator",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Instagram Earnings Calculator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Earnings Calculator - Find Out How Much You Can Earn",
    description: "Calculate your potential Instagram earnings based on followers, engagement rate, and niche.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* ✅ Ezoic Privacy Scripts */}
        <script
          src="https://cmp.gatekeeperconsent.com/min.js"
          data-cfasync="false"
        ></script>
        <script
          src="https://the.gatekeeperconsent.com/cmp.min.js"
          data-cfasync="false"
        ></script>

        {/* ✅ Ezoic Header Script */}
        <script async src="//www.ezojs.com/ezoic/sa.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.ezstandalone = window.ezstandalone || {};
              ezstandalone.cmd = ezstandalone.cmd || [];
            `,
          }}
        ></script>

        {/* Your original meta and links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#0f0f23" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        <Header />
        <RouteChangeAdHandler />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
