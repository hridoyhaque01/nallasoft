import gsap from "gsap";
import { slideX, slideY } from "./styles";

const animateHomeService = ({
  scrollTrigger = "#service1",
  triggerTitle = ".serviceTitle",
  triggerItem = ".serviceItem",
}) => {
  // service card one

  const animate = slideX({});

  gsap.from(`${scrollTrigger} ${triggerTitle}`, {
    ...animate,
    scrollTrigger: {
      trigger: scrollTrigger,
      toggleActions: "play none none none",
    },
  });

  gsap.from(`${scrollTrigger} ${triggerItem}`, {
    x: -50,
    duration: 0.6,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: scrollTrigger,
      toggleActions: "play none none none",
    },
  });
};

const animateServiceItems = ({}) => {
  const animate = slideY({});

  const serviceItems = document.querySelectorAll("#services .serviceItem");

  serviceItems.forEach((serviceItem) => {
    const serviceInnerItems = serviceItem.querySelectorAll(".serviceInnerItem");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: serviceItem,
        toggleActions: "play none none none",
      },
    });

    tl.from(serviceItem, {
      ...animate,
    });

    tl.from(
      serviceInnerItems,
      {
        ...animate,
      },
      0
    );
  });
};

export { animateHomeService, animateServiceItems };
