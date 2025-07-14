import React from "react";
import { Metadata } from "next";
import { getData } from "@/util/fetchData";
import CardsContainer from "@/components/CardsContainer";
import { NewsDataProps } from "@/util/dataTypes";
import NewsCard from "@/components/NewsCard";
import { categoriesList } from "@/util";
import { notFound } from "next/navigation";

interface categoryProps {
  params: {
    category: string;
  };
}

export const revalidate = 3600;

export async function generateStaticParams() {
  return categoriesList.map((category) => ({
    category,
  }));
}

export async function generateMetadata(
  { params }: categoryProps
): Promise<Metadata> {
  const { category } = params;

  return {
    title: `${category} News | Foxiz`,
    description: `Catch the latest and trending ${category} stories on Foxiz.`,
    openGraph: {
      title: `${category} News | Foxiz`,
      description: `Stay updated with breaking ${category} headlines, analysis, and insights.`,
    },
  };
}

export default async function CategoryPage({ params }: categoryProps) {
  const { category } = await params;
  if (!categoriesList.includes(category)) return notFound();

  const data = getData(`api/news/${category}`);
  const articles = await data;

  if (!articles || articles.length === 0) {
    return (
      <div className="text-center my-10 text-slate-500 dark:text-white-100">
        <h2 className="text-2xl font-semibold">{category} News</h2>
        <p className="text-sm mt-2">
          No news available at the moment. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="main-container min-h-dvh">
      <div className="my-6 w-full text-center border-b border-white-100 dark:border-b-dark-300 pb-4">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-dark-200 md:text-5xl lg:text-6xl font-roboto dark:text-white-100">
            Enjoy with{" "}
            <span className="bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">
              — {category} —
            </span>{" "}
            latest news
          </h1>
        </div>
      </div>

      <div className="my-7">
        <CardsContainer>
          {articles.map((item: NewsDataProps) => (
            <NewsCard
              key={item.url}
              title={item.title}
              description={item.description}
              publishedAt={item.publishedAt}
              image={item.image}
              url={item.url}
              source={item.source}
            />
          ))}
        </CardsContainer>
      </div>
    </div>
  );
}
