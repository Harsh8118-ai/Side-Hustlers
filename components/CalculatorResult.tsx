"use client"

import { useSearchParams } from "next/navigation"
import { Card } from "@/components/ui/card"
import { TrendingUp, IndianRupeeIcon } from "lucide-react"
import Image from "next/image"

interface ProfileData {
  username: string
  full_name: string
  biography: string
  profile_pic_url: string
  follower_count: number
  following_count: number
  media_count: number
  is_private: boolean
  account_type: number
  category: string
}

export default function CalculatorResult() {
  const searchParams = useSearchParams()
  const engagementRate = Number.parseFloat(searchParams.get("engagementRate") || "3.5")
  const niche = searchParams.get("niche") || "lifestyle"

  const accountTypeLabel = (type: number): string => {
    switch (type) {
      case 1:
        return "Personal"
      case 2:
        return "Business"
      case 3:
        return "Creator"
      default:
        return "Unknown"
    }
  }

  const profile = {
    username: searchParams.get("username") || "",
    full_name: searchParams.get("full_name") || "",
    biography: searchParams.get("biography") || "",
    profile_pic_url: searchParams.get("profile_pic_url") || "",
    follower_count: Number(searchParams.get("follower_count") || "0"),
    following_count: Number(searchParams.get("following_count") || "0"),
    media_count: Number(searchParams.get("media_count") || "0"),
    is_private: searchParams.get("is_private") === "true",
    account_type: Number(searchParams.get("account_type") || "0"),
    category: searchParams.get("category") || "",
  }

  const {
    username,
    full_name,
    biography,
    profile_pic_url,
    follower_count,
    following_count,
    media_count,
    is_private,
    account_type,
    category,
  } = profile

  const nicheMultipliers: { [key: string]: number } = {
    lifestyle: 1.0,
    fashion: 1.2,
    fitness: 1.1,
    food: 1.0,
    travel: 1.3,
    tech: 1.4,
    beauty: 1.2,
    business: 1.5,
  }

  const baseRate = follower_count < 100 ? 0.5 : follower_count < 1000 ? 0.25 : 0.01
  const engagementMultiplier = Math.max(0.5, engagementRate / 3.5)
  const nicheMultiplier = nicheMultipliers[niche] || 1.0
  const privacyMultiplier = is_private ? 0.5 : 1.2

  const accountTypeText = accountTypeLabel(account_type)
  const accountTypeBoost: { [key: string]: number } = {
    Personal: 1.0,
    Business: 1.2,
    Creator: 1.3,
    Unknown: 0.9,
  }

  const accountBoost = accountTypeBoost[accountTypeText] || 1.0
  const totalMultiplier = engagementMultiplier * nicheMultiplier * accountBoost * privacyMultiplier

  const monthlyEarnings = Math.round(follower_count * baseRate * totalMultiplier * 4)
  const yearlyEarnings = monthlyEarnings * 12
  const perPostEarnings = Math.round(monthlyEarnings / 4)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const sanitizedBio = biography.replace(/</g, "&lt;").replace(/>/g, "&gt;")

  return (
    <div id="capture-area" className="space-y-8">
      <Card className="glassmorphism p-6 flex flex-col md:flex-row items-center gap-6 mb-8">
        {profile_pic_url && (
          <Image
            src={`https://images.weserv.nl/?url=${encodeURIComponent(profile_pic_url.replace(/^https?:\/\//, ''))}`}
            alt="Profile Pic"
            width={96}
            height={96}
            className="rounded-full border-2 border-violet-500 object-cover"
            unoptimized
            referrerPolicy="no-referrer"
          />
        )}
        <div className="flex-1 space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <h2 className="text-2xl font-bold text-white">@{username}</h2>
            {is_private && (
              <span className="text-sm bg-red-500/20 text-red-400 px-2 py-1 rounded">Private</span>
            )}
          </div>
          <div className="flex justify-center md:justify-start gap-4 pt-2 text-sm text-gray-300">
            <div><span className="text-white font-semibold">{media_count.toLocaleString()}</span> Posts</div>
            <div><span className="text-white font-semibold">{follower_count.toLocaleString()}</span> Followers</div>
            <div><span className="text-white font-semibold">{following_count.toLocaleString()}</span> Following</div>
          </div>
          <p className="text-gray-400 text-sm">{full_name}</p>
          <p className="text-gray-300 text-sm whitespace-pre-line">{sanitizedBio}</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 text-sm text-gray-300">
            <div><span className="text-white font-semibold">Account Type:</span> {accountTypeText}</div>
            <div><span className="text-white font-semibold">Category:</span> {category}</div>
          </div>
          {follower_count < 500 && !is_private && (
            <p className="text-green-400 text-sm pt-2">
              Even small creators like you can start earning! 🌱
            </p>
          )}
        </div>
      </Card>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="text-center">
          <div className="bg-violet-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <IndianRupeeIcon className="text-violet-400" size={24} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">{formatCurrency(perPostEarnings)}</h3>
          <p className="text-gray-400">Per Sponsored Post</p>
        </div>

        <div className="text-center">
          <div className="bg-cyan-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="text-cyan-400" size={24} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">{formatCurrency(monthlyEarnings)}</h3>
          <p className="text-gray-400">Monthly Potential</p>
        </div>

        <div className="text-center">
          <div className="bg-green-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <IndianRupeeIcon className="text-green-400" size={24} />
          </div>
          <h3 className="text-3xl font-bold text-white mb-2">{formatCurrency(yearlyEarnings)}</h3>
          <p className="text-gray-400">Yearly Potential</p>
        </div>
      </div>

      <Card className="glassmorphism p-6">
        <h3 className="text-xl font-bold mb-4 gradient-text">Earnings Breakdown</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Base Rate (per follower)</span>
            <span className="text-white">₹{baseRate.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Engagement Multiplier</span>
            <span className="text-white">{engagementMultiplier.toFixed(2)}x</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Niche Multiplier ({niche})</span>
            <span className="text-white">{nicheMultiplier.toFixed(2)}x</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Account Type Boost</span>
            <span className="text-white">{accountBoost.toFixed(2)}x</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Privacy Adjustment</span>
            <span className="text-white">{privacyMultiplier.toFixed(2)}x</span>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <div className="flex justify-between items-center font-semibold">
              <span className="text-white">Estimated Per Post</span>
              <span className="text-violet-400">{formatCurrency(perPostEarnings)}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
