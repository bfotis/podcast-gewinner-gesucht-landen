
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PodcastInfo from "@/components/PodcastInfo";
import BenefitsSection from "@/components/BenefitsSection";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PodcastInfo />
        <BenefitsSection />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
