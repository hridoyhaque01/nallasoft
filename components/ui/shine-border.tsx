"use client";

type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children?: React.ReactNode;
}

/**
 * @name Shine Border
 * @description It is an animated background border effect component with easy to use and configurable props.
 * @param borderRadius defines the radius of the border.
 * @param borderWidth defines the width of the border.
 * @param duration defines the animation duration to be applied on the shining border
 * @param color a string or string array to define border color.
 * @param className defines the class name to be applied to the component
 * @param children contains react node elements.
 */
export default function ShineBorder({
  borderRadius = 40,
  borderWidth = 1,
  duration = 14,
  color = ["#A0E635", "#ED2015"],
  className,
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          "--border-width": `${borderWidth}px`,
          "--border-radius": `${borderRadius}px`,
          "--duration": `${duration}s`,
          "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          "--background-radial-gradient": `radial-gradient(transparent,transparent, ${
            color instanceof Array ? color.join(",") : color
          },transparent,transparent)`,
        } as React.CSSProperties
      }
      className={`pointer-events-none before:bg-shine-size before:absolute before:inset-0 before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine ${className}`}
    ></div>
  );
}
