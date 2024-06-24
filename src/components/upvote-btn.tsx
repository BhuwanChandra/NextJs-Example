"use client";
import React, { useState } from "react";

function UpvoteBtn() {
  const [upVoteCount, setUpVoteCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => setUpVoteCount(upVoteCount + 1)}
        className="bg-blue-500 text-white p-2 mt-10"
      >
        {`${upVoteCount} Upvotes`}
      </button>
    </div>
  );
}

export default UpvoteBtn;
