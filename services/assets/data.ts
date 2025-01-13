import { images } from ".";
import { blogTags, Experties, Faq } from "../types";
import { BlogsType } from "../types/blog";
import {
  figma,
  flutter,
  javascript,
  laravel,
  nest,
  nextjs,
  react,
  reactNative,
  vue,
} from "./images";

const faqLists: Faq[] = [
  {
    _id: 1,
    question: "What services does NALLASOFT offer?",
    answer:
      "NALLASOFT offers web design, UI/UX design, SaaS design, software development, and app development. We deliver customized digital solutions that ensure a seamless user experience and meet the unique needs of businesses across industries.",
  },
  {
    _id: 2,
    question: "How long does it take to complete a website?",
    answer:
      "NALLASOFT offers web design, UI/UX design, SaaS design, software development, and app development. We deliver customized digital solutions that ensure a seamless user experience and meet the unique needs of businesses across industries.",
  },
  {
    _id: 3,
    question: "How does NALLASOFT match my brand’s design?",
    answer:
      "NALLASOFT offers web design, UI/UX design, SaaS design, software development, and app development. We deliver customized digital solutions that ensure a seamless user experience and meet the unique needs of businesses across industries.",
  },
  {
    _id: 4,
    question: "What technology platforms do you work with?",
    answer:
      "NALLASOFT offers web design, UI/UX design, SaaS design, software development, and app development. We deliver customized digital solutions that ensure a seamless user experience and meet the unique needs of businesses across industries.",
  },
  {
    _id: 5,
    question: "Do you offer website maintenance services",
    answer:
      "NALLASOFT offers web design, UI/UX design, SaaS design, software development, and app development. We deliver customized digital solutions that ensure a seamless user experience and meet the unique needs of businesses across industries.",
  },
  {
    _id: 6,
    question: "Can you build mobile apps along with websites",
    answer:
      "NALLASOFT offers web design, UI/UX design, SaaS design, software development, and app development. We deliver customized digital solutions that ensure a seamless user experience and meet the unique needs of businesses across industries.",
  },
  {
    _id: 7,
    question: "How much do your services cost?",
    answer:
      "NALLASOFT offers web design, UI/UX design, SaaS design, software development, and app development. We deliver customized digital solutions that ensure a seamless user experience and meet the unique needs of businesses across industries.",
  },
  {
    _id: 8,
    question: "Will my website be mobile-friendly?",
    answer:
      "NALLASOFT offers web design, UI/UX design, SaaS design, software development, and app development. We deliver customized digital solutions that ensure a seamless user experience and meet the unique needs of businesses across industries.",
  },
];

const experties: Experties[] = [
  {
    _id: 1,
    title: "Figma",
    icon: figma,
    color: "#F24E1E",
  },
  {
    _id: 2,
    title: "React",
    icon: react,
    color: "#61DAFB",
  },
  {
    _id: 3,
    title: "Nestjs",
    icon: nest,
    color: "#E0234E",
  },
  {
    _id: 4,
    title: "Flutter",
    icon: flutter,
    color: "#08589C",
  },
  {
    _id: 5,
    title: "Nextjs",
    icon: nextjs,
    color: "#000",
  },
  {
    _id: 6,
    title: "Vuejs",
    icon: vue,
    color: "#41B883",
  },
  {
    _id: 7,
    title: "React Native",
    icon: reactNative,
    color: "#61DAFB",
  },
  {
    _id: 8,
    title: "Laravel",
    icon: laravel,
    color: "#FF2D20",
  },
  {
    _id: 9,
    title: "Javascript",
    icon: javascript,
    color: "#689F63",
  },
];

const serviceTabs = [
  { name: "Design", query: "?service-type=design" },
  { name: "Development", query: "?service-type=development" },
  { name: "Deploy", query: "?service-type=deploy" },
];

const caseStudyData = [
  {
    id: "1",
    title: "Case Study 1",
    description: "This is the first case study",
    image: images.demo1,
  },
  {
    id: "2",
    title: "Case Study 2",
    description: "This is the second case study",
    image: images.demo2,
  },
  {
    id: "3",
    title: "Case Study 3",
    description: "This is the third case study",
    image: images.demo3,
  },
  {
    id: "4",
    title: "Case Study 4",
    description: "This is the fourth case study",
    image: images.demo4,
  },
  {
    id: "5",
    title: "Case Study 5",
    description: "This is the fifth case study",
    image: images.demo5,
  },
  {
    id: "6",
    title: "Case Study 6",
    description: "This is the sixth case study",
    image: images.demo6,
  },
  {
    id: "7",
    title: "Case Study 7",
    description: "This is the seventh case study",
    image: images.demo7,
  },
  {
    id: "8",
    title: "Case Study 8",
    description: "This is the eighth case study",
    image: images.demo8,
  },
];

