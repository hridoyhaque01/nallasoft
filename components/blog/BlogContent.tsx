import { blogData } from "@/services";
import { BlogsType } from "@/services/types/blog";
import BlogCard from "./BlogCard";
import BlogTags from "./BlogTags";

function BlogContent({ tags = [] }: { tags: string[] }) {
  const filterByTag = (item: BlogsType) => {
    if (tags.length === 0) return true;
    return tags.some((tag) => item.tags?.includes(tag));
  };

  return (
    <section className="sec_p80">
      <div className="container3x">
        <div className="flex gap-6 relative">
          <div className="w-full flex flex-col gap-6" id="blogs">
            {blogData?.filter(filterByTag).map((blog) => (
              <BlogCard item={blog} key={blog?._id} />
            ))}
          </div>
          <BlogTags tags={tags} />
        </div>
      </div>
    </section>
  );
}

export default BlogContent;
