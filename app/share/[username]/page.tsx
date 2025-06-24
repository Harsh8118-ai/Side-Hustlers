import { Metadata } from "next";
import { Card } from "@/components/ui/card"
import { TrendingUp, IndianRupeeIcon } from "lucide-react"
import Image from "next/image"

const formatCurrency = (amount: string | number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(amount || 0));
};


export async function generateMetadata(
  { params }: { params: { username: string } }
): Promise<Metadata> {
  const username = params.username;

  const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const res = await fetch(`${BASE_URL}/api/instagram/user/${username}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return {
      title: "Instagram Income Calculator",
      description: "Calculate your Instagram income potential.",
    };
  }

  const data = await res.json();



  const imageUrl = `http://localhost:4000/api/og?username=${data.username}&followers=${data.follower_count}&profile_pic_url=${encodeURIComponent(
    data.profile_pic_url
  )}&per_post=${encodeURIComponent(data.per_post || "₹500")}&monthly=${encodeURIComponent(
    data.monthly || "₹2000"
  )}&yearly=${encodeURIComponent(data.yearly || "₹24000")}`;

  return {
    title: `@${data.username}'s Instagram Income`,
    description: "Check out your Instagram Income potential.",
    openGraph: {
      title: `@${data.username}'s Instagram Income`,
      description: "Even small creators can earn! 💸",
      images: [imageUrl],
      url: `http://localhost:4000/share/${data.username}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `@${data.username}'s Instagram Income`,
      description: "Even small creators can earn! 💸",
      images: [imageUrl],
    },
  };
}


export default async function SharePage(
  { params }: { params: { username: string } }
) {
  const username = params.username;
  const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const res = await fetch(`${BASE_URL}/api/instagram/user/${username}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    return <div className="p-6 text-white">User not found.</div>;
  }

  const data = await res.json();

  const {
    profile_pic_url,
    follower_count,
    following_count,
    media_count,
    full_name,
    bio,
    is_private,
    category,
    account_type,
  } = data;

  const sanitizedBio = bio?.replace(/(\r\n|\r|\n)/g, "\n") || "";
  const engagementRate = Number.parseFloat("3.5")
  const niche = "lifestyle"

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


  const accountTypeText = account_type === 1
    ? "Personal"
    : account_type === 2
      ? "Creator"
      : "Business";

  const baseRate = follower_count < 100 ? 0.5 : follower_count < 1000 ? 0.25 : 0.01
  const engagementMultiplier = Math.max(0.5, engagementRate / 3.5)
  const nicheMultiplier = nicheMultipliers[niche] || 1.0
  const privacyMultiplier = is_private ? 0.5 : 1.2

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


  return (
    <div className="min-h-screen  text-white px-4 py-8 flex justify-center">
      <div className="w-full max-w-screen-lg">

        {/* Profile Card */}
        <Card className="glassmorphism p-6 flex flex-col md:flex-row items-center md:items-start gap-6 mb-10">
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
              <h2 className="text-2xl font-bold">@{username}</h2>
              {is_private && (
                <span className="text-sm bg-red-500/20 text-red-400 px-2 py-1 rounded">Private</span>
              )}
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2 text-sm text-gray-300">
              <div><span className="text-white font-semibold">{media_count.toLocaleString()}</span> Posts</div>
              <div><span className="text-white font-semibold">{follower_count.toLocaleString()}</span> Followers</div>
              <div><span className="text-white font-semibold">{following_count.toLocaleString()}</span> Following</div>
            </div>

            <p className="text-gray-400 text-sm">{full_name}</p>
            <p className="text-gray-300 text-sm whitespace-pre-line">{sanitizedBio}</p>

            <div className="flex flex-wrap sm:flex-row gap-4 pt-4 text-sm text-gray-300 justify-center md:justify-start">
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

        {/* Earnings Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-center bg-white/5 p-6 rounded-xl shadow-inner backdrop-blur">
            <div className="bg-violet-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <IndianRupeeIcon className="text-violet-400" size={24} />
            </div>
            <h3 className="text-3xl font-bold mb-2">{formatCurrency(perPostEarnings)}</h3>
            <p className="text-gray-400">Per Sponsored Post</p>
          </div>

          <div className="text-center bg-white/5 p-6 rounded-xl shadow-inner backdrop-blur">
            <div className="bg-cyan-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-cyan-400" size={24} />
            </div>
            <h3 className="text-3xl font-bold mb-2">{formatCurrency(monthlyEarnings)}</h3>
            <p className="text-gray-400">Monthly Potential</p>
          </div>

          <div className="text-center bg-white/5 p-6 rounded-xl shadow-inner backdrop-blur">
            <div className="bg-green-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <IndianRupeeIcon className="text-green-400" size={24} />
            </div>
            <h3 className="text-3xl font-bold mb-2">{formatCurrency(yearlyEarnings)}</h3>
            <p className="text-gray-400">Yearly Potential</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">Want to know your potential earnings too?</p>
          <a href="/" className="inline-block bg-violet-600 text-white px-6 py-3 rounded-full hover:bg-violet-700 transition">
            🎯 Calculate Your Income
          </a>
        </div>

      </div>
    </div>
  );
}
