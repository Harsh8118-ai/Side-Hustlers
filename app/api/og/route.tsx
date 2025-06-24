// app/api/og/route.ts
import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"


export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const username = searchParams.get("username") || "creator"
  const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;


  // 👇 Fetch user data from your backend API
  const apiUrl = `${BASE_URL}/api/instagram/user/${username}`
  let data: any = {}

  try {
    const res = await fetch(apiUrl, { cache: "no-store" })
    if (res.ok) {
      const json = await res.json()
      data = json || {}
    }
  } catch (err) {
    console.error("Failed to fetch user data:", err)
  }

  // Fallbacks if not found
  const profilePic = data.profile_pic_url || "https://i.imgur.com/f8fJ8jm.png"
  const followers = data.follower_count || "0"
  const perPost = data.per_post || "₹500"
  const monthly = data.monthly || "₹2000"
  const yearly = data.yearly || "₹24000"

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
          background: "linear-gradient(135deg, #1f2937, #0f172a)",
          color: "white",
          fontSize: 28,
          fontFamily: "sans-serif",
          padding: 60,
        }}
      >
        <img
          src={profilePic}
          width={180}
          height={180}
          style={{ borderRadius: "100%", marginBottom: 24, border: "4px solid #8b5cf6" }}
        />
        <h1 style={{ fontSize: 52, fontWeight: "bold", marginBottom: 8 }}>{`@${username}`}</h1>
        <p style={{ fontSize: 22, color: "#cbd5e1", marginBottom: 12 }}>{`${followers} followers`}</p>

        <div
          style={{
            display: "flex",
            gap: 40,
            justifyContent: "center",
            marginTop: 20,
            textAlign: "center",
          }}
        >
          <div>
            <p style={{ fontSize: 18, color: "#94a3b8" }}>Per Post</p>
            <p style={{ fontSize: 32, fontWeight: "bold", color: "#38bdf8" }}>{perPost}</p>
          </div>
          <div>
            <p style={{ fontSize: 18, color: "#94a3b8" }}>Monthly</p>
            <p style={{ fontSize: 32, fontWeight: "bold", color: "#22d3ee" }}>{monthly}</p>
          </div>
          <div>
            <p style={{ fontSize: 18, color: "#94a3b8" }}>Yearly</p>
            <p style={{ fontSize: 32, fontWeight: "bold", color: "#34d399" }}>{yearly}</p>
          </div>
        </div>

        <p style={{ marginTop: 40, fontSize: 20, color: "#00ff88" }}>
          Estimate your Instagram Income 💰
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
