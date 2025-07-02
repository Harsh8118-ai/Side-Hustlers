  import React from "react"
  import { notFound } from "next/navigation"

  import BlogOne from "@/components/blogs/BlogOne"
  import BlogTwo from "@/components/blogs/BlogTwo"
  import BlogThree from "@/components/blogs/BlogThree"

  interface BlogPostPageProps {
    params: {
      slug: string
    }
  }

  // Map slugs to blog components
  const blogComponentMap = {
    "instagram-giveaway-strategies-2025": <BlogOne />,
    "become-instagram-influencer": <BlogTwo />,
    "instagram-reels-strategies-2025": <BlogThree />,
  } satisfies Record<string, React.ReactNode>


  export function generateStaticParams() {
    return Object.keys(blogComponentMap).map((slug) => ({ slug }))
  }

  export default function BlogPostPage({ params }: BlogPostPageProps) {
    if (!(params.slug in blogComponentMap)) {
      return notFound()
    }

    const BlogComponent = blogComponentMap[params.slug as keyof typeof blogComponentMap]

    return (
      <div className="">
        {BlogComponent}
      </div>
    )
  }
