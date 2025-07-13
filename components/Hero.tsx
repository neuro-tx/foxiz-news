import { formatDate } from "@/util";
import { Clock3, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Section from "./Section";
import { NewsDataProps } from "@/util/dataTypes";
import { getData } from "@/util/fetchData";

const Hero = async () => {
  const res = await getData("api/trends");
  const trendings = await res;

  if (!trendings || trendings.length === 0) {
    return (
      <div className="text-center my-10 text-slate-500 dark:text-white-100">
        <h2 className="text-2xl font-semibold">Trending News</h2>
        <p className="text-sm mt-2">
          No news available at the moment. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full my-6 h-full">
      <Section
        title="Trending News"
        caption="Catch the top headlines and stories people are talking about today."
        Icon={TrendingUp}
        clsname="text-blue-70"
      >
        <div className="grid md:grid-cols-2">
          <Link
            href={trendings[0].url}
            target="_blank"
            className="w-full md:pr-3 md:border-r border-r-white-100 dark:border-r-dark-300 h-full"
          >
            <div className="w-full relative max-h-[370px] md:max-h-[450px] h-full">
              <div className="glass-effict flex-center gap-1.5 absolute top-2 left-2 z-10 px-2 py-1 text-xs bg-black/60 text-white rounded">
                <Clock3 size={14} />
                <span>{formatDate(trendings[0].publishedAt)}</span>
              </div>

              <Image
                src={trendings[0].image}
                alt="Main Article Image"
                width={200}
                height={200}
                className="rounded-lg w-full object-cover h-full"
              />

              <div className="mt-2 text-base font-medium absolute bottom-0 left-0 rounded-b-md px-2 py-1 bg-gradient-to-t from-black/80 to-transparent text-white w-full line-clamp-2">
                {trendings[0].title}
              </div>
            </div>
          </Link>

          <div className="w-full mt-6 md:mt-0 grid items-baseline">
            {trendings.slice(1, 4).map((item: NewsDataProps, index: number) => (
              <div
                key={index}
                className="flex-center group not-last:border-b not-last:border-white-100 dark:not-last:border-dark-300 transition-1 py-2 md:px-3"
              >
                <Link
                  href={item.url}
                  target="_blank"
                  className="relative aspect-square max-w-28 md:max-w-32 w-full h-28 md:h-32"
                >
                  <Image
                    src={item.image}
                    alt="Thumbnail"
                    width={280}
                    height={200}
                    className="rounded-lg aspect-square object-cover w-full h-full"
                  />
                </Link>

                <div className="ml-3">
                  <div className="my-1">
                    <span className="px-3 py-1 bg-white text-dark dark:bg-dark-200 dark:text-white font-thin text-xs">
                      {item.source || "Unknown"}
                    </span>
                  </div>
                  <Link
                    href={item.url}
                    target="_blank"
                    className="font-semibold text-dark-300 transition-1 line-clamp-1 dark:text-white-100 group-hover:underline group-hover:text-blue-70"
                  >
                    {item.title}
                  </Link>
                  <p className="font-medium line-clamp-2 text-slate-500 text-sm dark:text-white-100 group-hover:underline transition-1">
                    {item.description}
                  </p>
                  <div className="flex-center gap-2 mt-2">
                    <Clock3
                      size={18}
                      className="text-slate-500 dark:text-white-100"
                    />
                    <span className="text-sm text-slate-500 dark:text-slate-300">
                      {formatDate(item.publishedAt)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-5 w-full border-t border-white-100 pt-3 dark:border-dark-300">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {trendings
              .slice(4, 10)
              .map((item: NewsDataProps, index: number) => (
                <Link
                  href={item.url}
                  target="_blank"
                  key={index}
                  className="flex-center transition-1 p-2 w-full border border-white-100 dark:border-dark-300 group hover:bg-white dark:hover:bg-dark-100 rounded-sm "
                >
                  <div className="ml-3">
                    <p className="font-semibold text-dark-300 line-clamp-1 dark:text-white-100 group-hover:underline">
                      {item.title}
                    </p>
                    <p className="font-medium line-clamp-2 text-slate-500 text-sm dark:text-white-100 group-hover:underline group-hover:text-pink-500 mt-1">
                      {item.description}
                    </p>
                    <div className="flex-center gap-2 mt-2">
                      <Clock3
                        size={18}
                        className="text-slate-500 dark:text-white-100"
                      />
                      <p className="text-sm">{formatDate(item.publishedAt)}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
