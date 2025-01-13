import { cn } from "@/lib/utils";
import SectionHeader from "../shared/SectionHeader";

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
          {Array(4)
            .fill(0)
            .map((_, idx) => (
              <div
                className={cn(
                  "flex flex-col md:flex-row px-4 sm:px-6 xl:px-12 pt-6 sm:pt-8 xl:pt-12 mt-6 sm:mt-8 md:mt-10 bg-black-900 border rounded40 gap-y-20 overflow-hidden gap-6 md:gap-10 h-96 md:h-[70vh] sticky w-full recentWorkItem"
                )}
                style={{
                  top: "12vh",
                }}
                key={idx}
              >
                <div className="w-full max-w-max md:min-w-[380px]">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    PRODUCT NAME
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg xl:text-xl mt-4 sm:mt-6">
                    App Design
                  </p>
                </div>
                <div className="w-full md:max-w-[740px] md:ml-auto grid grid-cols-2 gap-2 sm:gap-6 xl:gap-10 h-full">
                  <div className="flex flex-col gap-2 sm:gap-6 xl:gap-10">
                    <div className="h-[40%] rounded-xl sm:rounded-2xl md:rounded-3xl bg-text-900"></div>
                    <div className="h-[60%] rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl bg-text-900"></div>
                  </div>
                  <div className="w-full h-ful rounded-t-xl sm:rounded-t-2xl md:rounded-t-3xl bg-text-900"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default RecentCreation;
