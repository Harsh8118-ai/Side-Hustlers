// app/api/og/route.ts
import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const username = searchParams.get("username") || "creator"
  const followers = searchParams.get("followers") || "0"
  const profilePic = searchParams.get("profile_pic_url") || "https://i.imgur.com/f8fJ8jm.png"

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          backgroundColor: "#0f172a",
          color: "white",
          fontSize: 32,
          fontFamily: "sans-serif",
          padding: 40,
        }}
      >
        <img
          src={profilePic}
          width={150}
          height={150}
          style={{ borderRadius: "100%", marginBottom: 20 }}
        />
        <h1 style={{ fontSize: 48 }}>{`@${username}`}</h1>
        <p>{`${followers} followers`}</p>
        <p style={{ fontSize: 24, color: "#00ff88", marginTop: 10 }}>
          Estimate your earnings on Instagram 💰
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
