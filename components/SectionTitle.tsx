"use client"
import { useSettings } from "@/context/SettingsProvider";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const SectionTitle = ({ title ,link }: { title: string ,link : string }) => {
  const { color } = useSettings();
  return (
    <div
      className="border-b-3 p-2 border-white-100 dark:border-dark-300"
      style={{ borderColor: color }}
    >
      <div className="flex-between">
        <h2
          className="capitalize font-bold text-xl md:text-2xl text-dark-300 dark:text-white-100 font-roboto"
          style={{ color: color }}
        >
          {title}
        </h2>
        <Link
          href={`/category/${link}`}
          className="flex-center gap-1 capitalize text-sm transition-1 hover:text-pink-500 active:underline"
        >
          <span>see all</span>
          <ArrowUpRight size={19} />
        </Link>
      </div>
    </div>
  );
};

export default SectionTitle;
