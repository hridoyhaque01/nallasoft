import { cn } from "@/lib/utils";
import { images, ITeam } from "@/services";
import Image from "next/image";
import ButtonLink from "../shared/ButtonLink";

function TeamCard({
  wrapperClass = "",
  item = {},
}: {
  wrapperClass?: string;
  item: ITeam;
}) {
  return (
    <div
      className={cn(
        "bg-neutral-900 rounded16_40 w-full min-w-[264px] sm:min-w-[392px] flex flex-col overflow-hidden group cursor-pointer",
        wrapperClass
      )}
    >
      <div className="bg-neutral-950 h-[230px] sm:h-[280px] md:h-[380px] relative overflow-hidden">
        <Image
          src={item?.image || images.member1}
          alt="profile"
          width={400}
          height={500}
          className="w-full h-full object-cover group-hover:blur-[2px] group-hover:scale-105 duration-200"
        />
        <ButtonLink
          wrapper="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 duration-200 bg-lime-400"
          // path={`${routes.teams}/${item?._id}`}
          color="#010101"
        />
      </div>
      <div className="p-4 sm:p-6 shrink-0">
        <h2 className="text-sm sm:text-lg md:text-2xl font-bold">
          {item?.name}
        </h2>
        <p className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
          {item?.title}
        </p>
      </div>
    </div>
  );
}

export default TeamCard;
