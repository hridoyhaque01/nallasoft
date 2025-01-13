import { StaticImageData } from "next/image";

interface ITeam {
  _id?: number;
  title?: string;
  name?: string;
  image?: StaticImageData | string;
}

export type { ITeam };
