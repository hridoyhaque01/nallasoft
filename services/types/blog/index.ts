import { StaticImageData } from "next/image";

interface BlogsType {
  _id?: number;
  title?: string;
  description?: string;
  image?: StaticImageData | string;
  tags?: string[];
  user: {
    _id: number;
    name: string;
    image: StaticImageData | string;
  };
}

export type { BlogsType };
