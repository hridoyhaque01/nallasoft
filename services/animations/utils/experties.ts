import gsap from "gsap";
import { slideY } from "./styles";

const animateHomeExperties = ({}) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#homeExperties",
      toggleActions: "play none none none",
    },
  });
  const animate = slideY({});
  tl.from(".expertiesItem", {
    ...animate,
    stagger: 0.1,
  });
};

export { animateHomeExperties };
