import gsap from "gsap";

const animateHomeCaseStudy = ({}) => {
  let percentage = 0;

  const caseStudyTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#homeCaseStudy",
      scrub: 2,
      pin: true,
      start: "left top",
      end: "right top",
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
