import { AboutSection } from "../components/AboutSection";
import { ApproachSection } from "../components/ApproachSection";
import { CertificatesSection } from "../components/CertificatesSection";
import { ContactSection } from "../components/ContactSection";
import { ExplorationsSection } from "../components/ExplorationsSection";
import { FeaturedWork } from "../components/FeaturedWork";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main">
        <HeroSection />
        <FeaturedWork />
        <ApproachSection />
        <SkillsSection />
        <AboutSection />
        <CertificatesSection />
        <ProjectsSection />
        <ExplorationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
