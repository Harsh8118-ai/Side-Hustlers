import { Card } from "@/components/ui/card"
import AdPlaceholder from "@/components/AdPlaceholder"
import BlogCard from "@/components/BlogCard"
import NewsletterSignup from "@/components/NewsletterSignup"
import Link from "next/link"
import Image from "next/image"
import blogPosts from "@/hooks/blogPosts" 
import BlogOne from "@/components/blogs/BlogOne"
import BlogTwo from "@/components/blogs/BlogTwo"
import BlogThree from "@/components/blogs/BlogThree"

export const metadata = {
  title: "Blog & Resources - Side Hustlers",
  description:
    "Learn how to grow your Instagram, increase engagement, and maximize your earnings with our expert guides and tips.",
}

export default function BlogPage() {
  return (
    <><div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-6">Blog & Resources</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert guides, tips, and strategies to help you grow your Instagram and maximize your earnings.
          </p>
        </div>

        <AdPlaceholder width="728" height="90" label="Top Banner Ad" className="mx-auto mb-12" placementId={101} />

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
              <Link href={`/blog/${post.slug}`}>
              <BlogCard {...post} />
              {/* Ad between every 2-3 posts */}
              {(index + 1) % 3 === 0 && (
                <div className="mt-8">
                  <AdPlaceholder width="100%" height="200" label={`Inline Ad ${Math.floor(index / 3) + 1}`} placementId={101} />
                </div>
              )}
              </Link>
            </div>
          ))}
        </div>

        <AdPlaceholder width="728" height="90" label="Middle Banner Ad" className="mx-auto mb-12" placementId={101} />

        {/* Newsletter Signup */}
        <NewsletterSignup />

        <AdPlaceholder width="728" height="90" label="Bottom Banner Ad" className="mx-auto mt-12" placementId={101} />
      </div>
    </div>
    <BlogTwo />
    <BlogOne />
    <BlogThree />
    </>
  )
}
