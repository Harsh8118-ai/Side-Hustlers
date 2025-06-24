import { Card } from "@/components/ui/card"
import { Calculator, BarChart3, DollarSign, TrendingUp } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: Calculator,
      title: "Enter Your Details",
      description: "Provide your Instagram username, follower count, engagement rate, and content niche.",
    },
    {
      icon: BarChart3,
      title: "We Analyze Your Data",
      description: "Our algorithm analyzes your metrics against industry standards and market rates.",
    },
    {
      icon: DollarSign,
      title: "Get Your Estimate",
      description: "Receive detailed earnings estimates for sponsored posts, monthly, and yearly potential.",
    },
    {
      icon: TrendingUp,
      title: "Optimize & Grow",
      description: "Use our insights and tips to improve your monetization strategy and grow your earnings.",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold gradient-text mb-4">How It Works</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our Instagram Income calculator uses advanced algorithms and real market data to provide accurate earning
            estimates for content creators.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="glassmorphism p-6 text-center">
              <div className="bg-violet-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <step.icon className="text-violet-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
