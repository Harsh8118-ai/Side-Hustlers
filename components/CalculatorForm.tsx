"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Calculator, Users, Heart, Tag } from "lucide-react"
import { useRouter } from "next/navigation";

export default function CalculatorForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    followers: "",
    engagementRate: "",
    niche: "lifestyle",
  })

  const niches = [
    { value: "lifestyle", label: "Lifestyle", multiplier: "1.0x" },
    { value: "fashion", label: "Fashion", multiplier: "1.2x" },
    { value: "fitness", label: "Fitness", multiplier: "1.1x" },
    { value: "food", label: "Food", multiplier: "1.0x" },
    { value: "travel", label: "Travel", multiplier: "1.3x" },
    { value: "tech", label: "Technology", multiplier: "1.4x" },
    { value: "beauty", label: "Beauty", multiplier: "1.2x" },
    { value: "business", label: "Business", multiplier: "1.5x" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(formData)
    router.push(`/calculator?${params.toString()}`);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">Calculate Your Instagram Earnings</h2>
          <p className="text-xl text-gray-300">Enter your details below for a personalized earnings estimate</p>
        </div>

        <Card className="glassmorphism p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Username */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Users className="inline mr-2" size={16} />
                  Instagram Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="@yourusername"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  required
                />
              </div>

              {/* Followers */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Users className="inline mr-2" size={16} />
                  Follower Count
                </label>
                <input
                  type="number"
                  name="followers"
                  value={formData.followers}
                  onChange={handleInputChange}
                  placeholder="10000"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  required
                />
              </div>

              {/* Engagement Rate */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Heart className="inline mr-2" size={16} />
                  Engagement Rate (%)
                </label>
                <input
                  type="number"
                  name="engagementRate"
                  value={formData.engagementRate}
                  onChange={handleInputChange}
                  placeholder="3.5"
                  step="0.1"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  required
                />
              </div>

              {/* Niche */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Tag className="inline mr-2" size={16} />
                  Content Niche
                </label>
                <select
                  name="niche"
                  value={formData.niche}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
                >
                  {niches.map((niche) => (
                    <option key={niche.value} value={niche.value}>
                      {niche.label} ({niche.multiplier})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300 neon-glow"
              >
                <Calculator className="mr-2" size={20} />
                Calculate My Earnings
              </button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  )
}
