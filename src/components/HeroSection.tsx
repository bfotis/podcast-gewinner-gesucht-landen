
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 px-4 md:px-8 bg-gradient-to-br from-podcast-grey-light/20 via-white to-podcast-blue/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-podcast-grey-dark mb-4">
            Podcast-Moderatoren <span className="text-podcast-blue">gesucht!</span>
          </h1>
          <p className="text-lg md:text-xl text-podcast-grey-medium mb-6 leading-relaxed">
            Werde Teil unseres neuen unterhaltsamen Podcasts über verrückte und lustige Erfolgsgeschichten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              size="lg" 
              className="bg-podcast-blue hover:bg-podcast-blue-dark text-white font-medium text-lg"
              onClick={() => document.getElementById('bewerbung')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Jetzt bewerben
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-podcast-blue text-podcast-blue hover:bg-podcast-blue/10"
              onClick={() => document.getElementById('konzept')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Mehr erfahren
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="aspect-square max-w-md mx-auto relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-podcast-blue rounded-full opacity-10 animate-pulse"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Mic className="w-20 h-20 md:w-32 md:h-32 text-podcast-blue" />
                </div>
                <div className="absolute inset-0 flex items-center justify-around">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div 
                      key={i} 
                      className={`h-full w-1 bg-podcast-blue/30 rounded-full animate-wave-${i % 3 + 1}`} 
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
