import { Metadata } from "next"
import { FC } from 'react'

export async function generateMetadata({ params }: { params: { username: string } }): Promise<Metadata> {
  const { username } = params;

  const profilePic = "https://i.imgur.com/f8fJ8jm.png";
  const followers = 21;

  const imageUrl = `https://silkeglam.com/api/og?username=${username}&followers=${followers}&profile_pic_url=${encodeURIComponent(profilePic)}`;

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


type PageProps = {
  params: {
    username: string
  }
}

const SharePage: FC<PageProps> = ({ params }) => {
  const { username } = params
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold">Share Page for @{username}</h1>
      <p>Link preview should now work across platforms ✅</p>
    </div>
  )
}

export default SharePage