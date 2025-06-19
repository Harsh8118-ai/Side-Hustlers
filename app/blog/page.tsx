import { Card } from "@/components/ui/card"
import AdPlaceholder from "@/components/AdPlaceholder"
import BlogCard from "@/components/BlogCard"
import NewsletterSignup from "@/components/NewsletterSignup"
import Image from "next/image"

export const metadata = {
  title: "Blog & Resources - Instagram Earnings Calculator",
  description:
    "Learn how to grow your Instagram, increase engagement, and maximize your earnings with our expert guides and tips.",
}

const blogPosts = [
  {
    title: "5 Ways to Earn Money from Instagram in 2024",
    excerpt:
      "Discover the most effective monetization strategies for Instagram creators, from sponsored posts to affiliate marketing.",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "5 min read",
    category: "Monetization",
  },
  {
    title: "How to Grow Your Instagram Organically",
    excerpt: "Learn proven strategies to increase your followers and engagement without spending money on ads.",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "7 min read",
    category: "Growth",
  },
  {
    title: "Instagram Algorithm Secrets for 2024",
    excerpt: "Understand how the Instagram algorithm works and optimize your content for maximum reach and engagement.",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "6 min read",
    category: "Algorithm",
  },
  {
    title: "Creating Engaging Instagram Stories",
    excerpt:
      "Master the art of Instagram Stories to boost engagement and connect with your audience on a deeper level.",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "4 min read",
    category: "Content",
  },
  {
    title: "Influencer Marketing Rates Guide",
    excerpt: "Learn how to price your sponsored content and negotiate fair rates with brands and agencies.",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "8 min read",
    category: "Business",
  },
  {
    title: "Instagram Analytics: What Metrics Matter",
    excerpt: "Understand which Instagram metrics actually matter for growth and monetization success.",
    image: "/placeholder.svg?height=200&width=300",
    readTime: "5 min read",
    category: "Analytics",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-6">Blog & Resources</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert guides, tips, and strategies to help you grow your Instagram and maximize your earnings.
          </p>
        </div>

        <AdPlaceholder width="728" height="90" label="Top Banner Ad" className="mx-auto mb-12" />

        {/* Featured Post */}
        <Card className="glassmorphism p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="bg-violet-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Featured</span>
              <h2 className="text-3xl font-bold mt-4 mb-4 gradient-text">
                The Complete Guide to Instagram Monetization
              </h2>
              <p className="text-gray-300 mb-6">
                Everything you need to know about turning your Instagram account into a profitable business. From
                building your audience to securing brand deals.
              </p>
              <button className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Read Full Guide
              </button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Featured blog post"
                width={400}
                height={300}
                className="rounded-xl"
              />
            </div>
          </div>
        </Card>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <div key={index}>
              <BlogCard {...post} />
              {/* Ad between every 2-3 posts */}
              {(index + 1) % 3 === 0 && (
                <div className="mt-8">
                  <AdPlaceholder width="100%" height="200" label={`Inline Ad ${Math.floor(index / 3) + 1}`} />
                </div>
              )}
            </div>
          ))}
        </div>

        <AdPlaceholder width="728" height="90" label="Middle Banner Ad" className="mx-auto mb-12" />

        {/* Newsletter Signup */}
        <NewsletterSignup />

        <AdPlaceholder width="728" height="90" label="Bottom Banner Ad" className="mx-auto mt-12" />
      </div>
    </div>
  )
}
