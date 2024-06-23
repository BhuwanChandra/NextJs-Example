import Link from "next/link";
import React from "react";

async function Page() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await response.json();
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>
      <ul>
        {data?.posts?.map((post: { id: string; title: string }) => (
          <li key={post.id} className="text-center font-medium mb-5">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Page;
