import { serviceData, serviceTabs } from "@/services";
import { ServiceType } from "@/services/types/service";
import Tabs from "../shared/Tabs";
import ServiceCards from "./ServiceCards";

function ServiceContent({
  activeTab = serviceTabs[0]?.name,
}: {
  activeTab?: string;
}) {
  const filterByTab = (item: ServiceType) => {
    return item?.tags?.includes(activeTab);
  };

  return (
    <section>
      <div className="px-4 mt-5">
        <Tabs tabList={serviceTabs} />
      </div>
      <div className="container3x sec_p80" id="services">
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          {serviceData?.filter(filterByTab).map((service, index) => (
            <ServiceCards key={service?.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceContent;
