import { categoriesList } from "@/util";
import { genralNewsApi } from "@/util/normalize";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const API_KEY = process.env.GNEWS_KEY;
  const NEWS_API_KEY = process.env.NEWSAPI_KEY;

  if (!API_KEY || !NEWS_API_KEY) {
    console.error("GNEWS API KEY is missing!");
  }

  const topStories = `https://newsapi.org/v2/top-headlines?country=us&pageSize=15&apiKey=${NEWS_API_KEY}`;

  const categoryFetches = categoriesList.map((cat) =>
    fetch(
      `https://gnews.io/api/v4/top-headlines?category=${cat}&lang=en&country=us&max=10&apikey=${API_KEY}`
    ).then((res) => res.json())
  );

  const promises = [
    fetch(topStories).then((res) => res.json()),
    ...categoryFetches,
  ];

  try {
    const [topStories, ...categories] = await Promise.all(promises);

    const result = {
      topStories: (topStories.articles || []).map(genralNewsApi),
      categories: categoriesList.map((category, i) => ({
        category,
        articles: (categories[i]?.articles || []).map(genralNewsApi),
      })),
    };

    return Response.json(result);
  } catch (err) {
    console.error("News API Error:", err);
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
