import AccordionExample from "../ui/Accordion";
import AnimatedShinyText from "../ui/animated-shiny-text";
import { useResponsiveInView } from "@/hooks/useResponsiveInView";

export default function Faq() {
  const [titleRef, titleInView] = useResponsiveInView<HTMLDivElement>({
    once: true,
  });

  return (
    <section className="container mx-auto px-4 py-16 md:py-32 relative isolate">
      <div className="max-w-4xl mx-auto relative">
        <div
          ref={titleRef}
          className={`text-center mb-8 space-y-4 opacity-0 ${
            titleInView ? "animate-fade-in-up" : ""
          }`}
        >
          <div className="inline-block px-4 py-1 bg-white/5 rounded-full border border-white/10">
            <AnimatedShinyText>Questions Fréquentes</AnimatedShinyText>
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold text-stone-100 font-instrument">
            Tout ce que vous devez savoir
          </h2>

          <p className="text-sm md:text-base text-stone-400 max-w-2xl mx-auto px-4 md:px-0">
            Découvrez les réponses aux questions les plus courantes sur nos
            services et notre façon de travailler
          </p>
        </div>

        <div
          className={`opacity-0 ${titleInView ? "animate-fade-in-up" : ""}`}
          style={{
            animationDelay: "200ms",
            animationFillMode: "forwards",
          }}
        >
          <AccordionExample />
        </div>
      </div>
    </section>
  );
}
