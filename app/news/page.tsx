import Link from "next/link";

export default function NewsPage() {
  return (
    <div>
      <h1 className="text-xl text-fuchsia-500">All news</h1>
      <ul>
        <li>
          <Link href="/news/f-art">first article</Link>
        </li>
        <li>
          <Link href="/news/s-art">second article</Link>
        </li>
      </ul>
    </div>
  );
}
