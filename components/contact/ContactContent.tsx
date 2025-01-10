import { images, Mail, Phone } from "@/services";
import Image from "next/image";
import { Button } from "../ui/button";

function ContactContent() {
  return (
    <section className="sec_p80">
      <div className="container3x">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          <div className="w-full p-6 sm:px-8 md:px-10 sm:py-10 md:py-20 bg-neutral-950 rounded40 flex flex-col justify-center items-center text-center">
            <Phone />
            <div>
              <h3 className="text-base sm:text-lg mt-6 sm:mt-8 md:mt-10 mb-3">
                Call Us{" "}
              </h3>
              <a
                href="tel:+1234567890"
                className="no-underline text-xl sm:text-2xl font-medium sm:font-bold"
              >
                +1 234 567 890
              </a>
            </div>
          </div>
          <div className="w-full p-6 sm:px-8 md:px-10 sm:py-10 md:py-20 bg-neutral-950 rounded40 flex flex-col justify-center items-center text-center">
            <Mail />
            <div>
              <h3 className="text-base sm:text-lg mt-6 sm:mt-8 md:mt-10 mb-3">
                Email
              </h3>
              <a
                href="mailto:contact@nallasoft.com"
                className="no-underline text-xl sm:text-2xl font-medium sm:font-bold"
              >
                contact@nallasoft.com
              </a>
            </div>
          </div>
          <div className="w-full p-6 sm:px-8 md:px-10 sm:py-10 md:py-20 bg-neutral-950 rounded40 flex flex-col justify-center items-center order-4 md:order-3">
            <Image
              src={images.globe}
              alt="globe"
              width={400}
              height={400}
              className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] object-contain"
            />
          </div>
          <form className="p-6 sm:p-8 md:p-10 bg-neutral-950 rounded40 flex flex-col items-center gap-4 order-3 md:order-4">
            <div className="grid sm:grid-cols-2 gap-2 w-full">
              <input type="text" className="formInput" placeholder="Name" />
              <input type="email" className="formInput" placeholder="Email" />
              <input
                type="text"
                className="formInput sm:col-span-2"
                placeholder="Subject"
              />
              <textarea
                placeholder="Write your message here."
                className="formInput sm:col-span-2 h-[200px] sm:h-[240px] md:h-[270px] resize-none"
              />
            </div>
            <Button className="!rounded-full w-[168px]">Submit</Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactContent;
