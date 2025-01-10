import { StaticImageData } from "next/image";

interface ISvgProps {
  className?: string;
  color?: string;
  secondaryColor?: string;
}

interface Faq {
  _id: number;
  question: string;
  answer: string;
}

interface Experties {
  _id: number;
  title: string;
  icon: StaticImageData;
  color: string;
}

interface ThumbnailProps {
  title?: string;
  breadcrumbs?: { name: string; href: string }[];
  wrapperClass?: string;
  id?: string;
}

interface blogTags {
  _id: number;
  name: string;
  query: string;
}

interface TabsProps {
  tabList?: { name: string; query?: string }[];
}

export type { blogTags, Experties, Faq, ISvgProps, TabsProps, ThumbnailProps };
