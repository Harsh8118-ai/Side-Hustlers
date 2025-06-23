"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function RouteChangeAdHandler() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== "undefined" && window.ezstandalone?.cmd) {
      window.ezstandalone.cmd.push(() => {
        window.ezstandalone.showAds()
      })
    }
  }, [pathname])

  return null
}
