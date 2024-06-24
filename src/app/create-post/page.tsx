import { createPost } from "@/actions/actions";
import React from "react";

function Page() {
const { isAuthenticated } = getKindeServerSession();

  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>
      <form action={createPost} className="h-10 space-x-2 mt-10">
        <input
          placeholder="Title for new post"
          name="title"
          type="text"
          className="border rounded px-3 h-full"
          required
        />
        <button className="bg-blue-500 text-white h-full px-5 rounded">
          Submit
        </button>
      </form>
    </main>
  );
}

export default Page;
