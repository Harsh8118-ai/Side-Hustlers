"use client";

import CalculatorResult from "@/components/CalculatorResult";
import ShareButtons from "@/components/ShareButtons";
import AdPlaceholder from "@/components/AdPlaceholder";
import { Card } from "@/components/ui/card";

export default function CalculatorContent() {
  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold gradient-text mb-4">
          Your Instagram Income Potential
        </h1>
        <p className="text-gray-300 text-lg">
          Based on your profile analysis, here's what you could earn
        </p>
      </div>

      <CalculatorResult />
      <ShareButtons />
      <AdPlaceholder width="100%" height="250" label="Inline Content Ad" placementId={101} />

      <Card className="glassmorphism p-8">
        <h2 className="text-2xl font-bold mb-6 gradient-text">💡 Insights & Tips</h2>
        <div className="space-y-4 text-gray-300">
          <p className="text-lg">
            <span className="text-violet-400 font-semibold">Pro Tip:</span> With consistent posting and
            engagement, you could increase your earnings by 40-60% within 6 months.
          </p>
          <div className="bg-gray-800/50 p-4 rounded-lg">
            <h3 className="font-semibold text-white mb-2">Ways to boost your earnings:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Post consistently (1-2 times daily)</li>
              <li>Use trending hashtags in your niche</li>
              <li>Engage with your audience regularly</li>
              <li>Collaborate with other creators</li>
              <li>Create high-quality, valuable content</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card className="glassmorphism p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 gradient-text">Ready to Boost Your Instagram Growth?</h2>
        <p className="text-gray-300 mb-6">Try our recommended tools to accelerate your Instagram success</p>
        <button className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-700 hover:to-cyan-700 px-8 py-3 rounded-lg font-semibold transition-all duration-300 neon-glow">
          Explore Growth Tools
        </button>
      </Card>
    </>
  );
}
