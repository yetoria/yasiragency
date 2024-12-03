"use client";

import { useResponsiveInView } from "@/hooks/useResponsiveInView";
import { Meteors } from "../ui/meteors";
import { cn } from "@/lib/utils";

export default function Processus() {
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
      color: "from-blue-500 to-blue-700",
      textColor: "text-blue-400",
      meteorColor: "#60a5fa",
      progressColor: "bg-blue-500",
    },
    {
      numero: "02",
      titre: "Proposition",
      description:
        "Présentation détaillée de la solution, du budget et du planning prévisionnel",
      icon: "📝",
      sousTitre: "Plan d'action",
      color: "from-emerald-500 to-emerald-700",
      textColor: "text-emerald-400",
      meteorColor: "#34d399",
      progressColor: "bg-emerald-500",
    },
    {
      numero: "03",
      titre: "Production",
      description:
        "Développement itératif avec points d'étape réguliers et validations",
      icon: "⚙️",
      sousTitre: "Développement",
      color: "from-amber-500 to-amber-700",
      textColor: "text-amber-400",
      meteorColor: "#fbbf24",
      progressColor: "bg-amber-500",
    },
    {
      numero: "04",
      titre: "Livraison",
      description:
        "Mise en production et déploiement de votre projet après validation finale",
      icon: "🚀",
      sousTitre: "Final",
      color: "from-purple-500 to-purple-700",
      textColor: "text-purple-400",
      meteorColor: "#a855f7",
      progressColor: "bg-purple-500",
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

          <div
            className={`flex flex-col md:flex-row justify-center gap-6 md:gap-12 mt-8 transition-all duration-700 ${
              isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400">4-6</div>
              <div className="text-xs md:text-sm text-stone-400">
                Semaines de Développement
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400">24/7</div>
              <div className="text-xs md:text-sm text-stone-400">
                Support & Maintenance
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400">100%</div>
              <div className="text-xs md:text-sm text-stone-400">
                Satisfaction Client
              </div>
            </div>
          </div>
        </div>

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
              <div className={`absolute inset-0 h-full w-full bg-gradient-to-r ${etape.color} transform scale-[0.80] rounded-3xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-500`} />
              <div className="relative shadow-xl bg-gray-900/90 border border-gray-800 px-6 py-8 h-full overflow-hidden rounded-2xl flex flex-col group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{etape.icon}</div>
                  <div className={cn("text-2xl font-bold", etape.textColor)}>
                    {etape.numero}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-stone-100">
                  {etape.titre}
                </h3>
                <div className={cn("text-sm mb-3", etape.textColor)}>
                  {etape.sousTitre}
                </div>
                <p className="text-sm text-stone-400 mb-4">
                  {etape.description}
                </p>

                <div className="mt-auto mb-4">
                  <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full w-0 group-hover:w-full transition-all duration-1000 ease-out",
                        etape.progressColor
                      )}
                    />
                  </div>
                </div>

                <Meteors number={10} color={etape.meteorColor} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
