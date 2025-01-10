import gsap from "gsap";
import { slideX, slideY } from "./styles";

const animateHomeBlogs = ({}) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#homeBlogs",
      toggleActions: "play none none none",
    },
  });
  const animate = slideY({});
  tl.from(".blogItem", {
    ...animate,
    stagger: 0.1,
  });
};

const animateBlogItems = () => {
  const animate = slideX({});
  const animateY = slideY({ y: 20, duration: 0.4, stagger: 0.1 });
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#blogs",
      toggleActions: "play none none none",
    },
  });
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#blogTags",
      toggleActions: "play none none none",
    },
  });

  tl.from(".blogItem", {
    ...animate,
  });

  tl2.from(".tagItem", {
    ...animateY,
  });
};

export { animateBlogItems, animateHomeBlogs };
