"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const handleMouseMove = (event: MouseEvent) => {
        if (ref.current) {
          gsap.to(ref.current, {
            opacity: 1,
            x: event.x - 24,
            y: event.y - 24,
            duration: 1,
            ease: "back.out",
          });
        }
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    },
    { scope: ref }
  );

  return (
    <div
      className="fixed top-0 z-[9999] w-12 h-12 border-2 border-lime-400 rounded-full pointer-events-none opacity-0 flex items-center justify-center"
      ref={ref}
    >
      <div className="w-2 h-2 bg-lime-400 rounded-full" />
    </div>
  );
}

export default Cursor;
