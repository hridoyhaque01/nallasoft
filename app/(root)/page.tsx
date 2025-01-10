import ContactCard from "@/components/contact/ContactCard";
import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Blogs from "@/components/home/Blogs";
import CaseStudy from "@/components/home/CaseStudy";
import Experties from "@/components/home/Experties";
import Faq from "@/components/home/Faq";
import RecentCreation from "@/components/home/RecentCreation";
import Services from "@/components/home/Services";
import Teams from "@/components/home/Teams";

export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <About />
      <RecentCreation />
      <Experties />
      <CaseStudy />
      <Teams />
      <Faq />
      <Blogs />
      <ContactCard />
    </>
  );
}
