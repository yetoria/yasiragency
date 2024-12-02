"use client";
import Image from "next/image";
import { CheckCircle, Clock, Award } from "lucide-react";
import Navbar from "@/components/layouts/Navbar";
import Services from "@/components/layouts/Services";
import Projects from "@/components/layouts/Projects";
import Processus from "@/components/layouts/Processus";
import Reviews from "@/components/layouts//Reviews";
import Faq from "@/components/layouts/Faq";
import Contact from "@/components/layouts/Contact";
import Footer from "@/components/layouts/Footer";
import Ripple from "@/components/ui/ripple";
import { StandaloneShineButton } from "@/components/ui/cta";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <div
      id="header"
      className="bg-gray-950 min-h-screen overflow-x-hidden relative"
    >
      <Navbar />
      <section className="container mx-auto py-16 lg:py-32 relative z-10">
        {/* Spotlight principal (Ellipse 2) */}
        <div className="absolute inset-0 -z-10 h-full">
          <Image
            src="/assets/spotlights/Ellipse 2.png"
            alt=""
            fill
            className="object-contain opacity-50 max-md:scale-[1.5]"
            priority
          />
        </div>

        {/* Spotlight gauche (Ellipse 5) */}
        <div className="absolute right-1/4 bottom-1/4 w-full h-full -z-10">
          <Image
            src="/assets/spotlights/Ellipse 7.png"
            alt=""
            fill
            className="object-contain opacity-40 max-md:scale-[1.5]"
          />
        </div>

        {/* Spotlight foncé (Ellipse 7) */}
        <div className="absolute left-1/4 top-1/3 w-full h-full -z-10">
          <Image
            src="/assets/spotlights/Ellipse 7.png"
            alt=""
            fill
            className="object-contain opacity-70 max-md:scale-[2]"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative flex min-h-[calc(100vh-200px)] items-center">
          <div className="w-full py-8 md:py-12 space-y-6">
            <Ripple />
            <div className="inline-block px-4 py-1 bg-white/5 rounded-full border border-white/10 opacity-0 animate-[bounceIn_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]">
              <AnimatedShinyText>✨ Réponse en 24h</AnimatedShinyText>
            </div>

            <h1 className="text-3xl md:text-6xl font-semibold mb-6 text-stone-100 font-instrument">
              <span className="block opacity-0 animate-header-slide-up-1 px-4">
                Un site web sur mesure,
              </span>{" "}
              <span className="block opacity-0 animate-header-slide-up-2 px-4">
                une <span className="text-purple-400/90">présence </span>
                qui inspire
              </span>{" "}
              <span className="block opacity-0 animate-header-slide-up-3">
                <span className="text-purple-400/90">confiance</span>
              </span>
            </h1>

            <p className="max-sm:text-xs text-md text-stone-400 px-4 mb-12 mx-auto max-w-[750px] opacity-0 animate-header-scale-up">
              De la conception à la mise en ligne, nous développons des sites
              web modernes et performants qui correspondent à vos objectifs.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-stone-500 pt-8 pb-2">
              <div className="flex items-center gap-2 opacity-0 animate-[slideInRight_0.6s_cubic-bezier(0.22,1,0.36,1)_1.2s_forwards]">
                <CheckCircle className="w-4 h-4 text-purple-300" />
                <span className="text-stone-400">Sites Web Sur Mesure</span>
              </div>

              <span className="hidden md:inline text-stone-600 opacity-0 animate-[fadeIn_0.3s_ease-out_1.3s_forwards]">
                |
              </span>

              <div className="flex items-center gap-2 opacity-0 animate-[slideInRight_0.6s_cubic-bezier(0.22,1,0.36,1)_1.4s_forwards]">
                <Clock className="w-4 h-4 text-purple-300" />
                <span className="text-stone-400">Support 24/7</span>
              </div>

              <span className="hidden md:inline text-stone-600 opacity-0 animate-[fadeIn_0.3s_ease-out_1.5s_forwards]">
                |
              </span>

              <div className="flex items-center gap-2 opacity-0 animate-[slideInRight_0.6s_cubic-bezier(0.22,1,0.36,1)_1.6s_forwards]">
                <Award className="w-4 h-4 text-purple-300" />
                <span className="text-stone-400">Développeurs Certifiés</span>
              </div>
            </div>

            <div className="opacity-0 animate-[zoomIn_0.5s_ease-out_1.8s_forwards]">
              <StandaloneShineButton onClick={() => scrollToSection("contact")}>
                Obtenez votre devis gratuitement
              </StandaloneShineButton>
            </div>
          </div>
        </div>
      </section>
      {/* Section Services */}
      <div id="services" className="relative">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <Image
            src="/assets/spotlights/Ellipse 9 (2).png"
            alt=""
            fill
            className="max-md:-translate-y-48 max-sm:-translate-x-1/2 max-sm:opacity-65"
          />
        </div>
        <div className="absolute top-72 left-2/3 right-0 bottom-0">
          <Image
            src="/assets/spotlights/Ellipse 7.png"
            alt=""
            fill
            className=" opacity-90 md:opacity-40  scale-[1.4]  max-sm:translate-x-1/2 max-sm:translate-y-48"
          />
        </div>
        <Services />
      </div>
      {/* Section Projects */}
      <div id="projects" className="relative">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <Image
            src="/assets/spotlights/Ellipse 7.png"
            alt=""
            fill
            className="object-contain opacity-85 -translate-x-1/4"
            sizes="100vw"
          />
        </div>
        <div className="absolute top-10 left-0 right-0 bottom-0">
          <Image
            src="/assets/spotlights/Ellipse 9.png"
            alt=""
            fill
            className="object-contain opacity-65 translate-x-1/6 -translate-y-1/4"
            sizes="100vw"
          />
        </div>
        <Projects />
      </div>
      {/* Section Processus */}
      <div id="processus" className="relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 -z-1">
          <Image
            src="/assets/spotlights/Ellipse 8.png"
            alt=""
            fill
            className="object-contain max-sm:opacity-0"
          />
        </div>
        <Processus />
      </div>
      {/* Section Reviews */}
      <div id="reviews" className="relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 -z-1 pointer-events-none">
          <Image
            src="/assets/spotlights/Ellipse 8.png"
            alt=""
            fill
            className="object-contain max-md:scale-[1.9]"
          />
        </div>

        <Reviews />
      </div>
      {/* Section FAQ */}
      <div id="faq" className="relative">
        {/* Images de fond avec z-index négatif */}
        <div className="absolute top-0 left-96 right-0 bottom-0 max-sm:-left-1/2 max-sm:-right-[2%] -z-1">
          <Image
            src="/assets/spotlights/Ellipse 3.png"
            alt=""
            fill
            className="object-contain opacity-85"
            sizes="100vw"
          />
        </div>
        <div className="absolute -top-80 right-96 left-0 bottom-0 max-sm:-right-1/2 max-sm:left-1/4 -z-1 pointer-events-none">
          <Image
            src="/assets/spotlights/Ellipse 7.png"
            alt=""
            fill
            className="object-contain opacity-70"
            sizes="100vw"
          />
        </div>
        {/* Composant FAQ avec z-index positif */}
        <div className="relative z-10">
          <Faq />
        </div>
      </div>
      {/* Section Contact */}
      <div id="contact" className="relative">
        <div className="absolute top-0 left-1/2 right-0 bottom-0 max-sm:-left-1/4 max-sm:-right-1/4">
          <Image
            src="/assets/spotlights/Ellipse 3.png"
            alt=""
            fill
            className="object-contain opacity-65"
          />
        </div>
        <div className="absolute -top-56 left-0 right-0 bottom-0 max-sm:-left-1/2 max-sm:-right-1/2">
          <Image
            src="/assets/spotlights/Ellipse 2.png"
            alt=""
            fill
            className="object-contain opacity-30"
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 max-sm:-left-1/2 max-sm:-right-1/2">
          <Image
            src="/assets/spotlights/Ellipse 9.png"
            alt=""
            fill
            className="object-contain opacity-45 -translate-x-2/4"
          />
        </div>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
