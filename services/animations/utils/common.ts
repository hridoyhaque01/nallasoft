import gsap from "gsap";
import { AnimationSectionConfig } from "./types";

const animateSection = ({
  titleSelector = ".sectionTitle",
  lineSelector = ".sectionLine",
  tagSelector = ".sectionTag",
  descriptionSelector = ".sectionDescription",
  startPositionSelector = "#sectionHeader",
}: AnimationSectionConfig): void => {
  const scrollTriggerConfig = {
    trigger: startPositionSelector,
    toggleActions: "play none none none",
  };

  const tl = gsap.timeline({
    stagger: 0.1,
    scrollTrigger: scrollTriggerConfig,
  });

  tl.from(`${startPositionSelector} ${tagSelector}`, {
    x: -40,
    opacity: 0,
    duration: 0.4,
  });

  tl.from(`${startPositionSelector} ${lineSelector}`, {
    scaleX: 0,
    transformOrigin: "0%",
    duration: 0.4,
  });

  tl.from(
    `${startPositionSelector} ${titleSelector} span`,
    {
      x: 25,
      opacity: 0,
      duration: 0.3,
      stagger: 0.1,
    },
    "-=0.4"
  );

  // tl.from(
  //   `${startPositionSelector} ${titleSelector}`,
  //   {
  //     transformOrigin: "50% 0%",
  //     transform: "translate3d(0px, 49.2404px, -41.3176px) rotateX(-80deg)",
  //     opacity: 0,
  //     duration: 0.4,
  //   },
  //   "-=0.4"
  // );

  tl.from(
    `${startPositionSelector} ${descriptionSelector}`,
    {
      backgroundPositionX: "100%",
      duration: 0.7,
    },
    0
  );
};

export { animateSection };
