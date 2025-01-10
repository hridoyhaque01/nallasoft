import { cn } from "@/lib/utils";
import { ServiceType } from "@/services/types/service";
import Image from "next/image";

function ServiceCards({
  service,
  index,
}: {
  service: ServiceType;
  index: number;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-2 sm:gap-3 md:gap-4 serviceItem">
      <div
        className={cn(
          "w-full p-6 sm:p-10 md:p-16 xl:p-20 bg-neutral-900 rounded-3xl flex flex-col gap-4 sm:gap-7 md:gap-10 serviceInnerItem",
          index % 2 === 0 ? "order-2 md:order-1" : "order-1 md:order-2"
        )}
      >
        <h3 className="text-xl sm:text-3xl md:text-5xl font-bold">
          {service?.title}
        </h3>
        <p className="text-xs sm:text-base md:text-xl line-clamp-6">
          {service?.description}
        </p>
      </div>
      <div
        className={cn(
          "w-full h-[268px] sm:h-[340px] md:h-[480px] lg:h-[604px] rounded-3xl relative py-12 serviceInnerItem",
          index % 2 === 0 ? "bg-lime-400 md:order-2" : "bg-blue-700 md:order-1"
        )}
      >
        <Image
          src={service?.image || "/images/placeholder.png"}
          alt="service image"
          width={400}
          height={400}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default ServiceCards;
