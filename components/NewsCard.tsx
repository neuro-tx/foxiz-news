"use client";
import { useSettings } from "@/context/SettingsProvider";
import { Clock3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NewscardProps {
  title: string;
  description: string;
  image: string;
  publishedAt?: number;
}

const NewsCard = ({
  title,
  description,
  image,
  publishedAt,
}: NewscardProps) => {
  const { color, layout } = useSettings();
  return (
    <div
      className={`${
        layout === "grid" ? "" : "flex-center gap-3 md:gap-6"
      } w-full rounded-md p-2 border border-white-100 dark:border-dark-300 transition-2 shadow-100`}
    >
      <div
        className={`${
          layout === "grid" ? "h-44 w-full" : "relative w-1/2 md:w-3xs h-48"
        } aspect-square`}
      >
        <img
          src={image}
          alt="news img"
          //   width={128}
          //   height={128}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="mt-2">
        <h2 className="text-base font-semibold font-roboto line-clamp-2">
          {title}
        </h2>
        <p className="my-1 text-sm line-clamp-3 text-slate-500 dark:text-white-100">
          {description}
        </p>
        <div
          className="mt-2 flex-center font-medium text-slate-500 gap-1.5 hover:underline transition-1 w-fit"
          style={{ color: `${color}` }}
        >
          <Clock3 size={17} />
          <p className="text-sm">
            {publishedAt &&
              new Date(publishedAt).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

{
  /* <div className="h-44 w-full">
            <Image
              src={image}
              alt="news img"
              width={128}
              height={128}
              className="w-full h-full object-cover aspect-square rounded-md"
            />
          </div>
          <div className="mt-2">
            <h2 className="text-base font-semibold font-roboto line-clamp-2">
              {title}
            </h2>
            <p className="my-1 text-sm line-clamp-3 text-slate-500 dark:text-white-100">
              {description}
            </p>
          </div>
          <div
            className="mt-2 flex-center font-medium text-slate-500 gap-1.5 hover:underline transition-1 w-fit"
            style={{ color: `${color}` }}
          >
            <Clock3 size={17} />
            <p className="text-sm">
              {publishedAt &&
                new Date(publishedAt).toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
            </p>
          </div> */
}
