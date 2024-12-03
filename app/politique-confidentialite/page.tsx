import Link from "next/link";
import Image from "next/image";
import ParticlesContainer from "@/components/ui/particles-container";

export default function PolitiqueConfidentialite() {
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
              Politique de <span className="text-purple-400">Confidentialité</span>
            </h1>
          </div>

          <div className="space-y-8 text-stone-300">
            <section className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4 text-stone-100">Collecte des données</h2>
              <p>Nous collectons uniquement les données personnelles nécessaires au traitement de vos demandes :</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone (si fourni)</li>
                <li>Informations relatives à votre projet</li>
              </ul>
            </section>

            <section className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4 text-stone-100">Utilisation des données</h2>
              <p>Vos données sont utilisées pour :</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Répondre à vos demandes de contact</li>
                <li>Établir des devis personnalisés</li>
                <li>Assurer le suivi de votre projet</li>
                <li>Améliorer nos services</li>
              </ul>
            </section>

            <section className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4 text-stone-100">Protection des données</h2>
              <p>Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisés.</p>
            </section>

            <section className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4 text-stone-100">Vos droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit à la portabilité des données</li>
              </ul>
            </section>

            <section className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4 text-stone-100">Contact</h2>
              <p>Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits, contactez-nous à :</p>
              <p className="mt-2 text-purple-400">yasiragency@proton.me</p>
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