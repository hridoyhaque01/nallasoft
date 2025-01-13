"use client";
import { cn } from "@/lib/utils";
import { LinkIcon } from "@/services";
import { useRouter } from "next/navigation";

function ButtonLink({ path = "", wrapper = "", ...props }) {
  const navigate = useRouter();
  return (
    <button
      type="button"
      className={cn(
        "w-10 sm:w-12 md:w-16 aspect-square bg-black-800 flex items-center justify-center rounded-[64px] !rounded-tr-lg",
        wrapper
      )}
      onClick={() => (!path ? null : navigate.push(path))}
    >
      <LinkIcon {...props} />
    </button>
  );
}

export default ButtonLink;
