import { formatDate } from "@/util";
import { Clock3, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = async () => {
  const API_KEY = process.env.NEXT_PUBLIC_GNEWS_KEY;

  async function getData() {
    try {
      const res = await fetch(
        `https://gnews.io/api/v4/top-headlines?q=trending&lang=en&apikey=${API_KEY}`,
        { next: { revalidate: 3500 } }
      );

      const data = await res.json();

      if (!data.articles || !Array.isArray(data.articles)) {
        console.error("GNews API returned invalid data:", data);
        return [];
      }

      return data.articles;
    } catch (error) {
      console.error("Error fetching GNews:", error);
      return [];
    }
  }

  const news = await getData();
  const mainArticle = news[0];

  if (!mainArticle) {
    return (
      <div className="text-center my-10 text-slate-500 dark:text-white-100">
        <h2 className="text-2xl font-semibold">Trending News</h2>
        <p className="text-sm mt-2">
          No news available at the moment. Please try again later.
        </p>
      </div>
    );
  }

  const getValidImage = (url?: string) =>
    url?.startsWith("http") ? url : "/fallback-image.jpg";

  return (
    <div className="w-full my-6 h-full">
      <div className="my-5 w-full">
        <h2 className="capitalize font-semibold text-dark-300 dark:text-white-100 text-2xl flex items-center gap-1.5">
          <TrendingUp className="text-blue-70" />
          <span>Trending News</span>
        </h2>
        <p className="text-sm mt-1 mx-1 text-slate-400 dark:text-slate-500">
          Catch the top headlines and stories people are talking about today.
        </p>
      </div>

      <div className="grid md:grid-cols-2">
        <Link
          href={mainArticle.url}
          target="_blank"
          className="w-full md:pr-3 md:border-r border-r-white-100 dark:border-r-dark-300 h-full"
        >
          <div className="w-full relative max-h-[320px] md:max-h-[450px] h-full">
            <div className="glass-effict flex-center gap-1.5 absolute top-2 left-2 z-10 px-2 py-1 text-xs bg-black/60 text-white rounded">
              <Clock3 size={14} />
              <span>{formatDate(mainArticle.publishedAt)}</span>
            </div>

            <Image
              src={getValidImage(mainArticle.image)}
              alt="Main Article Image"
              width={200}
              height={200}
              className="rounded-lg w-full object-cover h-full"
            />

            <div className="mt-2 text-base font-medium absolute bottom-0 left-0 rounded-b-md px-2 py-1 bg-gradient-to-t from-black/80 to-transparent text-white w-full line-clamp-2">
              {mainArticle.title}
            </div>
          </div>
        </Link>

        <div className="w-full mt-6 md:mt-0 grid items-baseline">
          {news.slice(1, 4).map((item, index) => (
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
                  src={getValidImage(item.image)}
                  alt="Thumbnail"
                  width={280}
                  height={200}
                  className="rounded-lg aspect-square object-cover w-full h-full"
                />
              </Link>

              <div className="ml-3">
                <div className="my-1">
                  <span className="px-3 py-1 bg-white text-dark dark:bg-dark-200 dark:text-white font-thin text-sm">
                    {item.source?.name || "Unknown"}
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
          {news.slice(4, 10).map((item, index) => (
            <Link
              href={item.url}
              target="_blank"
              key={index}
              className="flex-center transition-1 p-2 w-full border border-white-100 dark:border-dark-300 sm:last:col-span-2 lg:first:col-span-2 group hover:bg-white dark:hover:bg-dark-100 rounded-sm"
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
    </div>
  );
};

export default Hero;
