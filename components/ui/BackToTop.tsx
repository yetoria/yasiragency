"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full 
        backdrop-blur-md bg-purple-500/10 border border-purple-500/20
        transition-all duration-300 z-50
        hover:bg-purple-500/20 hover:border-purple-500/30
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
    >
      <ArrowUp className="w-5 h-5 text-purple-400" />
    </button>
  );
} 