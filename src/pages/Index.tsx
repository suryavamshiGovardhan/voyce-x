
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiscoveryHero from "@/components/DiscoveryHero";
import MoodMeter from "@/components/MoodMeter";
import ExploreSection from "@/components/ExploreSection";

export default function Index() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <DiscoveryHero />
        <MoodMeter />
        <ExploreSection />
      </main>
      <Footer />
    </div>
  );
}
