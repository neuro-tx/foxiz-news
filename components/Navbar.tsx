"use client";
import React, { useState } from "react";
import { links } from "@/constant/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useSettings } from "@/context/SettingsProvider";

interface NavLink {
  link: string;
  href: string;
}

const Navbar = () => {
  const { theme } = useSettings();
  const path = usePathname();
  const [isopen, setIsopen] = useState(false);
  const toggleMenu = () => {
    setIsopen((prev) => !prev);
  };

  return (
    <header className="w-full relative backdrop-blur-lg border-b border-b-white-100 dark:border-b-dark-300 bg-white dark:bg-dark-100 z-30">
      <div className="main-container h-15 flex-between">
        <Link href={"/"} className="flex-center gap-0">
          <img 
            src={theme === "dark" ? "/icons/logo-light.svg" : "/icons/logo.svg"}
            alt="logo"
            width={100}
          />
        </Link>

        <nav className="hidden sm:inline-flex">
          <ul className="flex-center gap-1.5">
            {links.map((link: NavLink, index: number) => (
              <li className="capitalize transition-1" key={index}>
                <Link
                  href={link.href}
                  className={`transition-1 font-semibold font-roboto p-2 relative text-dark-300 dark:text-white-50 ${
                    path === link.href
                      ? "!text-blue-70 before:w-full before:absolute before:h-px before:bg-blue-70 before:bottom-0 before:left-0 hover:text-blue-800"
                      : "hover:text-slate-500 dark:hover:text-slate-300"
                  }`}
                >
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sm:hidden">
          <button
            className="border border-white-100 dark:border-dark-300 rounded-sm size-7 text-dark-300 dark:text-white-100 place-center cursor-pointer"
            onClick={toggleMenu}
          >
            <Menu size={20} />
          </button>
        </div>

        <div
          className={`absolute scale-0 opacity-70 left-0 w-full p-5 sm:hidden bg-white dark:bg-dark-100 transition-2 z-30 ${
            isopen
              ? "top-15 opacity-100 scale-100 z-30 pointer-events-auto shadow-400"
              : "top-14 pointer-events-none"
          }`}
        >
          <ul className="grid gap-1.5">
            {links.map((link: NavLink, index: number) => (
              <li className="capitalize transition-1 py-1 w-full" key={index}>
                <Link
                  href={link.href}
                  className={`transition-1 font-semibold font-roboto p-2 relative block w-full ${
                    path === link.href ? "text-blue-70" : "hover:text-slate-500 dark:hover:text-slate-300"
                  } hover:bg-blue-50 dark:hover:bg-dark-300`}
                  onClick={() => setIsopen(false)}
                >
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
