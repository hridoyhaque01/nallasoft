import gsap from "gsap";
import { slideX } from "./styles";
import { IThumbnail } from "./types";

export const animateThumbnail = ({
  triggerSelector = "#sectionThumbnail",
}: IThumbnail) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerSelector,
      toggleActions: "play none none none",
    },
  });

  const animateX = slideX({ x: 30, stagger: 0.08 });
  tl.from(`${triggerSelector} .thumbnailTitle span`, animateX);
  tl.from(`${triggerSelector} .breadcrumbLists li`, animateX, 0);
};
