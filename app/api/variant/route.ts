import { theNewsApiNormalize } from "@/util/normalize";
import { NextRequest } from "next/server";

export async function GET(_req: NextRequest) {
  const API_KEY = process.env.NEXT_PUBLIC_THENEWSAPI_KEY;
  const topics = ["entertainment", "technology", "sports"];

  const topicsFetches = topics.map((topic) =>
    fetch(
      `https://newsdata.io/api/1/latest?apikey=${API_KEY}&category=${topic}&language=en`
    ).then((res) => res.json())
  );

  const promises = [...topicsFetches];

  try {
    const result = await Promise.all(promises);
    const data = topics.map((topic, i) => ({
      topic,
      articles: (result[i].results || []).map(theNewsApiNormalize),
    }));
    return Response.json(data);
  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
