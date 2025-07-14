import { NewsDataProps } from "@/util/dataTypes";
import { getData } from "@/util/fetchData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CardsContainer from "./CardsContainer";
import NewsCard from "./NewsCard";

const Entertainment = async () => {
  const data = await getData("api/variant");
  const res = await data;
  const artics = res[0].articles;

  return (
    <div className="my-10">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-dark-200 md:text-5xl lg:text-6xl font-roboto dark:text-white-100">
          Escape {" "}
          <span className="bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">
            — the Ordinary — 
          </span>{" "}
          with the Latest in Entertainment
        </h1>
        <p className="text-lg font-PTsans font-normal text-gray-500 dark:text-gray-400">
          Get exclusive updates, behind-the-scenes scoops, and the latest buzz
          across film, TV, music, and celebrity culture.
        </p>
      </div>

      <div className="mt-5">
        <div className="grid lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2">
              {artics.slice(1, 5).map((item: NewsDataProps) => (
                <div className="p-2" key={item.url}>
                  <div className="h-40 w-full">
                    <Image
                      src={item.image}
                      alt={`${item.source}`}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full aspect-square"
                    />
                  </div>
                  <div className="mt-1 transition-1">
                    <Link href={item.url} className="line-clamp-2 font-PTsans hover:underline hover:text-orange-400">
                        {item.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <Link href={artics[0].url}>
              <div className="w-full relative h-72 md:h-[460px] p-2">
                <Image
                  src={artics[0].image}
                  alt={`${artics[0].title}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full aspect-square"
                />

                <div className="absolute bottom-3 left-2 transition-1 p-2">
                  <p className="text-xl font-semibold font-PTsans">
                    <span className="bg-orange-400 text-lg text-white p-1 mr-1.5">
                      {artics[0].source}
                    </span>
                    <span className="underline hover:text-blue-70">
                      {artics[0].title}
                    </span>
                  </p>
                  <p className="line-clamp-3 text-sm mt-2 hover:underline hover:text-blue-400">
                    {artics[0].description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="my-5 border-t border-white-100 dark:border-dark-300 py-5">
              <CardsContainer>
                {artics.slice(6 ,10).map((item : NewsDataProps) => (
                    <NewsCard 
                      key={item.url}
                      image={item.image}
                      title={item.title}
                      description={item.description}
                      author={item.author}
                      publishedAt={item.publishedAt}
                      url={item.url}
                    />
                ))}
              </CardsContainer>
      </div>
    </div>
  );
};

export default Entertainment;
