"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface MeteorProps {
  number?: number;
  color?: string;
}

interface MeteorStyle {
  left: string;
  animationDelay: string;
  animationDuration: string;
}

export const Meteors = ({ 
  number = 20,
  color = "#64748b"
}: MeteorProps) => {
  const [meteorStyles, setMeteorStyles] = useState<MeteorStyle[]>([]);

  useEffect(() => {
    const styles = Array.from({ length: number }, () => ({
      left: `${Math.floor(Math.random() * (400 - -400) + -400)}px`,
      animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
      animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`,
    }));
    setMeteorStyles(styles);
  }, [number]);

  if (meteorStyles.length === 0) {
    return null;
  }

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] shadow-[0_0_0_1px_#ffffff10] rotate-[215deg] group-hover:scale-105 transition-all duration-300",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:to-transparent"
          )}
          style={{
            top: 0,
            left: style.left,
            animationDelay: style.animationDelay,
            animationDuration: style.animationDuration,
            backgroundColor: color,
            "--meteor-color": color,
          } as React.CSSProperties & { "--meteor-color": string }}
        />
      ))}
    </>
  );
}; 