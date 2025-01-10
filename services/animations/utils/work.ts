import gsap from "gsap";
import { slideY } from "./styles";

const animateWorkItems = ({}) => {
  const animate = slideY({});
  const workItems = document.querySelectorAll("#works .workItem");
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#works",
      toggleActions: "play none none none",
    },
  });
  workItems.forEach((workItem, index) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: workItem,
        toggleActions: "play none none none",
      },
    });
    tl.from(workItem, {
      delay: index * 0.1,
      ...animate,
    });
  });

  tl.from(
    `.workTitle`,
    {
      backgroundPositionX: "100%",
      duration: 1,
    },
    0
  );
};

export { animateWorkItems };
