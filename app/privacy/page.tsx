import { Card } from "@/components/ui/card"
import AdPlaceholder from "@/components/AdPlaceholder"

export const metadata = {
  title: "Privacy Policy - Instagram Earnings Calculator",
  description: "Our privacy policy explains how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-6">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: December 2024</p>
        </div>

        <AdPlaceholder width="728" height="90" label="Top Banner Ad" className="mx-auto mb-12" placementId={101} />

        <Card className="glassmorphism p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 gradient-text">Information We Collect</h2>
            <div className="text-gray-300 space-y-4">
              <p>We collect information you provide directly to us, such as:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Instagram usernames for calculation purposes</li>
                <li>Email addresses for newsletter subscriptions</li>
                <li>Contact form submissions</li>
                <li>Usage data and analytics</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 gradient-text">How We Use Your Information</h2>
            <div className="text-gray-300 space-y-4">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide and improve our calculator service</li>
                <li>Send newsletters and updates (with your consent)</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Analyze usage patterns to improve our service</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <AdPlaceholder width="100%" height="200" label="Inline Content Ad" placementId={101} />

          <section>
            <h2 className="text-2xl font-bold mb-4 gradient-text">Information Sharing</h2>
            <div className="text-gray-300 space-y-4">
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To trusted service providers who assist in operating our website</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 gradient-text">Cookies and Tracking</h2>
            <div className="text-gray-300 space-y-4">
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences</li>
                <li>Analyze website traffic and usage</li>
                <li>Provide personalized content and ads</li>
                <li>Improve our services</li>
              </ul>
              <p>You can control cookies through your browser settings.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 gradient-text">Data Security</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
                100% secure.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 gradient-text">Your Rights</h2>
            <div className="text-gray-300 space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 gradient-text">Contact Us</h2>
            <div className="text-gray-300">
              <p>
                If you have questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@instagram-calculator.com
                <br />
                Address: 123 Privacy Street, San Francisco, CA 94102
              </p>
            </div>
          </section>
        </Card>

        <AdPlaceholder width="728" height="90" label="Bottom Banner Ad" className="mx-auto mt-12" placementId={101} />
      </div>
    </div>
  )
}
