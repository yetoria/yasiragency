"use client";

import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { Bolt, BarChart3, Boxes, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

import { useResponsiveInView } from "@/hooks/useResponsiveInView";
import type { CSSProperties } from "react";

import {
  CodeAnimation,
  AnalyticsDashboard,
  WebAppAnimation,
  DesignPatterns,
} from "../animations/services-cards";

const items = [
  {
    title: "Design UI/UX",
    description:
      "Interfaces modernes et intuitives qui captivent vos utilisateurs.",
    header: <DesignPatterns />,
    icon: <Sparkles className="h-4 w-4 text-purple-300" />,
  },
  {
    title: "Sites/Applications Web",
    description: "Solutions sur mesure adaptées à vos besoins spécifiques.",
    header: <WebAppAnimation />,
    icon: <Boxes className="h-4 w-4 text-purple-300" />,
  },
  {
    title: "Optimisation SEO",
    description:
      "Visibilité optimale de votre site sur Google et autres moteurs de recherche.",
    header: <AnalyticsDashboard />,
    icon: <BarChart3 className="h-4 w-4 text-purple-300" />,
  },
  {
    title: "Performance Web",
    description:
      "Sites web ultra-rapides et optimisés pour une expérience fluide.",
    header: <CodeAnimation />,
    icon: <Bolt className="h-4 w-4 text-purple-300" />,
  },
];

export default function Services() {
  const [ref, isInView] = useResponsiveInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="relative w-full min-h-screen px-2 md:px-4 py-12 md:py-20 overflow-hidden"
    >
      <div className="relative z-10">
        <div className="flex items-center justify-center max-w-7xl mx-auto w-full gap-2 md:gap-4 mb-8 md:mb-16">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-gray-300 flex-grow" />
          <h2 className="text-2xl md:text-4xl font-instrument text-gray-90 font-bold">
            Que fait-on ?
          </h2>
          <div className="h-[1px] bg-gradient-to-l from-transparent via-gray-300 to-gray-300 flex-grow" />
        </div>

        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={cn(
                "transition-all duration-300 hover:scale-[1.02]",
                "bg-[#1A1614]/40 backdrop-blur-sm border",
                "hover:bg-[#1A2B3C]/80 hover:border-purple-400/20 hover:shadow-lg",
                "hover:shadow-purple-500/5",
                {
                  "md:col-span-2": i === 1 || i === 2,
                  "col-span-1": true,
                }
              )}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
