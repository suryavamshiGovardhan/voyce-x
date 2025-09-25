
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiscoveryHero from "@/components/DiscoveryHero";
import MoodMeter from "@/components/MoodMeter";
import ExploreSection from "@/components/ExploreSection";
import LatestNews from "@/components/LatestNews";
import { LaurelWreath, GreekKeyBorder } from "@/components/CulturalPatterns";

// Cultural overlay configuration
const getCulturalOverlay = () => {
  return {
    pattern: (
      <>
        <LaurelWreath className="absolute top-20 left-10 w-48 h-16 animate-laurel-shimmer" />
        <GreekKeyBorder className="absolute bottom-10 right-10 w-40 h-4" />
      </>
    ),
    font: "font-zen" // Japanese zen aesthetic for overall calm
  };
};

export default function Index() {
  const { pattern, font } = getCulturalOverlay();
  return (
    <div className="bg-white relative overflow-hidden">
      {/* Subtle cultural SVG pattern in the background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {pattern}
      </div>
      <div className="relative z-10">
        <Navbar />
        <main>
          {/* Cultural font applied to main heading */}
          <h1 className={`text-5xl md:text-7xl mt-8 text-center text-greek-olympic ${font}`}>
            Welcome to VOYCE-X
          </h1>
          <DiscoveryHero />
          <MoodMeter />
          <div className="container mx-auto px-4 py-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ExploreSection />
              </div>
              <div className="lg:col-span-1">
                <LatestNews />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
