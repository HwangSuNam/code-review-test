import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MusicSection from "@/components/MusicSection";
import GallerySection from "@/components/GallerySection";
import TimelineSection from "@/components/TimelineSection";
import EventCountdown from "@/components/EventCountdown";
import QuizSection from "@/components/QuizSection";
import FanMessageSection from "@/components/FanMessageSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <MusicSection />
        <GallerySection />
        <TimelineSection />
        <EventCountdown />
        <QuizSection />
        <FanMessageSection />
      </main>
      <Footer />
    </>
  );
}
