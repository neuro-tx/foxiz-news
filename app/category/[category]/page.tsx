import React from "react";

interface categoryProps {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params }: categoryProps) {
  const { category } = await params;

  return <div>CategoryList of {category}</div>;
}
