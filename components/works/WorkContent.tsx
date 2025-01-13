import { workData } from "@/services";
import WorkCard from "./WorkCard";

function WorkContent() {
  return (
    <section className="md:pt-8 lg:pt-12">
      <div className="container3x">
        <div className="hidden md:block">
          <h2 className="text-4xl lg:text-5xl font-semibold text-center transparentText workTitle">
            Works that made our client HAPPY
          </h2>
        </div>
        <div className="sec_p80" id="works">
          <div className="grid sm:grid-cols-2 gap-6">
            {workData?.map((item, index) => (
              <WorkCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkContent;
