import React from "react";
import SectionTitle from "./SectionTitle";
import { getData } from "@/util/fetchData";
import { NewsDataProps } from "@/util/dataTypes";
import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

const TechSection = async () => {
  const data = await getData("api/variant");
  const res = await data;
  const techs = res[1].articles;

  return (
    <div className="my-6">
      <SectionTitle title="technology" link="technology" />
      <div className="my-3">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {techs.slice(0, 4).map((item: NewsDataProps) => (
            <div key={item.url} className="p-2">
              <div className="h-36 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.source}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover aspect-square hover:scale-105 transition-2"
                />
              </div>
              <div className="mt-1">
                <Link
                  href={item.url}
                  className="line-clamp-2 font-PTsans text-base hover:underline hover:text-orange-400 transition-1"
                >
                  {item.title}
                </Link>
                <div className="flex-between gap-2 mt-1.5 border-t border-white-100 dark:border-dark-300 pt-1">
                  {item.author && (
                    <div className="flex-center gap-1.5 text-dark-300 dark:text-white-100">
                      <User size={17} />
                      {item.author}
                    </div>
                  )}
                  <span className="text-xs">
                    {`${item.publishedAt}`.split(" ")[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 border-t border-white-100 dark:border-dark-300">
          <div className="py-5 grid md:grid-cols-2 lg:grid-cols-3">
            {techs.slice(4, 10).map((item: NewsDataProps) => (
              <Link
                href={item.url}
                key={item.url}
                className="px-3 py-1.5 transition-1"
              >
                <div className="flex gap-2.5">
                  <div className="aspect-square max-w-24 md:max-w-32 w-full h-20 md:h-24">
                    <Image
                      src={item.image}
                      alt={`${item.source}`}
                      width={100}
                      height={100}
                      className="w-full h-full aspect-square object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-PTsans line-clamp-2 hover:underline">
                      {item.title}
                    </p>
                    <p className="text-sm px-3 py-1 mt-1.5 bg-white-100 dark:bg-dark-100 w-fit">
                      - {item.source}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSection;
