"use client";
import React, { useState } from "react";
import { links } from "@/constant/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

interface NavLink {
  link: string;
  href: string;
}

const Navbar = () => {
  const path = usePathname();
  const [isopen, setIsopen] = useState(false);
  const toggleMenu = () => {
    setIsopen((prev) => !prev);
  };
  return (
    <header className="w-full relative bg-white">
      <div className="mx-auto container px-6 h-15 flex-between">
        <Link href={"/"} className="flex-center gap-0">
          <img src="./icons/logo.svg" alt="logo" width={35} />
          <p className="font-bold text-lg text-black">
            <span className="text-blue-70">Nova</span>-News
          </p>
        </Link>

        <nav className="hidden sm:inline-flex">
          <ul className="flex-center gap-1.5">
            {links.map((link: NavLink, index: number) => (
              <li className="capitalize transition-1" key={index}>
                <Link
                  href={link.href}
                  className={`transition-1 font-semibold font-roboto p-2 relative ${
                    path === link.href
                      ? "text-blue-70 before:w-full before:absolute before:h-px before:bg-blue-70 before:bottom-0 before:left-0 hover:text-blue-800"
                      : "hover:text-slate-500"
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
            className="border border-white-50 rounded-sm size-7 text-dark-300 place-center cursor-pointer"
            onClick={toggleMenu}
          >
            <Menu size={20} />
          </button>
        </div>

        <div
          className={`absolute scale-0 opacity-70 left-0 w-full p-5 sm:hidden bg-white transition-2 ${
            isopen
              ? "top-15 opacity-100 scale-100 z-10 pointer-events-auto shadow-400"
              : "top-14 -z-10 pointer-events-none"
          }`}
        >
          <ul className="grid gap-1.5">
            {links.map((link: NavLink, index: number) => (
              <li className="capitalize transition-1 py-1 w-full" key={index}>
                <Link
                  href={link.href}
                  className={`transition-1 font-semibold font-roboto p-2 relative block w-full ${
                    path === link.href ? "text-blue-70" : "hover:text-slate-500"
                  } hover:bg-blue-50`}
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
