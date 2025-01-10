"use client";
import useScroll from "@/hooks/useScroll";
import { cn } from "@/lib/utils";
import { Call, Logo, LogoText, Menu, routes } from "@/services";
import useNavigations from "@/services/animations/useNavigations";
import Link from "next/link";

function Navbar() {
  useNavigations();
  const { scrolled } = useScroll();
  return (
    <header className="container3x py-4 lg:py-6 sticky top-0 z-[99]">
      <nav className="flex items-center justify-between">
        <div className="logo">
          <Link
            href={routes.home}
            className={cn(
              "flex items-center gap-2 duration-500",
              scrolled
                ? "opacity-0 pointer-events-none scale-95"
                : "opacity-100 scale-100"
            )}
          >
            <Logo className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 duration-200" />
            <LogoText className="w-24 sm:w-28 lg:w-40 duration-200 md:hidden lg:block" />
          </Link>
        </div>
        <div className="hidden md:block">
          <div
            className={cn(
              "px-6 lg:px-6 py-4 rounded-full border duration-500",
              scrolled
                ? "border-text-50 shadow-nav backdrop-blur-md bg-black-rgb40"
                : "border-transparent"
            )}
          >
            <ul
              className={cn(
                "flex items-center gap-6 lg:gap-8 duration-500 text-white navMenu overflow-hidden"
              )}
            >
              <li>
                <Link
                  className="hover:text-lime-400 duration-300"
                  href={routes.services}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-lime-400 duration-300"
                  href={routes.works}
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-lime-400 duration-300"
                  href={routes.aboutUs}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-lime-400 duration-300"
                  href={routes.blogs}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-lime-400 duration-300"
                  href={routes.contact}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={cn(
            "hidden md:flex items-center gap-2 duration-500",
            scrolled
              ? "opacity-0 pointer-events-none scale-95"
              : "opacity-100 scale-100"
          )}
        >
          <button className="border-none outline-none flex items-stretch group text-sm lg:text-base relative navBtn">
            <span className="flex-center py-4 px-6 rounded-full text-text-950 font-semibold bg-lime-400 relative z-10">
              Schedule a Call
            </span>
            <span className="flex-center p-4 rounded-full bg-lime-400 -translate-x-16 scale-75 group-hover:scale-100 group-hover:-translate-x-2 duration-500 z-0">
              <Call />
            </span>
          </button>
        </div>
        <button
          type="button"
          className={cn(
            "w-10 h-10 shrink-0 rounded-full bg-black-800 flex items-center justify-center md:hidden navBtn",
            scrolled
              ? "opacity-0 pointer-events-none scale-95"
              : "opacity-100 scale-100"
          )}
        >
          <Menu />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
