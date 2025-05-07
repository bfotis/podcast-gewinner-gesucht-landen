
import { Headphones, Mic, Podcast } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-podcast-grey-dark text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Headphones className="h-6 w-6 text-podcast-blue-light" />
              <span className="text-xl font-bold">GewinnerCast</span>
            </div>
            <p className="text-podcast-grey-light leading-relaxed">
              Ein unterhaltsamer Podcast über verrückte und lustige Erfolgsgeschichten. Wir suchen Moderatoren, die gemeinsam mit uns dieses spannende Projekt zum Leben erwecken.
            </p>
          </div>
          
          <div className="md:col-span-2 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-podcast-grey-medium/30 pb-2">Podcast</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#konzept" className="text-podcast-grey-light hover:text-podcast-blue-light transition-colors">
                    Konzept
                  </a>
                </li>
                <li>
                  <a href="#vorteile" className="text-podcast-grey-light hover:text-podcast-blue-light transition-colors">
                    Vorteile
                  </a>
                </li>
                <li>
                  <a href="#bewerbung" className="text-podcast-grey-light hover:text-podcast-blue-light transition-colors">
                    Bewerbung
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-podcast-grey-medium/30 pb-2">Kontakt</h3>
              <ul className="space-y-3">
                <li className="text-podcast-grey-light">
                  Email: <a href="mailto:info@gewinnercast.de" className="hover:text-podcast-blue-light transition-colors">info@gewinnercast.de</a>
                </li>
                <li className="text-podcast-grey-light">
                  Telefon: +49 123 45678901
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4 border-b border-podcast-grey-medium/30 pb-2">Folge uns</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-full bg-podcast-grey-medium/20 flex items-center justify-center hover:bg-podcast-blue/30 transition-colors"
                >
                  <Podcast className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-podcast-grey-medium/20 flex items-center justify-center hover:bg-podcast-blue/30 transition-colors"
                >
                  <Mic className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-podcast-grey-medium/30 text-center text-podcast-grey-light">
          <p>© {currentYear} GewinnerCast. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
