"use client";
import useAnimations from "@/services/animations/useAnimations";
import { ReactLenis } from "lenis/react";
import React from "react";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useAnimations();

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
