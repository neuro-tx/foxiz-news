"use client";
import React from "react";
import Link from "next/link";
import { useSettings } from "@/context/SettingsProvider";

const Navbar = () => {
  const { theme, color } = useSettings();

  return (
    <header className="w-full backdrop-blur-lg border-b border-b-white-100 dark:border-b-dark-300 bg-white dark:bg-dark-100 transition-1 relative z-[100]">
      <div className="shadow-400 w-full">
        <div className="flex-between py-3 main-container">
          <Link href={"/"} className="flex-center gap-0">
            <img
              src={
                theme === "dark" ? "/icons/logo-light.svg" : "/icons/logo.svg"
              }
              alt="logo"
              width={100}
            />
          </Link>

          <Link
            href="/latest-news"
            className="px-3 md:px-6 py-2 capitalize rounded-sm transition-1 font-roboto text-white bg-dark dark:bg-dark-300 hover:underline active:text-blue-70"
            style={{ background: `${color}` }}
          >
            get latest news
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
