import Link from "next/link";
import Image from "next/image";
import ParticlesContainer from "@/components/ui/particles-container";

export default function MentionsLegales() {
  return (
    <div className="bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900 min-h-svh relative overflow-x-hidden">
      <ParticlesContainer />

      {/* Effets de lumière */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-400/30 via-purple-300/40 to-purple-400/30 blur-[130px] rounded-full" />
        <div className="absolute right-1/4 top-2/3 w-[400px] h-[300px] bg-gradient-to-bl from-purple-500/30 via-purple-400/40 to-transparent blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-stone-100 font-instrument mb-6">
              Mentions <span className="text-purple-400">Légales</span>
            </h1>
          </div>

          <div className="space-y-8 text-stone-300">
            <section className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4 text-stone-100">Éditeur du site</h2>
              <p><span className="text-purple-400">yasir agency</span></p>
              <p>Entrepreneur individuel</p>
              <p>SIRET : En cours d'immatriculation</p>
              <p>Adresse : Île-de-France, France</p>
              <p>Email : yasiragency@proton.me</p>
            </section>

            <section className="bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10 backdrop-blur-sm text-center">
              <div className="max-w-2xl mx-auto">
                <p className="text-lg text-purple-300 italic mb-4">
                  « <span className="text-purple-400 font-medium">yasir</span> » vient du mot arabe « <span className="text-purple-400 font-medium">yasara</span> » signifiant « la facilité ». 
                  <br />Notre mission est d'incarner cette valeur en rendant le digital accessible à tous.
                </p>
                <p className="text-xl text-purple-400 font-semibold italic">
                  La facilité à portée de clic.
                </p>
              </div>
            </section>

            <section className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4 text-stone-100">Hébergement</h2>
              <p><span className="text-purple-400">Vercel</span></p>
              <p>vercel.com</p>
              <p>San Francisco, CA</p>
              <p>États-Unis</p>
            </section>

            <section className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4 text-stone-100">Propriété intellectuelle</h2>
              <p>L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d'auteur. Toute reproduction ou utilisation sans autorisation préalable est interdite.</p>
            </section>

            <section className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4 text-stone-100">Responsabilité</h2>
              <p>Yasir Agency s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Cependant, elle ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.</p>
            </section>

            <div className="text-center pt-8">
              <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
                <Image
                  src="/assets/svg/logo.svg"
                  alt="yasir agency logo"
                  width={80}
                  height={80}
                  className="mx-auto"
                  priority
                  quality={100}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 