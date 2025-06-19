import { Card } from "@/components/ui/card"
import ContactForm from "@/components/ContactForm"
import AdPlaceholder from "@/components/AdPlaceholder"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata = {
  title: "Contact Us - Instagram Earnings Calculator",
  description:
    "Get in touch with our team. We're here to help with any questions about our Instagram earnings calculator.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions about our calculator or need help with your Instagram monetization journey? We're here to
            help!
          </p>
        </div>

        <AdPlaceholder width="728" height="90" label="Top Banner Ad" className="mx-auto mb-12" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glassmorphism p-8">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Send us a message</h2>
            <ContactForm />
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="glassmorphism p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-violet-400" size={20} />
                  <span className="text-gray-300">hello@instagram-calculator.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-violet-400" size={20} />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-violet-400" size={20} />
                  <span className="text-gray-300">San Francisco, CA</span>
                </div>
              </div>
            </Card>

            <AdPlaceholder width="100%" height="250" label="Sidebar Ad" />

            {/* Social Links */}
            <Card className="glassmorphism p-6">
              <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
              <div className="flex space-x-4">
                {["Instagram", "Twitter", "LinkedIn", "YouTube"].map((platform) => (
                  <button
                    key={platform}
                    className="bg-gray-800 hover:bg-violet-600 px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </Card>

            {/* FAQ Section */}
            <Card className="glassmorphism p-6">
              <h3 className="text-xl font-bold mb-4 gradient-text">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <details className="group">
                  <summary className="cursor-pointer text-white font-semibold group-open:text-violet-400">
                    Is the earnings data accurate?
                  </summary>
                  <p className="mt-2 text-gray-300 text-sm">
                    Our calculator provides estimates based on industry standards and real market data. Actual earnings
                    may vary based on various factors.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer text-white font-semibold group-open:text-violet-400">
                    How often is the data updated?
                  </summary>
                  <p className="mt-2 text-gray-300 text-sm">
                    We update our algorithms and market rates monthly to ensure accuracy.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer text-white font-semibold group-open:text-violet-400">
                    Can I use this for other social platforms?
                  </summary>
                  <p className="mt-2 text-gray-300 text-sm">
                    Currently, our calculator is specifically designed for Instagram. We're working on expanding to
                    other platforms.
                  </p>
                </details>
              </div>
            </Card>
          </div>
        </div>

        <AdPlaceholder width="728" height="90" label="Bottom Banner Ad" className="mx-auto mt-12" />
      </div>
    </div>
  )
}
