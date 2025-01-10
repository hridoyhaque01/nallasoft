import gsap from "gsap";

const animateHomeCaseStudy = ({}) => {
  let percentage = 0;

  const caseStudyTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#homeCaseStudy",
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        const progress = Math.round(self.progress * 100);
        percentage = progress;

        gsap.to(".percentage", {
          duration: 0,
          textContent: `${percentage}%`,
          ease: "none",
        });
      },
    },
  });

  caseStudyTl.to(".first_sec div", {
    xPercent: -100,
  });

  caseStudyTl.to(
    ".second_sec div",
    {
      xPercent: 100,
    },
    "<"
  );
};

export { animateHomeCaseStudy };
