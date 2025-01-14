import { routes } from "@/services";
import ButtonLink from "../shared/ButtonLink";
import SectionHeader from "../shared/SectionHeader";
import { BorderBeam } from "../ui/border-beam";

function Services() {
  return (
    <section className="sec_p80" id="homeServices">
      <div className="container3x">
        <SectionHeader
          tagTitle="Our"
          title="Services"
          description={`Your vision, Our expertise.\n Seamless solutions delivered`}
        />
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          <div
            className="px-4 py-6 sm:px-6 sm:py-8 md:p-10 rounded-3xl bg-black-900 flex flex-col justify-between gap-8 sm:gap-12 md:gap-16 relative"
            id="service1"
          >
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold max-w-max uppercase serviceTitle">
              Design
            </h3>
            <div className="flex items-end justify-between gap-6">
              <div className="flex flex-col gap-2 sm:gap-3 xl:gap-5 overflow-hidden">
                <p className="text-base sm:text-lg md:text-xl xl:text-3xl font-medium serviceItem">
                  UI/UX Design
                </p>
                <p className="text-base sm:text-lg md:text-xl xl:text-3xl font-medium serviceItem">
                  Saas Design
                </p>
                <p className="text-base sm:text-lg md:text-xl xl:text-3xl font-medium serviceItem">
                  Design System
                </p>
              </div>
              <ButtonLink path={routes.home} />
            </div>
            <BorderBeam />
          </div>
          <div className="flex flex-col gap-4 overflow-hidden">
            <div
              className="px-4 py-6 sm:px-6 sm:py-8 md:p-10 rounded-3xl bg-black-900 flex flex-col justify-between gap-8 sm:gap-12 md:gap-16 relative"
              id="service2"
            >
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold max-w-max uppercase serviceTitle">
                Design
              </h3>
              <div className="flex items-end justify-between gap-6">
                <div className="flex flex-col gap-2 sm:gap-3 xl:gap-5 overflow-hidden">
                  <p className="text-base sm:text-lg md:text-xl xl:text-3xl font-medium serviceItem">
                    Web Development
                  </p>
                  <p className="text-base sm:text-lg md:text-xl xl:text-3xl font-medium serviceItem">
                    App Develpoment
                  </p>
                </div>
                <ButtonLink path={routes.home} />
              </div>
              <BorderBeam delay={1} />
            </div>
            <div
              className="px-4 py-6 sm:px-6 sm:py-8 md:p-10 rounded-3xl bg-black-900 flex flex-col justify-between gap-8 sm:gap-12 md:gap-16 relative"
              id="service3"
            >
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold max-w-max uppercase serviceTitle">
                Design
              </h3>
              <div className="flex items-end justify-between gap-6">
                <div className="flex flex-col gap-2 sm:gap-3 xl:gap-5 overflow-hidden">
                  <p className="text-base sm:text-lg md:text-xl xl:text-3xl font-medium serviceItem">
                    Application Hosting
                  </p>
                  <p className="text-base sm:text-lg md:text-xl xl:text-3xl font-medium serviceItem">
                    Database Management
                  </p>
                  <p className="text-base sm:text-lg md:text-xl xl:text-3xl font-medium serviceItem">
                    Support & Maintenance
                  </p>
                </div>
                <ButtonLink path={routes.home} />
              </div>
              <BorderBeam delay={2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
