"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

function ProgressToast() {
  const [showToast, setShowToast] = useState(false);

  const handleToast = () => {
    setShowToast(false);
    localStorage.setItem("progressToast", "true");
  };

  useEffect(() => {
    const checkLocalStorage = localStorage.getItem("progressToast");
    const timeOut = setTimeout(() => {
      if (!checkLocalStorage) {
        setShowToast(true);
      }
      console.log("show toast", checkLocalStorage);
    }, 5000);
    return () => clearTimeout(timeOut);
  }, []);
  return (
    <div
      className={cn(
        "flex items-center text-center py-4 px-6 rounded-full fixed bottom-4 left-4 right-4 max-w-[400px] mx-auto bg-black-rgb40 backdrop-blur-md border border-white/60 text-white shadow-lg  z-50 duration-300",
        showToast
          ? "opacity-100 visible translate-y-0 scale-100"
          : "opacity-0 invisible translate-y-8 scale-90"
      )}
    >
      <span className="text-base font-medium font-sf-sans flex-1">
        Work In Progress
      </span>
      <button
        type="button"
        className="border-none outline-none"
        onClick={handleToast}
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}

export default ProgressToast;
