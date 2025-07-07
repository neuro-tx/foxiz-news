import React from 'react'
interface Props {
  params: {
    category: string;
  };
}

export default async function Category({ params }: Props) {
  const { category } = await params;
  return (
    <div>
      {category} : Category
    </div>
  )
}