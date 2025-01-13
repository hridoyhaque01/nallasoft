import { cn } from "@/lib/utils";
import { ArrowBack, routes } from "@/services";
import { BlogsType } from "@/services/types/blog";
import Image from "next/image";
import Link from "next/link";

function BlogCard({
  wrapperClass = "",
  item,
}: {
  wrapperClass?: string;
  item: BlogsType;
}) {
  return (
    <div
      className={cn(
        "rounded40 px-4 py-5 sm:px-6 sm:py-8 md:p-10 bg-neutral-900 blogItem",
        wrapperClass
      )}
    >
      <h2 className="text-base sm:text-xl md:text-2xl font-semibold md:font-bold">
        {item?.title}
      </h2>
      <div className="flex items-center gap-4 mt-3 sm:mt-4">
        <div className="w-8 sm:w-10 md:w-14 aspect-square bg-neutral-300 rounded-full">
          <Image
            src={item?.user?.image}
            alt="user image"
            className="rounded-full"
            width={100}
            height={100}
          />
        </div>
        <div>
          <p className="text-xs sm:text-sm">Written by</p>
          <p className="text-xs sm:text-sm font-medium">{item?.user?.name}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6">
        <div className="w-full sm:min-w-[280px] sm:max-w-[360px] h-[166px] sm:h-[200px] bg-neutral-300 rounded-2xl sm:rounded-3xl overflow-hidden">
          <Image
            src={item?.image}
            alt="blog image"
            className="w-full h-full object-cover"
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-col justify-between gap-3">
          <p className="line-clamp-5">{item?.description}</p>
          <Link
            className="flex items-center gap-2 text-sm sm:text-base font-bold text-lime-400 group"
            href={routes.blogs}
          >
            <span>Read Now</span>
            <ArrowBack
              color="#A0E635"
              className="rotate-180 group-hover:translate-x-1 duration-200"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
