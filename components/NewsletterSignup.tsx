"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Mail, Send } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      // Here you would typically send the email to your newsletter service
      setIsSubmitted(true)
      setEmail("")
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <Card className="glassmorphism p-8 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="bg-violet-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
          <Mail className="text-violet-400" size={24} />
        </div>

        <h3 className="text-2xl font-bold gradient-text mb-4">Stay Updated with Instagram Tips</h3>
        <p className="text-gray-300 mb-6">
          Get the latest strategies, tips, and insights delivered to your inbox. Join 10,000+ creators growing their
          Instagram presence.
        </p>

        {isSubmitted ? (
          <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4">
            <p className="text-green-400 font-semibold">
              ✅ Thanks for subscribing! Check your email for confirmation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300"
              >
                <Send className="mr-2" size={16} />
                Subscribe
              </button>
            </div>
          </form>
        )}
      </div>
    </Card>
  )
}
