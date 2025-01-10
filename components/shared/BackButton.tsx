"use client";
import { ArrowBack } from "@/services";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      className="w-6 sm:w-8 aspect-square flex items-center justify-center bg-black-800 rounded-full md:hidden"
      onClick={() => router.back()}
    >
      <ArrowBack />
    </button>
  );
}

export default BackButton;
