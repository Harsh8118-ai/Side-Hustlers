import Hero from "@/components/Hero"
import CalculatorForm from "@/components/CalculatorForm"
import HowItWorks from "@/components/HowItWorks"
import AdPlaceholder from "@/components/AdPlaceholder"

export default function HomePage() {
  return (
    <div className="space-y-16 px-4 sm:px-6 lg:px-8">
      <Hero />

      {/* Ad Placeholder - Top Banner */}
      <div className="w-full flex justify-center">
        <AdPlaceholder
          width="100%"
          height="90"
          label="Top Banner Ad"
          className="w-full max-w-[728px] h-[90px]"
          placementId={101}
        />
      </div>

      <CalculatorForm />
      <HowItWorks />

      {/* Ad Placeholder - Bottom Banner */}
      <div className="w-full flex justify-center">
        <AdPlaceholder
          width="100%"
          height="90"
          label="Bottom Banner Ad"
          className="w-full max-w-[728px] h-[90px]"
          placementId={101}
        />
      </div>
    </div>
  )
}
