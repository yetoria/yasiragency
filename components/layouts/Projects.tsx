import { StandaloneShineButton } from "../ui/cta";
import { ArrowRight } from "lucide-react";
import { useResponsiveInView } from "@/hooks/useResponsiveInView";

export default function Projects() {
  const [sectionRef, isInView] = useResponsiveInView<HTMLElement>({
    threshold: 0.2,
    once: true,
  });

  return (
    <section ref={sectionRef} className="py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-block px-4 py-1 bg-white/5 rounded-full border border-white/10 mb-6 opacity-0 ${
              isInView ? "animate-fade-in-up" : ""
            }`}
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <span className="text-purple-200/80 text-sm">Nos réalisations</span>
          </div>

          <div
            className={`relative p-8 md:p-12 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm 
            opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent rounded-2xl" />
            
            <div className="relative space-y-6">
              <h3 className="text-2xl md:text-4xl font-semibold text-white">
                Soyez notre premier client
              </h3>
              
              <p className="text-stone-400 max-w-2xl mx-auto text-sm md:text-base">
                Nous sommes prêts à faire de votre projet notre première réussite. 
                Bénéficiez d'une attention particulière et d'un accompagnement privilégié 
                pour donner vie à votre vision.
              </p>

              <div className="pt-4">
                <StandaloneShineButton
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  icon={
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  }
                >
                  Lancer votre projet
                </StandaloneShineButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
