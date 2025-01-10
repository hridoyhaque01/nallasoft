import { ISlideX, ISlideY } from "./types";

const slideX = ({
  x = -50,
  duration = 0.6,
  opacity = 0,
  stagger = 0.2,
}: ISlideX) => {
  return {
    x: x,
    duration: duration,
    opacity: opacity,
    stagger: stagger,
  };
};

const slideY = ({
  y = 50,
  duration = 0.6,
  opacity = 0,
  stagger = 0.2,
}: ISlideY) => {
  return {
    y: y,
    duration: duration,
    opacity: opacity,
    stagger: stagger,
  };
};

export { slideX, slideY };
