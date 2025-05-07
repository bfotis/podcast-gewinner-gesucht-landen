
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    title: "Kreative Freiheit",
    description: "Gestalte den Podcast mit und bringe deine eigenen Ideen ein."
  },
  {
    title: "Professionelles Equipment",
    description: "Wir stellen hochwertige Aufnahmetechnik und ein Studio zur Verfügung."
  },
  {
    title: "Flexible Aufnahmezeiten",
    description: "Aufnahmen werden nach gemeinsamer Absprache geplant."
  },
  {
    title: "Fairer Vergütung",
    description: "Attraktive Vergütung pro aufgenommener Episode."
  },
  {
    title: "Mediale Präsenz",
    description: "Möglichkeit, dich als Persönlichkeit im deutschsprachigen Podcast-Markt zu etablieren."
  },
  {
    title: "Netzwerk aufbauen",
    description: "Kontakte zu Gästen und anderen Medienschaffenden knüpfen."
  }
];

const BenefitsSection = () => {
  return (
    <section id="vorteile" className="py-16 md:py-24 px-4 md:px-8 bg-podcast-blue/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-podcast-grey-dark mb-4">
            Deine <span className="text-podcast-blue">Vorteile</span>
          </h2>
          <p className="text-lg text-podcast-grey-medium max-w-2xl mx-auto">
            Als Podcast-Moderator bei uns profitierst du von diesen Vorteilen
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-podcast-grey-light/30 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-podcast-blue shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-podcast-grey-dark mb-2">{benefit.title}</h3>
                  <p className="text-podcast-grey-medium">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-16 bg-white p-8 md:p-10 rounded-xl border border-podcast-grey-light/30 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-podcast-grey-dark mb-4">
                Das ideale Moderatoren-Profil
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-podcast-blue shrink-0" />
                  <span className="text-podcast-grey-medium">Humorvolles und natürliches Auftreten</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-podcast-blue shrink-0" />
                  <span className="text-podcast-grey-medium">Interesse an unterhaltsamen Erfolgsgeschichten</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-podcast-blue shrink-0" />
                  <span className="text-podcast-grey-medium">Gute Moderations- und Gesprächsführungsfähigkeiten</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-podcast-blue shrink-0" />
                  <span className="text-podcast-grey-medium">Zuverlässigkeit und Teamfähigkeit</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-podcast-blue shrink-0" />
                  <span className="text-podcast-grey-medium">Bereitschaft für regelmäßige Aufnahmen</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-podcast-blue/10 p-6 rounded-lg border border-podcast-blue/20">
                <h4 className="text-xl font-semibold text-podcast-grey-dark mb-3">Wir suchen kein spezifisches Alter oder Geschlecht</h4>
                <p className="text-podcast-grey-medium mb-4">
                  Uns ist wichtig, dass du authentisch bist und gut mit deinem Co-Moderator harmonierst. Vorerfahrung im Podcasting ist von Vorteil, aber kein Muss.
                </p>
                <p className="text-podcast-grey-medium">
                  Wir freuen uns auf deine Bewerbung und sind gespannt auf deine Persönlichkeit!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
