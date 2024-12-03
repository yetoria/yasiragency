import { StandaloneShineButton } from "../ui/cta";
import { ArrowRight, CalendarClock, Mail } from "lucide-react";
import { useResponsiveInView } from "@/hooks/useResponsiveInView";

export default function Contact() {
  const [sectionRef, isInView] = useResponsiveInView<HTMLDivElement>({
    threshold: 0.1,
    once: true,
  });

  return (
    <div
      ref={sectionRef}
      className="container mx-auto px-4 py-16 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center relative">
        <h2
          className={`text-3xl md:text-5xl font-semibold mb-4 md:mb-6 text-stone-100 font-instrument
            opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          Votre <span className="text-purple-300">site sur-mesure</span>, pour
          des résultats concrets
        </h2>

        <p
          className={`text-stone-400 mb-8 md:mb-12 text-base md:text-lg
            opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          De la création à la mise en ligne, on s'occupe de tout pour vous
          offrir un site qui attire et retient l'attention.
        </p>

        <div
          className={`opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          {/* Card de contact */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-12 backdrop-blur-sm max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-6 md:gap-8">
              <div className="space-y-4 md:space-y-6 text-center">
                <h3 className="text-2xl md:text-3xl text-stone-200 font-light">
                  Lancez votre projet web avec nous
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <p className="text-xs md:text-lg text-stone-400">
                    Que ce soit pour un site e-commerce, vitrine ou une app web,
                    on maîtrise les dernières technologies pour répondre à vos
                    besoins.
                  </p>
                  <div className="inline-flex items-center gap-3 text-purple-200/80">
                    <span className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    Brief et devis en moins de 24h
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full sm:flex-row-reverse sm:gap-4 justify-center">
                <a
                  href="https://wa.me/33787497367"
                  className="w-full sm:w-auto"
                >
                  <StandaloneShineButton
                    icon={
                      <Mail className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    }
                  >
                    Détaillez votre besoin
                    <ArrowRight className="w-4 h-4" />
                  </StandaloneShineButton>
                </a>

                <a
                  href="https://calendly.com/yasiragency-proton/consultation-pour-la-creation-de-votre-projet?month=2024-12&date=2024-12-03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-auto sm:w-auto"
                >
                  <button
                    className="px-4 py-2.5 border border-white/10 rounded-lg text-stone-200/70 
                    hover:bg-white/10 hover:border-white/20 transition-all duration-300 
                    flex items-center justify-center gap-2"
                  >
                    <CalendarClock className="w-4 h-4" />
                    <span>Planifiez une consultation</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
