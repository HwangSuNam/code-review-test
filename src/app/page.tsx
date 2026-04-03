import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import TimelineSection from "@/components/TimelineSection";
import FanMessageSection from "@/components/FanMessageSection";
import Footer from "@/components/Footer";
import SakuraParticles from "@/components/SakuraParticles";
import SparkleEffect from "@/components/SparkleEffect";

export default function Home() {
  return (
    <>
      <SakuraParticles />
      <SparkleEffect />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <TimelineSection />
        <FanMessageSection />
      </main>
      <Footer />
    </>
  );
}
