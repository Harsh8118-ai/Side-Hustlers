"use client"

import { useState } from "react"
import { Copy, MessageCircle, Twitter, Instagram } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function ShareButtons() {
  const [copied, setCopied] = useState(false)

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = "Check out my Instagram earnings potential! 💰"

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy link:", err)
    }
  }

  const handleWhatsAppShare = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`
    window.open(url, "_blank")
  }

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
    window.open(url, "_blank")
  }

  const handleInstagramStory = () => {
    // Instagram doesn't have a direct share API, so we'll copy the link
    handleCopyLink()
    alert("Link copied! You can now paste it in your Instagram Story.")
  }

  return (
    <Card className="glassmorphism p-6">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold gradient-text mb-2">Share Your Results</h3>
        <p className="text-gray-300">Let others know about your earning potential!</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button
          onClick={handleCopyLink}
          className="flex flex-col items-center p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors duration-300"
        >
          <Copy className="text-violet-400 mb-2" size={24} />
          <span className="text-sm text-white">{copied ? "Copied!" : "Copy Link"}</span>
        </button>

        <button
          onClick={handleWhatsAppShare}
          className="flex flex-col items-center p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors duration-300"
        >
          <MessageCircle className="text-green-400 mb-2" size={24} />
          <span className="text-sm text-white">WhatsApp</span>
        </button>

        <button
          onClick={handleTwitterShare}
          className="flex flex-col items-center p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors duration-300"
        >
          <Twitter className="text-blue-400 mb-2" size={24} />
          <span className="text-sm text-white">Twitter</span>
        </button>

        <button
          onClick={handleInstagramStory}
          className="flex flex-col items-center p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors duration-300"
        >
          <Instagram className="text-pink-400 mb-2" size={24} />
          <span className="text-sm text-white">IG Story</span>
        </button>
      </div>
    </Card>
  )
}
