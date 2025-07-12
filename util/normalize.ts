import { NewsDataProps } from "./dataTypes";

export function mediaStack(data: any): NewsDataProps {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid data passed to mediaStack");
  }
  return {
    title: data.title,
    description: data.description,
    source: data.source,
    image: data.image,
    url: data.url,
    cateogory: [data.category],
    publishedAt: data.published_at,
    author: data.author,
  };
}

export function genralNewsApi(data: any): NewsDataProps {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid data passed to genralNewsApi");
  }

  return {
    title: data.title || "",
    description: data.description || "",
    source: data.source?.name,
    image: data.urlToImage || data.image,
    url: data.url || "",
    publishedAt: data.publishedAt || "",
    author: data.author ,
  };
}
