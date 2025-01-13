import { StaticImageData } from "next/image";

interface IWork {
  _id?: number;
  title?: string;
  category?: string;
  year?: string;
  image: StaticImageData | string;
}

export type { IWork };
