import { NewsDataProps } from "./dataTypes";

export function theNewsApiNormalize(data: any): NewsDataProps {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid data passed to mediaStack");
  }
  return {
    title: data.title || "",
    description: data.description || "",
    source: data.source_name || "",
    image: getValidImage(data.image_url) || "",
    url: data.link,
    cateogory: [data.category],
    publishedAt: data.pubDate || "",
    author: data.creator || "",
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
    image: getValidImage(data.urlToImage || data.image),
    url: data.url || "",
    publishedAt: data.publishedAt || "",
    author: data.author,
  };
}

export const getValidImage = (url?: string) =>
  url?.startsWith("http") ? url : "/imgs/fallback-image.jpg";
