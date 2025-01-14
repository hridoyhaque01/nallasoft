"use client";
import { blogTagData, SuccessChecked, SuccessUnchecked } from "@/services";
import { useRouter } from "next/navigation";

function BlogTags({ tags }: { tags: string[] }) {
  const router = useRouter();
  const handleTag = (query: string) => {
    const hasTagExist = tags.includes(query);
    if (hasTagExist) {
      const newTags = tags.filter((tag) => tag !== query);
      if (newTags?.length === 0) return router.push(`/blogs`);
      else router.push(`?tags=${newTags.join(",")}`);
    } else {
      const newTags = [...tags, query];
      router.push(`?tags=${newTags.join(",")}`);
    }
  };
  return (
    <div className="w-full max-w-[288px] xl:max-w-[420px] ">
      <div className="w-full rounded40 p-6 sm:p-8 md:p-10 bg-neutral-900 hidden lg:block sticky top-10">
        <ul className="flex flex-col gap-6" id="blogTags">
          {blogTagData?.map((item) => (
            <li
              className="flex items-center gap-3.5 cursor-pointer max-w-max tagItem"
              key={item?._id}
              onClick={() => handleTag(item?.query)}
            >
              {tags.includes(item?.query) ? (
                <SuccessChecked />
              ) : (
                <SuccessUnchecked />
              )}
              <span>{item?.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BlogTags;
