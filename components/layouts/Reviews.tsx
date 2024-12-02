import Marquee from "../ui/marquee";
import Image from "next/image";
import { useResponsiveInView } from "@/hooks/useResponsiveInView";

const reviews = [
  {
    name: "Raphael Fernandez",
    content:
      "J'ai fait appel à Yasir Agency pour la création de mon site e-commerce, le résultat dépasse mes attentes, la communication et le design sont au top, Je recommande vivement !",
    company: "Client e-commerce",
    avatar: "/avatars/avatar-1.png",
  },
  {
    name: "Antoine Mancini",
    content:
      "Super accueil ! La personne qui s'est occupée de moi a bien compris ma demande et ce que j'attendais, tout devient simple lorsqu'on s'adresse a de vrais professionnels. J'ai eu de très bon conseils sur la mise en avant de mon site.",
    company: "Client satisfait",
    avatar: "/avatars/avatar-2.png",
  },
  {
    name: "Souad B",
    content:
      "Ravie d'avoir pu travailler avec Yasir Agency, il a su créer un site web qui répond à mes attentes sans difficulté, il m'a tout expliqué de A à Z, je le remercie pour sa patience et son professionnalisme !",
    company: "Cliente web",
    avatar: "/avatars/avatar-6.png",
  },
  {
    name: "Malik Bourassi",
    content:
      "Vous avez transformé mon vieux site en quelque chose de moderne et attrayant. L'équipe a été réactive et attentionnée. Je suis très heureux du résultat. Merci Yasir Agency !",
    company: "Client refonte",
    avatar: "/avatars/avatar-4.png",
  },
  {
    name: "Matheo Ribe",
    content:
      "Super expérience avec Yasir Agency. Mon site web est maintenant élégant et fonctionnel. L'équipe a été patiente et attentionnée. Merci !",
    company: "Client web",
    avatar: "/avatars/avatar-5.png",
  },
  {
    name: "Alexis",
    content:
      "Excellente écoute et une bonne communication, je suis ravie d'avoir confier mon projet de création de site web à l'agence Yasir Agency. Je recommande vivement !",
    company: "Client web",
    avatar: "/avatars/avatar-3.png",
  },
  {
    name: "Livio C",
    content:
      "J'ai rencontré Yasir Agency car je cherchais à créer un site vitrine pour mon entreprise de toiture. Au bout de seulement quelques jours, j'ai commencé à avoir des appels pour des chantiers et après seulement 1 mois, je suis débordé et toujours très demandé.",
    company: "Entreprise de toiture",
    avatar: "/avatars/avatar-7.png",
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
          <div
            className={` inline-flex items-center gap-2 px-3 md:px-4 py-1 md:py-1.5 mb-4 md:mb-6 
              bg-gradient-to-r from-purple-500/10 to-purple-500/20 
              rounded-full border border-purple-500/20
              opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <span className="block w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-purple-400 text-xs md:text-sm font-medium">
              Avis vérifiés Google
            </span>
          </div>

          <h2
            className={`text-3xl md:text-5xl px-4 font-semibold mb-6 md:mb-8 
              bg-gradient-to-r from-white via-white to-purple-200 
              bg-clip-text text-transparent
              opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            La voix de nos clients
          </h2>

          <div
            className={`flex justify-between items-center max-w-xl max-sm:mx-6  mx-auto mb-8 md:mb-12 
              p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10
              opacity-0 ${isInView ? "animate-fade-in-scale" : ""}`}
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-8 h-8 md:w-12 md:h-12">
                <Image
                  src="/assets/google.png"
                  alt="Google Reviews"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <div className="text-stone-200 text-sm md:text-base font-medium">
                  Note Google
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-sm md:text-base">
                    ★★★★★
                  </span>
                  <span className="text-stone-400 text-xs md:text-sm">
                    (5/5)
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl md:text-2xl font-bold text-purple-400">
                100%
              </div>
              <div className="text-stone-400 text-xs md:text-sm">
                de satisfaction
              </div>
            </div>
          </div>

          <p
            className={`text-stone-400 px-4 max-sm:text-xs text-sm md:text-lg leading-relaxed max-w-2xl mx-auto
              opacity-0 ${isInView ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Des retours authentiques de clients qui témoignent de leur
            expérience avec notre agence. Chaque avis reflète notre engagement
            envers l'excellence et la satisfaction client.
          </p>
        </div>

        <div>
          <Marquee className="py-2 md:py-4" pauseOnHover>
            {reviews.map((review, index) => (
              <div
                key={index}
                className="mx-2 md:mx-4 p-4 md:p-6 relative
                  bg-gradient-to-br from-slate-800/50 to-slate-900/50
                  backdrop-blur-sm rounded-xl md:rounded-2xl 
                  w-[360px] md:w-[450px]
                  border border-slate-700/50
                  hover:border-purple-500/30 transition-all duration-500
                  hover:shadow-xl hover:shadow-purple-500/5
                  group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl" />

                <div className="relative">
                  <div className="flex items-center gap-2 mb-3 md:mb-6">
                    <div className="w-7 h-7 md:w-10 md:h-10 rounded-full overflow-hidden shadow-lg shadow-purple-500/20 flex-shrink-0">
                      <Image
                        src={review.avatar}
                        alt={`Avatar de ${review.name}`}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-purple-400 font-medium text-xs md:text-sm truncate">
                        {review.name}
                      </p>
                      <p className="text-stone-500 text-[10px] md:text-xs truncate">
                        {review.company}
                      </p>
                    </div>
                  </div>

                  <svg
                    className="w-5 h-5 md:w-8 md:h-8 text-purple-500/20 mb-2 md:mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  <p className="text-stone-300 text-xs md:text-sm leading-relaxed line-clamp-4 md:line-clamp-none">
                    {review.content}
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
