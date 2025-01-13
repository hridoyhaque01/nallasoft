import { blogData } from "@/services";
import BlogHomeCard from "../blog/BlogHomeCard";
import SectionHeader from "../shared/SectionHeader";
import SliderContainer from "../shared/SliderContainer";

function Blogs() {
  const blogs = blogData?.slice(0, 3);
  return (
    <section className="sec_p80" id="homeBlogs">
      <div className="container3x">
        <SectionHeader
          tagTitle="Blog"
          title="Quick Answers"
          description={`Thoughts\nfrom the Experts`}
        />
      </div>
      <div className="mt-6 sm:mt-8 md:mt-10">
        <SliderContainer className="w-full overflow-hidden container2x">
          <div className="flex gap-2 sm:gap-4 md:gap-6">
            {blogs?.map((item, index) => (
              <BlogHomeCard item={item} wrapperClass="blogItem" key={index} />
            ))}
          </div>
        </SliderContainer>
      </div>
    </section>
  );
}

export default Blogs;
