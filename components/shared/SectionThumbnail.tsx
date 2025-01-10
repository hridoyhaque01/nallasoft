import {
  ArrowDoubleLine,
  ThumbnailLineFour,
  ThumbnailLineOne,
  ThumbnailLineThree,
  ThumbnailLineTwo,
  ThumbnailProps,
} from "@/services";
import Link from "next/link";
import { Fragment } from "react";
import BackButton from "./BackButton";

function SectionThumbnail({
  breadcrumbs = [],
  title = "",
  id = "sectionThumbnail",
}: ThumbnailProps) {
  const titleTextx = title.split("");

  return (
    <section className="container3x pt-4 sm:pt-8 md:pt-10" id={id}>
      <div className="md:min-h-48 md:p-10 md:rounded40 md:bg-neutral-950 relative overflow-hidden flex items-center justify-center">
        <div className="relative z-50 flex md:flex-col items-center w-full gap-5">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold hidden md:block thumbnailTitle">
            {titleTextx.map((text, index) => (
              <span className="inline-block" key={index}>
                {text}
              </span>
            ))}
          </h2>
          <BackButton />
          <ul className="flex items-center justify-center gap-2 text-sm sm:text-base font-medium flex-1 breadcrumbLists">
            {breadcrumbs?.map((breadcrumb, index) =>
              index !== breadcrumbs.length - 1 ? (
                <Fragment key={index}>
                  <li>
                    <Link href={breadcrumb?.href}>{breadcrumb?.name}</Link>
                  </li>
                  <li>
                    <ArrowDoubleLine />
                  </li>
                </Fragment>
              ) : (
                <li key={index} className="text-lime-400">
                  {breadcrumb?.name}
                </li>
              )
            )}
          </ul>
        </div>
        <ThumbnailLineOne className="hidden md:block absolute -left-32 lg:left-0 top-0" />
        <ThumbnailLineTwo className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0" />
        <ThumbnailLineThree className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0" />
        <ThumbnailLineFour className="hidden md:block absolute -right-32 lg:right-0 top-0" />
      </div>
    </section>
  );
}

export default SectionThumbnail;
