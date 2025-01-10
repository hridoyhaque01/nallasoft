import { ContactLineOne, ContactLineTwo, images } from "@/services";
import Image from "next/image";
import { Button } from "../ui/button";

function ContactCard() {
  return (
    <section className="sec_p80">
      <div className="container3x">
        <div className="w-full h-[256px] sm:h-[320px] md:h-[400px] rounded40 bg-neutral-900 p-6 flex items-center justify-center relative overflow-hidden">
          <div className="relative z-50 text-center w-full max-w-[660px] mx-auto">
            <h2 className="text-base sm:text-xl md:text-3xl md:text-[2.5rem] font-extrabold uppercase">
              Stay Ahead with Nallasoft
            </h2>
            <form action="" className="mt-6 sm:mt-8 md:mt-10">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
                <input
                  type="text"
                  placeholder="Enter email address"
                  className="formInput bg-neutral-950"
                />
                <Button
                  type="submit"
                  className="max-w-max text-base font-medium rounded-3xl"
                >
                  Subscribe Now
                </Button>
              </div>
            </form>
          </div>
          <Image
            src={images.contactSvgOne}
            alt="contactSvgOne"
            className="absolute top-0 right-40 z-30  hidden md:block"
          />
          <Image
            src={images.contactSvgTwo}
            alt="contactSvgOne"
            className="absolute top-0 right-0  w-[30%] md:w-[revert-layer] z-20"
          />
          <ContactLineOne className="absolute top-0 left-1/2 -translate-x-1/2 hidden lg:block" />
          <ContactLineTwo className="absolute w-[200px] h-[220px] sm:w-[360px] sm:h-[320px] md:w-[520px] md:h-[400px] -bottom-6 -left-6 sm:bottom-0 sm:left-0" />
        </div>
      </div>
    </section>
  );
}

export default ContactCard;
