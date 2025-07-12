import { genralNewsApi } from "@/util/normalize";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const API_KEY = process.env.NEXT_PUBLIC_GNEWS_KEY;
  const categoriesList = [
    "sports",
    "business",
    "technology",
    "entertainment",
    "science",
    "health",
  ];

  const trendUrl = `https://gnews.io/api/v4/top-headlines?q=trending&lang=en&apikey=${API_KEY}`;

  const promises = [
    fetch(trendUrl).then((res) => res.json()),
    ...categoriesList.map((cat) =>
      fetch(
        `https://gnews.io/api/v4/top-headlines?category=${cat}&lang=en&country=us&max=10&apikey=${API_KEY}`
      ).then((res) => res.json())
    ),
  ];

  try {
    const [trending, ...categories] = await Promise.all(promises);

    const result = {
      trending: (trending.articles || []).map(genralNewsApi),
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
