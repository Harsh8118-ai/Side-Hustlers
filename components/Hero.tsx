"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { TrendingUp, Users, DollarSign } from "lucide-react";
import { useDetails } from "@/hooks/useDetails";
import { useVisitorLogger } from "@/hooks/useVisitorLogger";
import { useRouter } from "next/navigation";


export default function Hero() {
  const [username, setUsername] = useState("");
  const { getDetails, loading, error, profile } = useDetails();
  useVisitorLogger();
  const router = useRouter();

  console.log("Hello From the Developer!");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    localStorage.setItem("username", username);

    const profile = await getDetails(username.trim());


    if (!profile) {
      alert("Profile data not loaded properly.");
      return;
    }

    const params = new URLSearchParams({
      username: profile.username,
      full_name: profile.full_name,
      biography: profile.biography,
      profile_pic_url: profile.profile_pic_url,
      follower_count: profile.follower_count?.toString() ?? "0",
      following_count: profile.following_count?.toString() ?? "0",
      media_count: profile.media_count?.toString() ?? "0",
      is_private: profile.is_private?.toString() ?? "false",
      account_type: profile.account_type?.toString() ?? "0",
      category: profile.category || "No Category",
    });

    router.push(`/calculator?${params.toString()}`);
  };

  return (
    <section className="relative py-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-gray-900 to-cyan-900/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-600/20 border border-violet-500/30 mb-8">
            <TrendingUp className="mr-2" size={16} />
            <span className="text-sm font-medium text-violet-300">
              Free Instagram Earnings Calculator
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Instagram Earnings Calculator</span>
          </h1>

          {/* Subtitle */}
          {/* <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Calculate your potential Instagram earnings based on followers,
            engagement rate, and niche. Get accurate estimates for sponsored
            posts, brand deals, and affiliate marketing.
          </p> */}

          {/* Calculator Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter Instagram username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 rounded-lg font-semibold text-white transition-all duration-300 neon-glow"
              >
                {loading ? "Loading..." : "Calculate Earnings"}
              </button>
            </div>
            {error && (
              <p className="text-sm text-red-400 mt-2">
                {error === "Request failed with status code 404"
                  ? "Username not found or account is private."
                  : error}
              </p>
            )}
          </form>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-violet-600/20 rounded-full mx-auto mb-4">
                <Users className="text-violet-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">500K+</h3>
              <p className="text-gray-400">Calculations Made</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-cyan-600/20 rounded-full mx-auto mb-4">
                <DollarSign className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">₹2M+</h3>
              <p className="text-gray-400">Earnings Calculated</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-green-600/20 rounded-full mx-auto mb-4">
                <TrendingUp className="text-green-400" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">95%</h3>
              <p className="text-gray-400">Accuracy Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
