import { StandaloneShineButton } from "../ui/cta";
import { ArrowRight } from "lucide-react";
import { useResponsiveInView } from "@/hooks/useResponsiveInView";

export default function Processus() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [sectionRef, isInView] = useResponsiveInView<HTMLElement>({
    threshold: 0.1,
    once: true,
  });

  const etapes = [
    {
      numero: "01",
      titre: "Découverte",
      description:
        "Échange pour comprendre vos objectifs et définir vos besoins",
      icon: "🤝",
      sousTitre: "Premier contact",
      color: "from-blue-500/10 to-transparent",
      progressColor: "bg-blue-400/60",
      textColor: "text-blue-400",
    },
    {
      numero: "02",
      titre: "Proposition",
      description:
        "Présentation détaillée de la solution, du budget et du planning prévisionnel",
      icon: "📝",
      sousTitre: "Plan d'action",
      color: "from-emerald-500/10 to-transparent",
      progressColor: "bg-emerald-400/60",
      textColor: "text-emerald-400",
    },
    {
      numero: "03",
      titre: "Production",
      description:
        "Développement itératif avec points d'étape réguliers et validations",
      icon: "⚙️",
      sousTitre: "Développement",
      color: "from-amber-500/10 to-transparent",
      progressColor: "bg-amber-400/60",
      textColor: "text-amber-400",
    },
    {
      numero: "04",
      titre: "Livraison",
      description:
        "Mise en production et déploiement de votre projet après validation finale",
      icon: "🚀",
      sousTitre: "Final",
      color: "from-purple-500/10 to-transparent",
      progressColor: "bg-purple-400/60",
      textColor: "text-purple-400",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div
          className={`text-center space-y-4 mb-12 md:mb-16 opacity-0 ${
            isInView ? "animate-fade-in-up" : ""
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-stone-100 font-instrument">
            Notre Processus de
            <span className="text-purple-400/90"> Réalisation</span>
          </h2>

          <p className="text-stone-400 text-center max-w-2xl mx-auto text-sm md:text-base">
            Une approche méthodique et transparente pour transformer votre
            vision en réalité
          </p>

          {/* Stats responsives */}
          <div
            className={`flex flex-col md:flex-row justify-center gap-6 md:gap-12 mt-8 transition-all duration-700 ${
              isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">2-4</div>
              <div className="text-xs md:text-sm text-stone-400">
                Semaines par Projet
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold">100%</div>
              <div className="text-xs md:text-sm text-stone-400">
                Implication
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400">Nouveau</div>
              <div className="text-xs md:text-sm text-stone-400">
                Studio Digital
              </div>
            </div>
          </div>
        </div>

        {/* Grille des étapes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {etapes.map((etape, index) => (
            <div
              key={etape.numero}
              className={`group relative opacity-0 ${
                isInView ? "animate-fade-in-up" : ""
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: "forwards",
              }}
            >
              <div
                className={`absolute z-[-1] inset-0 bg-gradient-to-b ${etape.color} rounded-xl 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
              />
              <div
                className={`relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-${etape.color.split('-')[1]}/30 rounded-xl p-6 md:p-8
                transform transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="text-3xl md:text-4xl mb-4">{etape.icon}</div>
                <div className="flex items-center gap-2 mb-4">
                  <div className={`${etape.textColor} text-2xl md:text-3xl font-bold`}>
                    {etape.numero}
                  </div>
                  <div className="h-1 w-8 md:w-12 bg-white/20 rounded-full overflow-hidden">
                    <div className={`h-full ${etape.progressColor} w-0 group-hover:w-full transition-all duration-700`} />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-stone-100">
                  {etape.titre}
                </h3>
                <div className={`text-xs md:text-sm ${etape.textColor} mb-2`}>
                  {etape.sousTitre}
                </div>
                <p className="text-sm md:text-base text-stone-400">
                  {etape.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
