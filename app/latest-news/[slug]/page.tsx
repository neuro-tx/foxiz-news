import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ArticlePage({ params }: Props) {
  const {slug} = await params;
  return (
    <div className="min-h-dvh flex items-center justify-center text-xl font-semibold text-blue-500">
      Article: {slug}
    </div>
  );
}
