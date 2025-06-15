
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiscoveryHero from "@/components/DiscoveryHero";
import MoodMeter from "@/components/MoodMeter";
import ExploreSection from "@/components/ExploreSection";
import { MandalaPattern, LaurelWreath, GreekKeyBorder } from "@/components/CulturalPatterns";

// Example switch (in production, set this via context or page meta)
const getCulturalOverlay = () => {
  // For demonstration, apply the Mandala pattern with Indian font to the home.
  return {
    pattern: <MandalaPattern className="absolute inset-0 w-full h-full pointer-events-none" />,
    font: "font-indian" // tailwind font class for headline
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
          {/* Example: cultural font on headline */}
          <h1 className={`text-5xl md:text-7xl mt-8 text-center text-indian-saffron ${font}`}>
            Welcome to VOYCE-X
          </h1>
          <DiscoveryHero />
          <MoodMeter />
          <ExploreSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
