import { cn } from "@/lib/utils";
import { BlogsType } from "@/services";
import Image from "next/image";

function BlogHomeCard({
  wrapperClass = "",
  item,
}: {
  wrapperClass?: string;
  item: BlogsType;
}) {
  return (
    <div
      className={cn(
        "p-4 sm:py-8 md:py-12 xl:py-14 sm:px-8 md:px-10 xl:px-12 rounded16_40 bg-neutral-900 w-full min-w-[216px] sm:min-w-[392px]",
        wrapperClass
      )}
    >
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
        <div className="w-8 sm:w-10 md:w-14 aspect-square bg-neutral-300 rounded-full">
          <Image
            src={item?.user?.image}
            alt={item?.user?.name}
            className="rounded-full"
            width={100}
            height={100}
          />
        </div>
        <div>
          <h2 className="text-xxs sm:text-sm md:text-base xl:text-lg font-medium">
            Written by
          </h2>
          <p className="text-xs sm:text-base md:text-lg xl:text-xl font-bold">
            {item?.user?.name}
          </p>
        </div>
      </div>
      <p className="tex-sm sm:text-lg md:text-xl xl:text-2xl font-medium sm:font-bold mt-6 sm:mt-10 md:mt-14 xl:mt-16 mb-4 sm:mb-6 md:mb-10">
        {item?.title}
      </p>
      <p className="text-xxs sm:text-sm md:text-lg font-medium sm:font-medium line-clamp-2">
        {item?.description}
      </p>
    </div>
  );
}

export default BlogHomeCard;
