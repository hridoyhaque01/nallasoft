import gsap from "gsap";
import { slideX } from "./styles";

const animateHomeAbout = ({}) => {
  const animateX = slideX({ x: 25, duration: 0.4, stagger: 0.1 });
  const aboutTitleX = slideX({ x: 40 });
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#homeAbout",
      toggleActions: "play none none none",
    },
  });

  tl.from(".aboutTitle span", animateX);
  const boxTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".aboutBox",
      toggleActions: "play none none none",
    },
  });

  boxTl.from(".aboutBox .aboutTitle", aboutTitleX);
  boxTl.from(
    ".aboutBox .aboutDescription",
    {
      backgroundPositionX: "100%",
      duration: 1,
    },
    0.15
  );
  boxTl.from(".aboutBox .subtitle", aboutTitleX, 0.2);
  boxTl.from(".aboutLists li", aboutTitleX, 0.2);
};

export { animateHomeAbout };
