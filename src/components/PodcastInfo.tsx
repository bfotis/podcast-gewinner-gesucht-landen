
import { Podcast, MessageSquare, Volume2 } from "lucide-react";

const PodcastInfo = () => {
  return (
    <section id="konzept" className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-podcast-grey-dark mb-4">
            Unser Podcast-<span className="text-podcast-blue">Konzept</span>
          </h2>
          <p className="text-lg text-podcast-grey-medium max-w-2xl mx-auto">
            Ein unterhaltsamer Podcast über Erfolgsgeschichten mit humorvollen und ungewöhnlichen Wendungen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          <div className="bg-gradient-to-b from-white to-podcast-blue/5 p-8 rounded-xl border border-podcast-grey-light/30 shadow-sm">
            <div className="w-14 h-14 rounded-lg bg-podcast-blue/10 flex items-center justify-center mb-6">
              <Podcast className="w-7 h-7 text-podcast-blue" />
            </div>
            <h3 className="text-xl font-semibold text-podcast-grey-dark mb-3">Leichte Unterhaltung</h3>
            <p className="text-podcast-grey-medium">
              Wir suchen Moderatoren, die humorvolle Gespräche führen können und Erfolgsgeschichten auf unterhaltsame Weise präsentieren.
            </p>
          </div>
          
          <div className="bg-gradient-to-b from-white to-podcast-blue/5 p-8 rounded-xl border border-podcast-grey-light/30 shadow-sm">
            <div className="w-14 h-14 rounded-lg bg-podcast-blue/10 flex items-center justify-center mb-6">
              <MessageSquare className="w-7 h-7 text-podcast-blue" />
            </div>
            <h3 className="text-xl font-semibold text-podcast-grey-dark mb-3">Verrückte Geschichten</h3>
            <p className="text-podcast-grey-medium">
              Von unerwarteten Erfolgen bis hin zu kuriosen Wendungen - wir lieben Geschichten, die Zuhörer zum Lachen und Staunen bringen.
            </p>
          </div>
          
          <div className="bg-gradient-to-b from-white to-podcast-blue/5 p-8 rounded-xl border border-podcast-grey-light/30 shadow-sm">
            <div className="w-14 h-14 rounded-lg bg-podcast-blue/10 flex items-center justify-center mb-6">
              <Volume2 className="w-7 h-7 text-podcast-blue" />
            </div>
            <h3 className="text-xl font-semibold text-podcast-grey-dark mb-3">Dynamisches Duo</h3>
            <p className="text-podcast-grey-medium">
              Wir suchen zwei Moderatoren, die gut miteinander harmonieren und gemeinsam ein unterhaltsames Hörerlebnis schaffen können.
            </p>
          </div>
        </div>
        
        <div className="mt-12 md:mt-20 bg-podcast-grey-dark/5 p-8 md:p-12 rounded-xl">
          <h3 className="text-2xl font-bold text-podcast-grey-dark mb-4">Über den Podcast</h3>
          <p className="text-podcast-grey-medium mb-6 leading-relaxed">
            "GewinnerCast" ist ein neuer Podcast, der sich auf unterhaltsame Weise mit dem Thema Erfolg beschäftigt. Anders als traditionelle Erfolgsgeschichten, konzentrieren wir uns auf die lustigen, unerwarteten und manchmal auch verrückten Wege, die Menschen zum Erfolg führen.
          </p>
          <p className="text-podcast-grey-medium leading-relaxed">
            Von zufälligen Glückstreffern über skurrile Erfindungen bis hin zu komischen Missgeschicken, die sich am Ende als Glücksfall herausstellten - wir wollen Geschichten erzählen, die nicht nur inspirieren, sondern auch zum Schmunzeln anregen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PodcastInfo;
