import React from "react";
import Hero from "@/components/Hero";
import Link from "next/link";
import { LayoutTemplate } from "lucide-react";
import TopStories from "@/components/TopStories";
import { categoriesList } from "@/util";

const page = async () => {
  return (
    <div className="main-container min-h-dvh">
      <Hero />
      <TopStories />
    </div>
  );
};

export default page;
