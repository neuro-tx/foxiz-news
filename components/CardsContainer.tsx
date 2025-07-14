"use client";
import { useSettings } from "@/context/SettingsProvider";
import React from "react";

const CardsContainer = ({ children }: { children: React.ReactNode }) => {
  const { layout } = useSettings();
  return (
    <div
      className={`${
        layout === "grid"
          ? "grid sm:grid-cols-2 lg:grid-cols-4"
          : "grid lg:grid-cols-2"
      } gap-4`}
    >
      {children}
    </div>
  );
};

export default CardsContainer;
