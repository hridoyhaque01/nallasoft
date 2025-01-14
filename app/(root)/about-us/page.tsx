import About from "@/components/home/About";
import Faq from "@/components/home/Faq";
import SectionThumbnail from "@/components/shared/SectionThumbnail";
import { breadcrumbs } from "@/services";

function AboutUs() {
  return (
    <>
      <SectionThumbnail
        title="About Us"
        id="blogThumbnail"
        breadcrumbs={breadcrumbs.about}
      />
      <section>
        <About />
        <Faq />
      </section>
    </>
  );
}

export default AboutUs;
