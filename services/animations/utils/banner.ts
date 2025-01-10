import gsap from "gsap";

const animateBanner = ({}) => {
  if (typeof window === "undefined") return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#bannerContent",
      toggleActions: "play none none none",
    },
  });
  const heroLabelTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#heroLabel",
      toggleActions: "play none none none",
    },
  });
  tl.from("#bannerContent .bannerSubHeader,#bannerContent .bannerHeader", {
    x: -50,
    duration: 0.6,
    opacity: 0,
    stagger: 0.2,
  });
  tl.from(
    "#bannerContent .textStaggerSlideY",
    {
      transform: "translateY(70px)",
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
    },
    0
  );
  tl.from(
    "#bannerContent .bannerBtn",
    {
      scale: 0.7,
      opacity: 0,
      duration: 0.6,
    },
    0
  );

  const designEl = document.querySelector("#heroLabel .design");
  const developEl = document.querySelector("#heroLabel .develop");
  const deployEl = document.querySelector("#heroLabel .deploy");
  let designText, developText, deployText;
  if (designEl && developEl && deployEl) {
    designText = designEl.textContent?.split("");
    developText = developEl.textContent?.split("");
    deployText = deployEl.textContent?.split("");
    let finalDesignText = "";
    let finalDevelopText = "";
    let finalDeployText = "";
    designText?.forEach((char) => {
      finalDesignText += `<span class="inline-block">${char}</span>`;
    });
    developText?.forEach((char) => {
      finalDevelopText += `<span class="inline-block">${char}</span>`;
    });
    deployText?.forEach((char) => {
      finalDeployText += `<span class="inline-block">${char}</span>`;
    });

    designEl.innerHTML = finalDesignText;
    developEl.innerHTML = finalDevelopText;
    deployEl.innerHTML = finalDeployText;
  }

  heroLabelTl.from("#heroLabel .design span", {
    y: 28,
    scale: 0.9,
    opacity: 0,
    duration: 0.4,
    stagger: 0.1,
  });

  heroLabelTl.from(
    "#heroLabel .develop span",
    {
      y: 28,
      scale: 0.9,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
    },
    0
  );

  heroLabelTl.from(
    "#heroLabel .deploy span",
    {
      y: 28,
      scale: 0.9,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
    },
    0
  );
};

export { animateBanner };
