export const dynamic = "force-dynamic";

import { Suspense } from "react";
import CalculatorContent from "@/components/CalculatorContent";
import AdPlaceholder from "@/components/AdPlaceholder";

export default function CalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Suspense fallback={<div className="animate-pulse bg-gray-800 h-64 rounded-xl" />}>
              <CalculatorContent />
            </Suspense>
          </div>
          <div className="space-y-6">
            {/* <AdPlaceholder width="300" height="250" label="Sidebar Ad 1" placementId={101} /> */}
            {/* <AdPlaceholder width="300" height="600" label="Sidebar Ad 2" placementId={101} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
