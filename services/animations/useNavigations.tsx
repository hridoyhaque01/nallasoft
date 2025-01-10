import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function useNavigations() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".logo,.navBtn", {
      scale: 0.7,
      opacity: 0,
      duration: 0.35,
    });
    tl.from(".navMenu li", {
      y: 40,
      opacity: 0,
      duration: 0.35,
      stagger: 0.1,
    });
  }, {});
  return {};
}

export default useNavigations;
