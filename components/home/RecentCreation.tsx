import { cn } from "@/lib/utils";
import { recentCreationData } from "@/services";
import Image from "next/image";
import SectionHeader from "../shared/SectionHeader";
import ShineBorder from "../ui/shine-border";

function RecentCreation() {
  return (
    <section className="sec_p80 relative" id="homeRecentCreation">
      <div className="container3x">
        <SectionHeader
          tagTitle="Work"
          title="Recent Creations"
          description={`Crafted with\nCare & Passion`}
        />
        <div className="relative">
          {recentCreationData.map((item, idx) => (
            <div
              className={cn(
                "flex flex-col md:flex-row px-4 sm:px-6 xl:px-12 pt-6 sm:pt-8 xl:pt-12 mt-6 sm:mt-8 md:mt-10 bg-black-900  rounded40 gap-y-20 overflow-hidden gap-6 md:gap-10 h-96 md:h-[70vh] relative md:sticky md:top-[12vh] w-full recentWorkItem"
              )}
              key={idx}
            >
              <div className="w-full max-w-max md:min-w-[380px]">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  {item?.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg xl:text-xl mt-4 sm:mt-6">
                  {item?.category}
                </p>
              </div>
              <div className="w-full md:max-w-[740px] md:ml-auto h-full relative">
                <Image
                  src={item?.image}
                  alt={item?.title}
                  width={600}
                  height={600}
                  className="w-full h-full"
                />
              </div>
              <ShineBorder className="before:!rounded-3xl sm:before:!rounded-[32px] md:before:!rounded-[40px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentCreation;
