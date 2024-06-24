import React, { Suspense } from "react";
import Loading from "../loading";
import UpvoteBtn from "@/components/upvote-btn";

interface PageProps {
  params: {
    id: string;
  };
}

async function Page({ params }: PageProps) {
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post = await response.json();

  return (
    <main className="px-7 pt-24 text-center">
      <Suspense fallback={<Loading />}>
        <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
        <p className="max-w-[700px] mx-auto">{post.body}</p>
        <UpvoteBtn />
      </Suspense>
    </main>
  );
}

export default Page;
