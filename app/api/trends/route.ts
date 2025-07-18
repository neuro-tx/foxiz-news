import { genralNewsApi } from "@/util/normalize";
import { NextRequest } from "next/server";

export async function GET(_req: NextRequest) {
  const API_KEY = process.env.NEXT_PUBLIC_GNEWS_KEY;

  if (!API_KEY) {
    console.error("GNEWS API KEY is missing!");
  }

  const trendUrl = `https://gnews.io/api/v4/top-headlines?q=trending&lang=en&apikey=${API_KEY}`;

  try {
    const trending = await fetch(trendUrl);
    const data = await trending.json();
    const result = (data.articles || []).map(genralNewsApi);

    return Response.json(result);
  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
