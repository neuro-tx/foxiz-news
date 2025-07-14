import React from "react";
import SectionTitle from "./SectionTitle";
import CardsContainer from "./CardsContainer";
import { getData } from "@/util/fetchData";
import { NewsDataProps } from "@/util/dataTypes";
import NewsCard from "./NewsCard";
import Image from "next/image";
import Link from "next/link";
import { Clock3 } from "lucide-react";

const SportSection = async () => {
  const data = await getData("api/variant");
  const res = await data;
  const sports = res[2].articles;

  return (
    <div>
      <SectionTitle title="sports" link="/sports" />
      <div className="my-6 w-full text-center border-b border-white-100 dark:border-b-dark-300 pb-4">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-dark-200 md:text-5xl lg:text-6xl font-roboto dark:text-white-100">
            Fuel{" "}
            <span className="bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">
              — Your Passion —
            </span>{" "}
            for the Game
          </h1>
          <p className="text-lg font-PTsans font-normal text-gray-500 dark:text-gray-400">
            Catch all the action with real-time updates, match highlights, and
            behind-the-scenes stories from your favorite teams and athletes.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2">
        <div className="w-full mt-6 md:mt-0 grid">
          {sports.slice(1, 4).map((item: NewsDataProps, index: number) => (
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
                    {item.publishedAt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          href={sports[0].url}
          target="_blank"
          className="w-full md:pr-3 md:border-r border-r-white-100 dark:border-r-dark-300 h-full"
        >
          <div className="w-full relative max-h-[370px] md:max-h-[450px] h-full">
            <Image
              src={sports[0].image}
              alt="Main Article Image"
              width={200}
              height={200}
              className="rounded-lg w-full object-cover h-full aspect-square"
            />

            <div className="mt-2 text-base font-medium absolute bottom-0 left-0 rounded-b-md px-2 py-1 bg-gradient-to-t from-black/80 to-transparent text-white w-full line-clamp-2">
              {sports[0].title}
            </div>
          </div>
        </Link>
      </div>

      <div className="my-6 space-y-1.5">
        {sports.slice(4 ,6).map((item: NewsDataProps, index: number) => (
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
                <div className="my-1">
                  <span className="px-3 py-1 bg-white text-dark dark:bg-dark-200 dark:text-white font-thin text-xs">
                    {item.source || "Unknown"}
                  </span>
                </div>
                <div className="flex-center gap-2 mt-2">
                  <Clock3
                    size={18}
                    className="text-slate-500 dark:text-white-100"
                  />
                  <span className="text-sm text-slate-500 dark:text-slate-300">
                    {item.publishedAt}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="my-6">
        <CardsContainer>
          {sports.slice(6, 10).map((item: NewsDataProps) => (
            <NewsCard
              key={item.url}
              title={item.title}
              description={item.description}
              image={item.image}
              url={item.url}
              source={item.source}
              author={item.author}
              publishedAt={item.publishedAt}
            />
          ))}
        </CardsContainer>
      </div>
    </div>
  );
};

export default SportSection;

{
  /* <div className="my-6">
        <div className="grid md:grid-cols-2 gap-3">
          {sports.slice(0, 2).map((item: NewsDataProps) => (
            <NewsCard
              key={item.url}
              title={item.title}
              description={item.description}
              image={item.image}
              url={item.url}
              source={item.source}
              author={item.author}
              publishedAt={item.publishedAt}
            />
          ))}
        </div>
      </div> */
}
