import { Metadata } from "next";

type Props = {
  params: {
    username: string;
  };
};

// ✅ Correct type and shape
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = params;

  const profilePic = "https://i.imgur.com/f8fJ8jm.png";
  const followers = 21;

  const imageUrl = `https://silkeglam.com/api/og?username=${username}&followers=${followers}&profile_pic_url=${encodeURIComponent(
    profilePic
  )}`;

  return {
    title: `@${username}'s Instagram Earnings`,
    description: "Check out your Instagram earning potential.",
    openGraph: {
      title: `@${username}'s Instagram Earnings`,
      description: "Even small creators can earn! 💸",
      images: [imageUrl],
      url: `https://silkeglam.com/share/${username}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `@${username}'s Instagram Earnings`,
      description: "Even small creators can earn! 💸",
      images: [imageUrl],
    },
  };
}

// ✅ Page component
export default function SharePage({ params }: Props) {
  const { username } = params;

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold">Share Page for @{username}</h1>
      <p>Link preview should now work across platforms ✅</p>
    </div>
  );
}
