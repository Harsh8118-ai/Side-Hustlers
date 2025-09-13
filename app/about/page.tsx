import { Card } from "@/components/ui/card"
import AdPlaceholder from "@/components/AdPlaceholder"
import Image from "next/image"

export const metadata = {
  title: "About - Side Hustlers",
  description:
    "Learn how our Instagram Income calculator works and our mission to help creators monetize their content.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            About Our Calculator
          </h1>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering creators to understand their earning potential and monetize their Instagram presence effectively.
          </p>
        </div>

        {/* Top Banner Ad */}
        {/* <div className="w-full flex justify-center">
          <AdPlaceholder
            width="100%"
            height="90"
            label="Top Banner Ad"
            className="w-full max-w-[728px] h-[90px]"
            placementId={101}
          />
        </div> */}

        {/* How It Works */}
        <Card className="glassmorphism p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 gradient-text">
            How Our Calculator Works
          </h2>
          <div className="space-y-6 text-gray-300 text-sm sm:text-base">
            <p>
              Our Instagram Income Calculator uses a sophisticated algorithm that analyzes multiple factors to provide
              accurate earning estimates for content creators and influencers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">📊 Data Analysis</h3>
                <ul className="space-y-2">
                  <li>• Follower count analysis</li>
                  <li>• Engagement rate calculation</li>
                  <li>• Niche-specific multipliers</li>
                  <li>• Market rate comparisons</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">💰 Revenue Streams</h3>
                <ul className="space-y-2">
                  <li>• Sponsored posts</li>
                  <li>• Brand partnerships</li>
                  <li>• Affiliate marketing</li>
                  <li>• Product placements</li>
                </ul>
              </div>
            </div>

            <div className="bg-violet-900/20 border border-violet-500/30 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-violet-300 mb-3">🔬 Our Formula</h3>
              <p>
                <code className="bg-gray-800 px-2 py-1 rounded text-sm">
                  Earnings = (Followers × Engagement Rate × Niche Multiplier × Market Rate) / 100
                </code>
              </p>
              <p className="mt-3 text-sm">
                This formula is based on industry standards and real market data from thousands of influencer campaigns.
              </p>
            </div>
          </div>
        </Card>

        {/* Mission Section */}
        <Card className="glassmorphism p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 gradient-text">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-gray-300 text-sm sm:text-base">
              <p>
                We believe every content creator deserves to understand their worth and monetize their passion
                effectively. Our mission is to provide transparent, accurate tools that help influencers make informed
                decisions about their careers.
              </p>
              <p>
                Whether you're just starting out or you're an established creator, our calculator helps you set
                realistic expectations and negotiate fair compensation for your content.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/AboutUs.png"
                alt="Mission illustration"
                width={300}
                height={300}
                className="rounded-xl"
              />
            </div>
          </div>
        </Card>

        {/* Middle Banner Ad */}
        {/* <div className="w-full flex justify-center">
          <AdPlaceholder
            width="100%"
            height="90"
            label="Middle Banner Ad"
            className="w-full max-w-[728px] h-[90px]"
            placementId={101}
          />
        </div> */}

        {/* Team Section */}
        {/* <Card className="glassmorphism p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 gradient-text">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Alex Johnson", role: "Founder & CEO", image: "/placeholder.svg?height=200&width=200" },
              { name: "Sarah Chen", role: "Data Scientist", image: "/placeholder.svg?height=200&width=200" },
              { name: "Mike Rodriguez", role: "Product Manager", image: "/placeholder.svg?height=200&width=200" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-violet-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </Card> */}

        {/* Bottom Banner Ad */}
        {/* <div className="w-full flex justify-center">
          <AdPlaceholder
            width="100%"
            height="90"
            label="Bottom Banner Ad"
            className="w-full max-w-[728px] h-[90px]"
            placementId={101}
          />
        </div> */}
      </div>
    </div>
  )
}
