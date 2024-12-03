import Marquee from "../ui/marquee";
import Image from "next/image";
import { useResponsiveInView } from "@/hooks/useResponsiveInView";
import { Sparkles, Star, Trophy, Users } from "lucide-react";

const marketingCards = [
  {
    icon: <Star className="w-6 h-6 text-yellow-400" />,
    title: "Soyez le Premier",
    content: "Devenez notre premier client satisfait et bénéficiez d'un accompagnement privilégié pour votre projet digital.",
    highlight: "Offre de lancement exclusive",
  },
  {
    icon: <Trophy className="w-6 h-6 text-purple-400" />,
    title: "Projet Pionnier",
    content: "Votre projet pourrait devenir notre première réussite emblématique. Construisons ensemble votre succès digital.",
    highlight: "Tarifs préférentiels",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-blue-400" />,
    title: "Innovation & Créativité",
    content: "Profitez de notre énergie débordante et de notre désir d'innover pour créer un projet unique et marquant.",
    highlight: "Approche sur-mesure",
  },
  {
    icon: <Users className="w-6 h-6 text-green-400" />,
    title: "Partenariat Privilégié",
    content: "En tant que premier client, bénéficiez d'une attention particulière et d'un suivi personnalisé de votre projet.",
    highlight: "Accompagnement VIP",
  },
];

export default function Reviews() {
  const [sectionRef, isInView] = useResponsiveInView<HTMLElement>({
    threshold: 0.1,
    once: true,
  });

  return (
    <section ref={sectionRef} className="py-16 md:py-32 relative">
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
          <h2
            className={`text-3xl md:text-5xl px-4 font-semibold mb-6 md:mb-8 
              bg-gradient-to-r from-white via-white to-purple-200 
              bg-clip-text text-transparent
              opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Écrivons ensemble votre <span className="text-purple-400">success story</span>
          </h2>

          <p
            className={`text-stone-400 px-4 max-sm:text-xs text-sm md:text-lg leading-relaxed max-w-2xl mx-auto
              opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            En tant que nouvelle agence, nous mettons toute notre passion et notre expertise au service de votre réussite. 
            Soyez parmi les premiers à nous faire confiance et bénéficiez d'avantages exclusifs.
          </p>
        </div>

        <div>
          <Marquee className="py-2 md:py-4" pauseOnHover>
            {marketingCards.map((card, index) => (
              <div
                key={index}
                className="mx-2 md:mx-4 p-6 relative overflow-hidden
                  bg-gradient-to-br from-slate-800/50 to-slate-900/50
                  backdrop-blur-sm rounded-2xl
                  w-[360px] md:w-[450px]
                  border border-slate-700/50
                  hover:border-purple-500/30 transition-all duration-500
                  hover:shadow-xl hover:shadow-purple-500/5
                  group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    {card.icon}
                    <h3 className="text-xl font-semibold text-stone-200">{card.title}</h3>
                  </div>
                  
                  <p className="text-stone-400 text-sm mb-4 line-clamp-3">{card.content}</p>
                  
                  <div className="inline-block px-3 py-1 bg-purple-500/10 rounded-full">
                    <span className="text-purple-400 text-xs font-medium">{card.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
