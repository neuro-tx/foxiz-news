import CardsContainer from "@/components/CardsContainer";
import NewsCard from "@/components/NewsCard";
import Section from "@/components/Section";
import { NewsDataProps } from "@/util/dataTypes";
import { getData } from "@/util/fetchData";
import { Rss } from "lucide-react";
import React from "react";

const page = async () => {
  const res = await getData("api/latest");
  const latest = await res;

  if (!latest || latest.length === 0) {
    return (
      <div className="text-center my-10 text-slate-500 dark:text-white-100">
        <h2 className="text-2xl font-semibold">Latest News</h2>
        <p className="text-sm mt-2">
          No news available at the moment. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="main-container min-h-dvh">
      <div className="w-full mt-5">
        <Section
          title="Latest News"
          caption="Stay updated with the most recent headlines from around the world. Curated in real-time to keep you informed."
          Icon={Rss}
          clsname="text-red-70"
        >
          <CardsContainer>
            {latest.map((item: NewsDataProps) => (
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
        </Section>
      </div>
    </div>
  );
};

export default page;
