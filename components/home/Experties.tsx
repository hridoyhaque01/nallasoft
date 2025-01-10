import { experties } from "@/services";
import Image from "next/image";
import SectionHeader from "../shared/SectionHeader";

function Experties() {
  return (
    <section className="sec_p80" id="homeExperties">
      <div className="container3x">
        <SectionHeader
          tagTitle="Technology"
          title="Expertise Includes"
          description={`Industry-Leading\nTechnology Knowledge`}
        />
        <div className="w-full max-w-[580px] mx-auto grid grid-cols-3 gap-10 mt-10 sm:mt-16 md:mt-20">
          {experties?.map((item) => (
            <div className="coin-container expertiesItem" key={item?._id}>
              <div
                className="coin border-b-2"
                style={{
                  borderColor: item?.color,
                }}
              >
                <div className="coin-front">
                  <Image
                    src={item?.icon}
                    className="h-8 sm:h-10 md:h-14 w-auto max-w-full object-contain"
                    width={300}
                    height={300}
                    alt={item?.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experties;
