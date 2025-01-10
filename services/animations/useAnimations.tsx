import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { getActivePath } from "../utils";
import { animateBanner, animateSection } from "./utils";
import { animateHomeAbout } from "./utils/about";
import { animateBlogItems, animateHomeBlogs } from "./utils/blog";
import { animateHomeCaseStudy } from "./utils/caseStudy";
import { animateHomeExperties } from "./utils/experties";
import { animateHomeFaq } from "./utils/faq";
import { animateFooter } from "./utils/footer";
import { animateHomeService, animateServiceItems } from "./utils/service";
import { animateThumbnail } from "./utils/thumbnail";
import { animateWorkItems } from "./utils/work";

type PageKeys = "home" | "services" | "works" | "about" | "blogs" | "contact";

const useAnimations = () => {
  const pathname = usePathname();
  const animationHistory = useRef<Record<PageKeys, boolean>>({
    home: false,
    services: false,
    works: false,
    about: false,
    blogs: false,
    contact: false,
  });

  const animateHome = () => {
    animateBanner({});
    const sections = [
      "#homeBlogs",
      "#homeServices",
      "#homeRecentCreation",
      "#homeTeams",
      "#homeExperties",
      "#homeFaq",
    ];
    sections.forEach((section) => {
      animateSection({
        startPositionSelector: section,
      });
    });

    const serviceBlocks = ["#service1", "#service2", "#service3"];
    serviceBlocks.forEach((service) => {
      animateHomeService({
        scrollTrigger: service,
      });
    });

    animateHomeAbout({});
    animateHomeExperties({});
    animateHomeFaq({});
    animateHomeBlogs({});
    animateHomeCaseStudy({});
  };

  const animateServices = () => {
    animateThumbnail({
      triggerSelector: "#serviceThumbnail",
    });
    animateServiceItems({});
  };

  const animateWorks = () => {
    animateThumbnail({
      triggerSelector: "#workThumbnail",
    });
    animateWorkItems({});
  };

  const animateBlogs = () => {
    animateThumbnail({
      triggerSelector: "#blogThumbnail",
    });
    animateBlogItems();
  };

  const animateContact = () => {
    animateThumbnail({
      triggerSelector: "#contactThumbnail",
    });
  };

  useGSAP(() => {
    if (typeof window === "undefined") return;
    const activePath = getActivePath(pathname) as PageKeys;
    gsap.registerPlugin(ScrollTrigger);

    if (!animationHistory.current[activePath]) {
      animationHistory.current[activePath] = true; // Mark the page as animated

      if (activePath === "home") {
        animateHome();
      } else if (activePath === "services") {
        animateServices();
      } else if (activePath === "works") {
        animateWorks();
      } else if (activePath === "blogs") {
        animateBlogs();
      } else if (activePath === "contact") {
        animateContact();
      }
    }

    animateFooter({});

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return {};
};

export default useAnimations;
