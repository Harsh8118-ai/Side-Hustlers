import { Metadata } from "next";

export async function generateMetadata(
  { params }: { params: { username: string } }
): Promise<Metadata> {
  const { username } = params;

  const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const res = await fetch(`${BASE_URL}/api/instagram/user/${username}`, {
    next: { revalidate: 60 }, // Cache for 60s
  });

  if (!res.ok) {
    return {
      title: "Instagram Earnings Calculator",
      description: "Calculate your Instagram income potential.",
    };
  }

  const data = await res.json();

  const imageUrl = `https://silkeglam.com/api/og?username=${data.username}&followers=${data.follower_count}&profile_pic_url=${encodeURIComponent(
    data.profile_pic_url
  )}&per_post=${encodeURIComponent(data.per_post || "₹500")}&monthly=${encodeURIComponent(
    data.monthly || "₹2000"
  )}&yearly=${encodeURIComponent(data.yearly || "₹24000")}`;

  return {
    title: `@${data.username}'s Instagram Earnings`,
    description: "Check out your Instagram earning potential.",
    openGraph: {
      title: `@${data.username}'s Instagram Earnings`,
      description: "Even small creators can earn! 💸",
      images: [imageUrl],
      url: `https://silkeglam.com/share/${data.username}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `@${data.username}'s Instagram Earnings`,
      description: "Even small creators can earn! 💸",
      images: [imageUrl],
    },
  };
}

// ✅ The share page UI
export default function SharePage(
  { params }: { params: { username: string } }
) {
  const { username } = params;

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold">Share Page for @{username}</h1>
      <p>Link preview should now work across platforms ✅</p>
    </div>
  );
}
