import { genralNewsApi } from "@/util/normalize";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWSAPI_KEY;

  if (!NEWS_API_KEY) {
    console.error("GNEWS API KEY is missing!");
  }

  const topStories = `https://newsapi.org/v2/top-headlines?country=us&pageSize=15&apiKey=${NEWS_API_KEY}`;

  try {
    const data = await fetch(topStories).then((res) => res.json())
    const result = await (data.articles || []).map(genralNewsApi)

    return Response.json(result);
  } catch (err) {
    console.error("News API Error:", err);
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
