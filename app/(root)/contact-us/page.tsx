import ContactContent from "@/components/contact/ContactContent";
import SectionThumbnail from "@/components/shared/SectionThumbnail";
import { breadcrumbs } from "@/services";

function ContactUs() {
  return (
    <>
      <SectionThumbnail
        title="Contact"
        id="contactThumbnail"
        breadcrumbs={breadcrumbs.contact}
      />
      <ContactContent />
    </>
  );
}

export default ContactUs;
