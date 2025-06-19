import { Card } from "@/components/ui/card"
import AdPlaceholder from "@/components/AdPlaceholder"

export const metadata = {
  title: "Terms of Service - Instagram Earnings Calculator",
  description: "Terms of service and conditions for using our Instagram earnings calculator.",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold gradient-text mb-6">Terms of Service</h1>
          <p className="text-gray-300">Last updated: December 2024</p>
        </div>

        <AdPlaceholder width="728" height="90" label="Top Banner Ad" className="mx-auto mb-12" />

        <Card className="glassmorphism p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 gradient-text">Acceptance of Terms</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                By accessing and using the Instagram Earnings Calculator website and services, you accept and agree to
                be bound by the terms and provision of this agreement.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 gradient-text">Use License</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Permission is granted to temporarily use our calculator for personal, non-commercial transitory viewing
                only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on our website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>
          </section>

          <AdPlaceholder width="100%" height="200" label="Inline Content Ad" />

          <section>
            <h2 className="text-2xl font-bold mb-4 gradient-text">Disclaimer</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                The earnings estimates provided by our calculator are for informational purposes only. Actual earnings
                may vary significantly based on numerous factors including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Market conditions and demand</li>
                <li>Content quality and consistency</li>
                <li>Audience engagement and demographics</li>
                <li>Brand partnerships and negotiation skills</li>
                <li>Platform algorithm changes</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 gradient-text">Limitations</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                In no event shall Instagram Earnings Calculator or its suppliers be liable for any damages (including,
                without limitation, damages for loss of data or profit, or due to business interruption) arising out of
                the use or inability to use our calculator, even if we have been notified orally or in writing of the
                possibility of such damage.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 gradient-text">Accuracy of Materials</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                The materials appearing on our website could include technical, typographical, or photographic errors.
                We do not warrant that any of the materials on its website are accurate, complete, or current. We may
                make changes to the materials contained on its website at any time without notice.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 gradient-text">Modifications</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                We may revise these terms of service for its website at any time without notice. By using this website,
                you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 gradient-text">Contact Information</h2>
            <div className="text-gray-300">
              <p>
                If you have any questions about these Terms of Service, please contact us at:
                <br />
                Email: legal@instagram-calculator.com
                <br />
                Address: 123 Legal Street, San Francisco, CA 94102
              </p>
            </div>
          </section>
        </Card>

        <AdPlaceholder width="728" height="90" label="Bottom Banner Ad" className="mx-auto mt-12" />
      </div>
    </div>
  )
}
