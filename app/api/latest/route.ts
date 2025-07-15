import { genralNewsApi } from "@/util/normalize";
import { NextRequest } from "next/server";

export async function GET(_req: NextRequest) {
  const NEWS_API_KEY = process.env.NEWSAPI_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=${NEWS_API_KEY}`;

  try {
    const latest = await fetch(url);
    const data = await latest.json();
    const result = (data.articles || []).map(genralNewsApi);

    return Response.json(result);
  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
