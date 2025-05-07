
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    motivation: "",
    funnyStory: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Bewerbung eingegangen!",
        description: "Vielen Dank für deine Bewerbung. Wir melden uns in Kürze bei dir.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        motivation: "",
        funnyStory: ""
      });
    }, 1500);
  };

  return (
    <section id="bewerbung" className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-podcast-grey-dark mb-4">
            Deine <span className="text-podcast-blue">Bewerbung</span>
          </h2>
          <p className="text-lg text-podcast-grey-medium max-w-2xl mx-auto">
            Du hast Interesse? Großartig! Fülle das Formular aus und wir melden uns bei dir.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg border border-podcast-grey-light/30 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-podcast-blue p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Bewerbungsprozess</h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="font-bold bg-white text-podcast-blue rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <span>Formular ausfüllen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold bg-white text-podcast-blue rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <span>Erstes Telefoninterview</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold bg-white text-podcast-blue rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <span>Test-Aufnahme mit potentiellen Co-Moderatoren</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold bg-white text-podcast-blue rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5">4</span>
                  <span>Finale Entscheidung</span>
                </li>
              </ol>
            </div>
            
            <div className="md:w-2/3 p-8">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-podcast-grey-dark mb-1">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Dein vollständiger Name"
                      className="w-full"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-podcast-grey-dark mb-1">
                        E-Mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="deine@email.de"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-podcast-grey-dark mb-1">
                        Telefon
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Deine Telefonnummer"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-podcast-grey-dark mb-1">
                      Erfahrung im Bereich Podcasting/Moderation
                    </label>
                    <Textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="Erzähle uns von deinen bisherigen Erfahrungen (falls vorhanden)"
                      className="w-full min-h-[80px]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="motivation" className="block text-sm font-medium text-podcast-grey-dark mb-1">
                      Motivation *
                    </label>
                    <Textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      required
                      placeholder="Warum möchtest du Teil unseres Podcasts werden?"
                      className="w-full min-h-[100px]"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="funnyStory" className="block text-sm font-medium text-podcast-grey-dark mb-1">
                      Deine lustige Erfolgsgeschichte *
                    </label>
                    <Textarea
                      id="funnyStory"
                      name="funnyStory"
                      value={formData.funnyStory}
                      onChange={handleChange}
                      required
                      placeholder="Teile mit uns eine persönliche, lustige Erfolgsgeschichte"
                      className="w-full min-h-[120px]"
                    />
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-podcast-blue hover:bg-podcast-blue-dark text-white font-medium py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Wird gesendet..." : "Bewerbung absenden"}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
