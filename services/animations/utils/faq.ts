import gsap from "gsap";
import { slideX } from "./styles";

const animateHomeFaq = ({}) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#homeFaq",
      toggleActions: "play none none none",
    },
  });
  const animate = slideX({});
  tl.from(".faqItem", {
    ...animate,
    stagger: 0.1,
  });
};

export { animateHomeFaq };
