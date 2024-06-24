import Link from "next/link";
import React from "react";

async function PostList() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await response.json();
  return (
    <ul>
      {data?.posts?.map((post: { id: string; title: string }) => (
        <li key={post.id} className="text-center font-medium mb-5">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
