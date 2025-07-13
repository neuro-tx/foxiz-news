"use client";
import { categoriesList, cn } from "@/util";
import { LayoutTemplate } from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useSettings } from "@/context/SettingsProvider";

const CaregoriesNav = () => {
  const { color } = useSettings();
  const currentPath = usePathname();
  const isCurrent = (current: string): boolean => {
    if (currentPath.includes(`/${current}`)) {
      return true;
    }
    return false;
  };
  return (
    <div className="main-container">
      <div className="flex gap-2 mt-5">
        <span className="size-9 aspect-square text-lg flex-center justify-center rounded-full bg-white-100 dark:bg-dark-100 transition-1">
          <LayoutTemplate size={19} className="text-red-70" />
        </span>
        <div className="flex-center flex-wrap relative gap-2">
          {categoriesList.map((cat: string) => (
            <Link
              key={cat}
              href={`/category/${cat.toLowerCase()}`}
              className={cn(
                "cat-link transition-1",
                isCurrent(cat) && "bg-blue-70 !text-white"
              )}
              style={{
                background: isCurrent(cat) ? color : undefined
              }}
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaregoriesNav;
