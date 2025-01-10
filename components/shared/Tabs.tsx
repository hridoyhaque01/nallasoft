"use client";
import { cn } from "@/lib/utils";
import { TabsProps } from "@/services";
import { useRouter, useSearchParams } from "next/navigation";

function Tabs({ tabList = [] }: TabsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || tabList[0]?.name;

  const handleTabClick = (tabName: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("tab", tabName);
    const newPath = `?${params.toString()}`;
    router.push(newPath);
  };

  return (
    <div className="p-2 sm:p-4 rounded-2xl bg-neutral-950 w-full max-w-[470px] mx-auto">
      <ul className="flex items-center justify-between gap-2">
        {tabList?.map((tab, index) => (
          <li
            className={cn(
              "py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-xs xs:text-sm sm:text-base font-medium cursor-pointer",
              activeTab === tab?.name ? "bg-neutral-900" : "bg-transparent"
            )}
            key={index}
            onClick={() => handleTabClick(tab?.name)}
          >
            {tab?.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tabs;
