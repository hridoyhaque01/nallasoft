import BlogContent from "@/components/blog/BlogContent";
import SectionThumbnail from "@/components/shared/SectionThumbnail";
import { breadcrumbs } from "@/services";

async function Blogs({
  searchParams,
}: {
  searchParams: Promise<{ tags?: string }>;
}) {
  const query = (await searchParams)?.tags;
  const tags = query ? query.split(",") : [];
  return (
    <>
      <SectionThumbnail
        title="Blogs"
        id="blogThumbnail"
        breadcrumbs={breadcrumbs.blogs}
      />
      <BlogContent tags={tags} />
    </>
  );
}

export default Blogs;
