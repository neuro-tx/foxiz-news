import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export const formatDate: any = (date: number) => {
  return new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const cn = (...className: any) => {
  return twMerge(clsx(className));
};
