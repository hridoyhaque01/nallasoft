import {
  BannerBottomGradient,
  BannerGradient,
  BannerLineRound,
  Code,
  Logo,
} from "@/services";
import { Button } from "../ui/button";

function Banner() {
  console.log("Banner");
  return (
    <section className="container3x pt-6 sm:pt-10 md:pt-16 lg:pt-20">
      <div className="grid xs:grid-cols-12 gap-6">
        <div className="bannerContentWrapper" id="bannerContent">
          <div className="flex flex-col gap-2 relative z-50 overflow-hidden">
            <h2 className="bannerSubHeader max-w-max">
              Y
              <Code className="w-3.5 h-3.5 sm:w-5 sm:h-6 xl:w-9 xl:h-9 -mb-1 md:-mb-2 duration-300" />
              ur
            </h2>
            <div>
              <h2 className="bannerHeader">Trusted</h2>
              <h2 className="flex gap-1 sm:gap-2 items-center justify-center sm:justify-start bannerHeader">
                Part{" "}
                <Logo className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 xl:w-14 xl:h-14 -mb-1 md:-mb-2 animateLogo" />{" "}
                er
              </h2>
            </div>
            <div className="bannerDescription flex items-center gap-4 flex-wrap">
              <div className="overflow-hidden">
                <span className="textStaggerSlideY inline-block">In</span>
              </div>
              <div className="overflow-hidden">
                <span className="textStaggerSlideY inline-block">Digital</span>
              </div>
              <div className="overflow-hidden">
                <span className="textStaggerSlideY inline-block">
                  Innovation
                </span>
              </div>
            </div>
          </div>
          <Button className="max-w-max relative z-50 bannerBtn" type="button">
            Let’s Cook Together
          </Button>
          {/* svg  */}
          <BannerGradient className="w-[240px] h-[310px] lg:w-auto lg:h-auto absolute z-10 left-0 -top-20 lg:top-0" />
          <BannerBottomGradient className="w-[240px] h-[310px] lg:w-auto lg:h-auto absolute z-10 right-10 sm:right-20 -bottom-10 lg:bottom-0" />
        </div>
        <div
          className="xs:col-span-5 gradient-bg rounded-[2rem] md:rounded-[2.5rem] lg:col-span-4 relative"
          id="heroLabel"
        >
          <div className="px-4 py-11 lg:py-14 text-center text-5xl xs:text-4xl lg:text-6xl xl:text-6xl font-bold font-sf-sans uppercase relative after:absolute after:content-[''] after:w-full after:h-full after:bg-black-900 after:left-0 after:-top-[1px] after:z-30 after:rounded-[2.5rem]">
            <div className="relative z-50 design overflow-hidden">Design</div>
            <div className="absolute -top-2 -left-2 bg-black-950 h-20 w-20 z-10"></div>
            <div className="absolute -top-2 -right-2 bg-black-950 h-20 w-20 z-10"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="relative flex justify-start w-full max-w-[18%] sm:max-w-[20%] lg:max-w-[18%] h-10 md:h-[50px] bg-black-950 rounded-r-full">
              <BannerLineRound className="absolute w-9 h-9 md:w-10 md:h-10 -top-9 md:-top-10" />
              <BannerLineRound className="absolute w-9 h-9 md:w-10 md:h-10 top-10 md:top-[50px] rotate-90" />
            </div>
            <div className="relative flex justify-end w-full max-w-[77%] sm:max-w-[75%] lg:max-w-[77%] h-10 md:h-[50px] bg-black-950 rounded-l-full">
              <BannerLineRound className="absolute w-9 h-9 md:w-10 md:h-10 -top-9 md:-top-10 -rotate-90" />
              <BannerLineRound className="absolute w-9 h-9 md:w-10 md:h-10 top-10 md:top-[50px] rotate-180" />
            </div>
          </div>
          <div className="px-4 py-11 lg:py-14 z-30 text-center text-5xl xs:text-4xl lg:text-6xl xl:text-6xl font-bold font-sf-sans uppercase relative">
            <div className="relative z-50 develop overflow-hidden">Develop</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="relative flex justify-start w-full max-w-[77%] sm:max-w-[75%] lg:max-w-[77%] h-10 md:h-[50px] bg-black-950 rounded-r-full">
              <BannerLineRound className="absolute w-9 h-9 md:w-10 md:h-10 -top-9 md:-top-10 " />
              <BannerLineRound className="absolute w-9 h-9 md:w-10 md:h-10 top-10 md:top-[50px] rotate-90" />
            </div>
            <div className="relative flex justify-end w-full max-w-[18%] sm:max-w-[20%] lg:max-w-[18%] h-10 md:h-[50px] bg-black-950 rounded-l-full">
              <BannerLineRound className="absolute w-9 h-9 md:w-10 md:h-10 -top-9 md:-top-10 -rotate-90" />
              <BannerLineRound className="absolute w-9 h-9 md:w-10 md:h-10 top-10 md:top-[50px] rotate-180" />
            </div>
          </div>
          <div className="px-4 py-11 lg:py-14 rounded-[2rem] md:rounded-[2.5rem] text-center text-5xl xs:text-4xl lg:text-6xl xl:text-6xl font-bold font-sf-sans uppercase relative after:absolute after:content-[''] after:w-full after:h-full after:bg-black-900 after:left-0 after:-bottom-[1px] after:z-30 after:rounded-[2.5rem]">
            <span className="relative z-50 deploy overflow-hidden">Deploy</span>
            <div className="absolute -bottom-2 -left-2 bg-black-950 h-20 w-20 z-10"></div>
            <div className="absolute -bottom-2 -right-2 bg-black-950 h-20 w-20 z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
