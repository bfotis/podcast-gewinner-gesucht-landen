
import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8 lg:px-10 bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Headphones className="h-6 w-6 text-podcast-blue" />
          <span className="text-xl font-bold text-podcast-grey-dark">GewinnerCast</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <a href="#konzept" className="text-podcast-grey-dark hover:text-podcast-blue transition-colors">
                  Konzept
                </a>
              </li>
              <li>
                <a href="#vorteile" className="text-podcast-grey-dark hover:text-podcast-blue transition-colors">
                  Vorteile
                </a>
              </li>
              <li>
                <a href="#bewerbung" className="text-podcast-grey-dark hover:text-podcast-blue transition-colors">
                  Bewerbung
                </a>
              </li>
            </ul>
          </nav>
          <Button className="bg-podcast-blue hover:bg-podcast-blue-dark text-white">
            Jetzt bewerben
          </Button>
        </div>
        <Button className="md:hidden bg-podcast-blue hover:bg-podcast-blue-dark text-white">
          Bewerben
        </Button>
      </div>
    </header>
  );
};

export default Header;
