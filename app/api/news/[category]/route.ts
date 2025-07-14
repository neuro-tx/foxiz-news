import { genralNewsApi } from "@/util/normalize";
import { NextRequest } from "next/server";

interface categoryProps {
  params: {
    category: string;
  };
}

export async function GET(request: NextRequest, { params }: categoryProps) {
  const category = (await params).category;
  const API_KEY = process.env.NEXT_PUBLIC_NEWSAPI_KEY;

  const url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${API_KEY}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    const result = (data.articles || []).map(genralNewsApi);

    if (data.status !== "ok") {
      return Response.json({ error: data.message }, { status: 400 });
    }

    return Response.json(result);
  } catch (error) {
    return Response.json(
      { error: "Something went wrong fetching category news." },
      { status: 500 }
    );
  }
}
