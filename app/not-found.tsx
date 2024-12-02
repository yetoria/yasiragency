import Link from "next/link";
import Particles from "@/components/ui/particles";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { StandaloneShineButton } from "@/components/ui/cta";

export default function NotFound() {
  return (
    <div className="bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900 min-h-svh relative overflow-x-hidden">
      <Particles
        className="absolute inset-0 z-19 pointer-events-none"
        quantity={100}
        staticity={50}
        color="#ffffff"
      />

      {/* Effets de lumière adaptés */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-400/30 via-purple-300/40 to-purple-400/30 blur-[130px] rounded-full" />
        <div className="absolute right-1/4 top-2/3 w-[400px] h-[300px] bg-gradient-to-bl from-purple-500/30 via-purple-400/40 to-transparent blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 h-svh flex flex-col items-center justify-center relative z-10">
        <div className="text-center space-y-6">
          <div className="inline-block px-4 py-1 bg-white/5 rounded-full border border-white/10">
            <AnimatedShinyText>Erreur 404</AnimatedShinyText>
          </div>

          <h1 className="text-8xl font-bold text-stone-100 font-instrument drop-shadow-[0_0_0.2rem_#ffffff70]">
            404
          </h1>

          <h2 className="text-3xl text-stone-100 font-instrument mb-6">
            Page non trouvée
          </h2>

          <p className="text-stone-400 max-w-md mx-auto mb-12">
            La page que vous recherchez semble avoir été téléportée vers une
            autre dimension.
          </p>

          <Link href="/" className="inline-block">
            <StandaloneShineButton>Retourner à l'accueil</StandaloneShineButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
