"use client"
import { useEffect } from "react"

declare global {
  interface Window {
    ezstandalone: {
      cmd: Function[]
      showAds: (...ids: number[]) => void
    }
  }
}
export {}

interface AdPlaceholderProps {
  width: string
  height: string
  label: string
  className?: string
  placementId: number 
}

export default function AdPlaceholder({
  width,
  height,
  label,
  className = "",
  placementId,
}: AdPlaceholderProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.ezstandalone?.cmd) {
      window.ezstandalone.cmd.push(function () {
        window.ezstandalone.showAds(placementId)
      })
    }
  }, [placementId])

  return (
    <div
      className={`ad-placeholder ${className}`}
      style={{
        width: width === "100%" ? "100%" : `${width}px`,
        height: `${height}px`,
      }}
    >
      <div id={`ezoic-pub-ad-placeholder-${placementId}`}></div>

      {/* Optional: Show label in dev mode only */}
      <div className="text-center text-xs opacity-50">
        <p className="font-medium">{label}</p>
        <p className="mt-1">{width} × {height}</p>
      </div>
    </div>
  )
}
