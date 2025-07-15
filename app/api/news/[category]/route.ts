import { genralNewsApi } from "@/util/normalize";
import { NextRequest } from "next/server";

export async function GET(_req: NextRequest, context: any) {
  const category = encodeURIComponent(context.params?.category || "");
  const API_KEY = process.env.NEXT_PUBLIC_NEWSAPI_KEY;

  if (!API_KEY) {
    return Response.json({ error: "Missing API key." }, { status: 500 });
  }

  if (!category) {
    return Response.json({ error: "Category is required." }, { status: 400 });
  }

  const url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.status !== "ok") {
      return Response.json(
        { error: data.message || "Failed to fetch news." },
        { status: 400 }
      );
    }

    const articles = Array.isArray(data.articles)
      ? data.articles.map(genralNewsApi)
      : [];

    return Response.json(articles);
  } catch (error) {
    console.error("Fetch Error:", error);

    return Response.json(
      { error: "Something went wrong fetching category news." },
      { status: 500 }
    );
  }
}
