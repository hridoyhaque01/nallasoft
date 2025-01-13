"use client";
import useScroll from "@/hooks/useScroll";
import { cn } from "@/lib/utils";
import { Call, Logo, LogoText, Menu, routes } from "@/services";
import useNavigations from "@/services/animations/useNavigations";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const { scrolled } = useScroll();
  const [showMenu, setShowMenu] = useState(false);
  useNavigations();
  return (
    <header className="container3x py-4 lg:py-6 sticky top-0 z-[99]">
      <nav className="flex items-center justify-between">
        <div className="logo relative z-[999]">
          <Link
            href={routes.home}
            className={cn(
              "flex items-center gap-2 duration-500",
              scrolled
                ? "md:opacity-0 md:pointer-events-none md:scale-95"
                : "opacity-100 scale-100"
            )}
          >
            <Logo className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 duration-200" />
            <LogoText className="w-24 sm:w-28 lg:w-40 duration-200 md:hidden lg:block" />
          </Link>
        </div>
        <div
          className={cn(
            "fixed md:rounded-full top-0 left-0 right-0 bottom-0 bg-black-rgb40 backdrop-blur-md md:bg-transparent md:relative md:block duration-500",
            showMenu
              ? "opacity-100 visible pointer-events-auto"
              : "-translate-x-full md:translate-x-0 opacity-0 invisible pointer-events-none md:opacity-100 md:visible md:pointer-events-auto"
          )}
        >
          <div
            className={cn(
              "px-6 lg:px-6 py-4 rounded-full border duration-500",
              scrolled
                ? "border-transparent md:border-text-50 md:shadow-nav md:backdrop-blur-md md:bg-black-rgb40"
                : "border-transparent"
            )}
          >
            <ul
              className={cn(
                "flex flex-col md:flex-row pt-20 md:pt-0 items-center gap-6 lg:gap-8 duration-500 text-white navMenu overflow-hidden"
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
          <button
            type="button"
            className={cn(
              "w-10 h-10 shrink-0 rounded-full flex items-center justify-center md:hidden border border-neutral-200 absolute bottom-10 left-1/2 -translate-x-1/2",
              showMenu ? "md:hidden" : "hidden"
            )}
            onClick={() => setShowMenu(false)}
          >
            <X />
          </button>
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
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <X className="w-6 h-6 text-lime-400" /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
