import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NewsDataProps } from "@/util/dataTypes";
import { formatDate } from "@/util";
import { getData } from "@/util/fetchData";

const TopStories = async () => {
  const res = await getData("api/news");
  const stroies = await res;

  if (!stroies || stroies.length === 0) {
    return (
      <div className="text-center my-10 text-slate-500 dark:text-white-100">
        <h2 className="text-2xl font-semibold">Top Stories News</h2>
        <p className="text-sm mt-2">
          No news available at the moment. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <section className="w-full my-6 h-full border-t border-white-100 dark:border-dark-300">
      <div className="my-6 w-full text-center border-b border-white-100 dark:border-b-dark-300 pb-4">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-dark-200 md:text-5xl lg:text-6xl font-roboto dark:text-white-100">
            Stay Ahead{" "}
            <span className="bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">
              — with the Stories
            </span>{" "}
            Everyone's Talking About
          </h1>
          <p className="text-lg font-PTsans font-normal text-gray-500 dark:text-gray-400">
            Catch the pulse of the world — real-time trending news, handpicked
            to keep you informed and in the know.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-6">
        <div className="md:grid-cols-2 lg:col-span-4 grid lg:grid-cols-5">
          <div className="p-2 md:grid-cols-1 lg:col-span-2 grid">
            {stroies.slice(3, 8).map((item: NewsDataProps) => (
              <div
                key={item.url}
                className="w-full py-2 not-last:border-b border-white-100 dark:border-dark-300"
              >
                <Link
                  href={item.url}
                  className="font-PTsans text-lg line-clamp-1 font-semibold transition-1 hover:underline hover:text-orange-500"
                >
                  {item.title}
                </Link>
                <div className="flex-center gap-2 mt-1">
                  <span className="font-semibold text-base text-orange-500">
                    Published At:{" "}
                  </span>
                  <span className="text-sm">
                    {formatDate(item.publishedAt)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-2 md:grid-cols-1 lg:col-span-3">
            <div className="w-full max-h-96 md:max-h-[600px] h-full relative">
              <Image
                src={stroies[0].image}
                alt="image"
                width={300}
                height={300}
                className="w-full h-full aspect-square rounded-sm object-cover"
              />
              <Link href={stroies[0].url} className="absolute bottom-2 left-2">
                {stroies[0].cateogory && (
                  <p className="px-4 py-1 rounded-sm text-white bg-orange-400 uppercase font-semibold text-sm w-fit">
                    {stroies[0].cateogory}
                  </p>
                )}
                <p className="text-2xl md:text-4xl font-bold hover:text-white-50 text-white font-PTsans">
                  {stroies[0].title}
                </p>
                <p className="line-clamp-3 hover:underline text-base text-white">
                  {stroies[0].description}
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 grid md:grid-cols-2 lg:grid-cols-1">
          <div className="grid gap-1.5">
            {stroies.slice(1, 3).map((item: NewsDataProps) => (
              <div key={item.url} className="px-3 py-2 transition-1 group">
                <div className="h-40 w-full">
                  <Image
                    src={item.image}
                    alt={`${item.source}`}
                    width={100}
                    height={100}
                    className="w-full h-full aspect-square object-cover"
                  />
                </div>
                <div className="mt-2">
                  {item.cateogory && (
                    <p className="font-roboto font-semibold text-sm uppercase">
                      {item.cateogory}
                    </p>
                  )}
                  <Link
                    href={item.url}
                    className="line-clamp-3 font-PTsans group-hover:underline group-hover:text-orange-400"
                  >
                    {item.description}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:hidden">
            <div>
              {stroies.slice(9, 13).map((item: NewsDataProps) => (
                <div
                  key={item.url}
                  className="px-3 py-2 transition-1 group flex items-start gap-2"
                >
                  <div className="max-w-24 md:max-w-28 w-full h-24 md:h-28 aspect-square">
                    <Image
                      src={item.image}
                      alt={`${item.source}`}
                      width={100}
                      height={100}
                      className="w-full h-full aspect-square object-cover"
                    />
                  </div>
                  <div className="">
                    <p className="text-lg line-clamp-1">{item.title}</p>
                    <Link
                      href={item.url}
                      className="line-clamp-2 font-PTsans text-sm group-hover:underline group-hover:text-orange-400"
                    >
                      {item.description}
                    </Link>
                    {item.cateogory && (
                      <p className="font-roboto font-semibold text-xs px-2 py-1 bg-orange-500 text-white w-fit uppercase">
                        {item.cateogory}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopStories;
