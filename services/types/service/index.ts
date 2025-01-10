import { StaticImageData } from "next/image";

interface ServiceType {
  id?: number;
  title?: string;
  description?: string;
  image?: StaticImageData | string;
  tags?: string[];
}

export type { ServiceType };
