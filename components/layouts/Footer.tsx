import Image from "next/image";
import Link from "next/link";
import LogoSvg from "@/public/assets/svg/logo.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-gray-950/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src={LogoSvg}
              alt="Yasir Agency Logo"
              width={120}
              height={120}
              className="w-auto h-8"
            />
          </div>

          {/* Liens légaux */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-stone-400">
            <Link
              href="/mentions-legales"
              className="hover:text-purple-400 transition-colors"
            >
              Mentions légales
            </Link>
            <span className="hidden sm:inline text-stone-600">|</span>
            <Link
              href="/politique-confidentialite"
              className="hover:text-purple-400 transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-stone-500">
            <span>© {currentYear}</span>
            <span className="text-stone-400">Made by</span>
            <a
              href="https://github.com/yetoria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Dany
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
