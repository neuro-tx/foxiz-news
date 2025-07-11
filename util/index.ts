import React from "react";

export const formatDate : any = (date: number) => {
  return new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
