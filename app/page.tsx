import React from "react";
import Hero from "@/components/Hero";
import Link from "next/link";
import { LayoutTemplate } from "lucide-react";

const categoriesList = [
  "sports",
  "business",
  "technology",
  "entertainment",
  "science",
  "health",
];

const page = async () => {
  return (
    <div className="main-container min-h-dvh">
      <div className="flex gap-2 mt-5">
        <span className="size-9 aspect-square text-lg flex-center justify-center rounded-full bg-white-100 dark:bg-dark-100 transition-1">
          <LayoutTemplate size={19} className="text-red-70" />
        </span>
        <div className="flex-center flex-wrap relative gap-2">
          {categoriesList.map((cat: string) => (
            <Link
              key={cat}
              href={`/category/${cat.toLowerCase()}`}
              className="cat-link transition-1"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      <Hero />
    </div>
  );
};

export default page;