const serviceData = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "NALLASOFT crafts intuitive UI/UX designs that prioritize user experience and engagement. Our team creates visually appealing, functional interfaces that provide seamless navigation, ensuring users can easily interact with your product while maintaining your brand’s aesthetic and identity.",
    image: images.demo2,
    tags: ["Design"],
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Our SaaS design focuses on building scalable, user-friendly software solutions tailored to your business needs. We develop efficient, cloud-based platforms that enhance functionality, improve user satisfaction, and support long-term growth, all while maintaining a sleek and professional",
    image: images.demo4,
    tags: ["Design"],
  },
  {
    id: 3,
    title: "Design System",
    description:
      "NALLASOFT builds comprehensive design systems that promote consistency across all digital assets. By standardizing components and guidelines, we ensure your brand’s look and feel is cohesive across platforms, streamlining the design process for future updates and projects.",
    image: images.demo5,
    tags: ["Design"],
  },
  {
    id: 4,
    title: "App Development",
    description:
      "NALLASOFT builds comprehensive design systems that promote consistency across all digital assets. By standardizing components and guidelines, we ensure your brand’s look and feel is cohesive across platforms, streamlining the design process for future updates and projects.",
    image: images.demo6,
    tags: ["Deploy", "Development"],
  },
];

const blogTagData: blogTags[] = [
  {
    _id: 1,
    name: "UI",
    query: "ui",
  },
  {
    _id: 2,
    name: "UX",
    query: "ux",
  },
  {
    _id: 3,
    name: "App Development",
    query: "app development",
  },
  {
    _id: 4,
    name: "Web Development",
    query: "web development",
  },
  {
    _id: 5,
    name: "Server",
    query: "server",
  },
  {
    _id: 6,
    name: "Technology",
    query: "technology",
  },
  {
    _id: 7,
    name: "3d Design",
    query: "3d design",
  },
];

const blogData: BlogsType[] = [
  {
    _id: 1,
    title: "The Ultimate Guide to Design Systems",
    description:
      "Learn how design systems can help your business create cohesive, user-friendly digital experiences that drive engagement and growth.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3bb5f691632079.5e372adaa9f70.png",
    tags: ["ui", "ux"],
    user: {
      _id: 1,
      name: "Hridoy Haque",
      image: images.member1,
    },
  },
  {
    _id: 2,
    title: "User friendly digital experiences that drive engagement and growth",
    description:
      "Learn how design systems can help your business create cohesive, user-friendly digital experiences that drive engagement and growth.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3bb5f691632079.5e372adaa9f70.png",
    tags: ["server", "technology"],
    user: {
      _id: 1,
      name: "Hridoy Haque",
      image: images.member1,
    },
  },
  {
    _id: 3,
    title: "The Ultimate Guide to Design Systems",
    description:
      "Learn how design systems can help your business create cohesive, user-friendly digital experiences that drive engagement and growth.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3bb5f691632079.5e372adaa9f70.png",
    tags: ["technology"],
    user: {
      _id: 1,
      name: "Hridoy Haque",
      image: images.member1,
    },
  },
  {
    _id: 4,
    title: "The Ultimate Guide to Design Systems",
    description:
      "Learn how design systems can help your business create cohesive, user-friendly digital experiences that drive engagement and growth.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3bb5f691632079.5e372adaa9f70.png",
    tags: ["3d design"],
    user: {
      _id: 1,
      name: "Hridoy Haque",
      image: images.member1,
    },
  },
  {
    _id: 5,
    title: "The Ultimate Guide to Design Systems",
    description:
      "Learn how design systems can help your business create cohesive, user-friendly digital experiences that drive engagement and growth.",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3bb5f691632079.5e372adaa9f70.png",
    tags: ["web development", "app development"],
    user: {
      _id: 1,
      name: "Hridoy Haque",
      image: images.member1,
    },
  },
];

const teamData = [
  {
    _id: 1,
    name: "Hridoy Haque",
    title: "UI/UX Designer",
    image: images.member1,
  },
  {
    _id: 2,
    name: "Hridoy Haque",
    title: "UI/UX Designer",
    image: images.member1,
  },
  {
    _id: 3,
    name: "Hridoy Haque",
    title: "UI/UX Designer",
    image: images.member1,
  },
  {
    _id: 4,
    name: "Hridoy Haque",
    title: "UI/UX Designer",
    image: images.member1,
  },
  {
    _id: 5,
    name: "Hridoy Haque",
    title: "UI/UX Designer",
    image: images.member1,
  },
  {
    _id: 6,
    name: "Hridoy Haque",
    title: "UI/UX Designer",
    image: images.member1,
  },
];

const workData = [
  {
    _id: 1,
    title: "The Art of Design",
    category: "Design",
    year: "2024",
    image: images?.demo2,
  },
  {
    _id: 2,
    title: "The Art of Design",
    category: "Design",
    year: "2024",
    image: images?.demo4,
  },
  {
    _id: 3,
    title: "The Art of Design",
    category: "Design",
    year: "2024",
    image: images?.demo5,
  },
  {
    _id: 4,
    title: "The Art of Design",
    category: "Design",
    year: "2024",
    image: images?.demo6,
  },
];

export {
  blogData,
  blogTagData,
  caseStudyData,
  experties,
  faqLists,
  serviceData,
  serviceTabs,
  teamData,
  workData,
};
