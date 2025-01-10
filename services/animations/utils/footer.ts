import gsap from "gsap";

export const animateFooter = ({}) => {
  const footerTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#footer",
      toggleActions: "play none none none",
    },
  });

  footerTl.from(".helloTitle", {
    transformOrigin: "50% 0%",
    transform: "translate3d(0px, 49.2404px, -41.3176px) rotateX(-80deg)",
    opacity: 0,
    duration: 1,
  });
  footerTl.from(
    ".footerTitle span",
    {
      transformOrigin: "50% 0%",
      transform: "translate3d(0px, 49.2404px, -41.3176px) rotateX(-80deg)",
      opacity: 0,
      duration: 1,
    },
    0.1
  );
  footerTl.from(
    ".footerContact span",
    {
      y: 15,
      opacity: 0,
      duration: 0.4,
      stagger: 0.03,
    },
    0.1
  );
};
