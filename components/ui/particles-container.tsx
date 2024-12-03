"use client";

import dynamic from "next/dynamic";

const DynamicParticles = dynamic(() => import("./particles"), {
  ssr: false,
});

export default function ParticlesContainer() {
  return (
    <DynamicParticles
      className="absolute inset-0 z-19 pointer-events-none"
      quantity={100}
      staticity={50}
      color="#ffffff"
    />
  );
} 