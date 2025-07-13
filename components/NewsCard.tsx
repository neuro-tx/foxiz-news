"use client";
import { useSettings } from "@/context/SettingsProvider";
import { Clock3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NewsDataProps } from "@/util/dataTypes";

const NewsCard = ({
  title,
  description,
  image,
  url,
  source,
  publishedAt,
}: NewsDataProps) => {
  const { color, layout } = useSettings();
  return (
    <div
      className={`${
        layout === "grid"
          ? ""
          : "flex-center gap-3 md:gap-6 odd:flex-row-reverse lg:odd:flex-row"
      } w-full rounded-md p-2 border border-white-100 dark:border-dark-300 transition-2 shadow-100 overflow-hidden`}
    >
      <div
        className={`${
          layout === "grid" ? "h-44 w-full" : "relative w-1/2 md:w-3xs h-48"
        } aspect-square`}
      >
        <Image
          src={image}
          alt={`${source}`}
          width={200}
          height={200}
          className="w-full h-full aspect-square object-cover rounded-md"
        />
      </div>
      <div className={`${layout === "grid" ? "mt-2" : ""}`}>
        <Link
          href={url}
          target="_blink"
          className="text-base font-semibold font-roboto line-clamp-2 hover:text-blue-70"
        >
          {title}
        </Link>
        <Link
          href={url}
          target="_blink"
          className="my-1 text-sm line-clamp-3 text-slate-500 dark:text-white-100 hover:underline"
        >
          {description}
        </Link>
        <div className="flex-between items-center mt-2 border-t border-white-100 dark:border-dark-300 pt-1">
          <div
            className="flex-center font-medium text-slate-500 gap-1.5 hover:underline transition-1 w-fit"
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
          {source && (
            <div className="flex-center gap-1 text-xs font-semibold bg-white-100 dark:bg-dark-100 w-fit px-2 py-1 line-clamp-1">
              <span
                className="text-orange-400 w-fit"
                style={{ color: `${color}` }}
              >
                {source}{" "}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
