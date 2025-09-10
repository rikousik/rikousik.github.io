import Background from "@/components/portfolio/Background";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import HeroSection from "@/components/portfolio/HeroSection";
import Navigation from "@/components/portfolio/Navigation";
import OverviewSection from "@/components/portfolio/OverviewSection";
import Projects from "@/components/portfolio/Projects";
import WorkExperience from "@/components/portfolio/WorkExperience";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-white relative">
      <Background />
      <Navigation />
      <div className="max-w-6xl mx-auto px-6 pt-24">
        <HeroSection />
        <OverviewSection />
        <WorkExperience />
        <Projects />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
