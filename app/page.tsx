import React from "react";
import Hero from "@/components/Hero";
import TopStories from "@/components/TopStories";
import TechSection from "@/components/TechSection";
import Entertainment from "@/components/Entertainment";

const page = async () => {
  return (
    <div className="main-container min-h-dvh">
      <Hero />
      <TopStories />
      <TechSection />
      <Entertainment />
    </div>
  );
};

export default page;
