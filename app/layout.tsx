import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import RouteChangeAdHandler from "@/components/RouteChangeAdHandler"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Side Hustlers | Instagram Income Calculator – Estimate Your Earnings",
  description:
    "Find out how much you can earn from Instagram! Use our free Instagram Income Calculator to estimate earnings based on followers, engagement rate, and niche. Perfect for influencers and content creators.",
  keywords:
    "Instagram income calculator, Instagram earnings calculator, influencer income estimator, social media monetization, Instagram money calculator, Instagram revenue tool",
  authors: [{ name: "Side Hustlers" }],
  openGraph: {
    title: "Instagram Income Calculator – Estimate Your Earnings | Side Hustlers",
    description:
      "Use our free tool to estimate how much you can earn from Instagram based on your followers, engagement rate, and niche.",
    url: "https://silkeglam.com",
    siteName: "Side Hustlers",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Instagram Income Calculator Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Instagram Income Calculator by Side Hustlers",
    description:
      "Estimate your Instagram income instantly based on real metrics. Try our influencer earnings calculator now!",
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
  metadataBase: new URL("https://silkeglam.com"),
  category: "marketing",
  applicationName: "Instagram Income Calculator",
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
        <link rel="icon" href="/favicon.png" />
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
