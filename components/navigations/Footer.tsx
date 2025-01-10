import { images, routes } from "@/services";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const contactTexts = [
    "c",
    "o",
    "n",
    "t",
    "a",
    "c",
    "t",
    "@",
    "n",
    "a",
    "l",
    "l",
    "a",
    "s",
    "o",
    "f",
    "t",
    ".",
    "c",
    "o",
    "m",
  ];
  return (
    <footer className="sec_p80" id="footer">
      <div className="container3x">
        <div className="text-center">
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold helloTitle">
            🖐 HELLO !
          </h2>
          <h3
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[8rem] font-bold mt-4 sm:mt-6 footerTitle"
            style={{ perspective: 400 }}
          >
            <span className="inline-block">LET’S</span> <br />
            <span className="inline-block">TALK</span>
            <br />
            <span className="inline-block">WITH US</span>
          </h3>
          <p className="text-xl sm:text-2xl md:text-3xl md:text-[2.5rem] font-medium mt-6 sm:mt-8 md:mt-10 footerContact overflow-hidden">
            {contactTexts.map((text, index) => (
              <span className="inline-block" key={index}>
                {text}
              </span>
            ))}
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center pb-6 sm:pb-8 md:pb-10 mt-8 sm:mt-16 md:mt-20 xl:mt-28 gap-8">
          <div className="flex items-center gap-2">
            <Image
              src={images.copyright}
              width={100}
              height={100}
              alt="copyright"
              className="w-6 h-6"
            />
            <span className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold">
              2024 - Nallasoft
            </span>
          </div>
          <ul className="flex-1 flex items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <li>
              <Link
                className="text-xs sm:text-sm lg:text-base font-medium"
                href={routes.services}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="text-xs sm:text-sm lg:text-base font-medium"
                href={routes.works}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                className="text-xs sm:text-sm lg:text-base font-medium"
                href={routes.aboutUs}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="text-xs sm:text-sm lg:text-base font-medium"
                href={routes.blogs}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="text-xs sm:text-sm lg:text-base font-medium"
                href={routes.contact}
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#">
                <Image
                  src={images.facebook}
                  width={100}
                  height={100}
                  alt="copyright"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  src={images.instagram}
                  width={100}
                  height={100}
                  alt="copyright"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  src={images.linkedin}
                  width={100}
                  height={100}
                  alt="copyright"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <Image
                  src={images.behance}
                  width={100}
                  height={100}
                  alt="copyright"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
