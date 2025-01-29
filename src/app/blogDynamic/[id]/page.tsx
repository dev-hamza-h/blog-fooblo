"use client";

import { useParams } from "next/navigation";

const BlogPost = () => {
  const { id } = useParams(); // Get dynamic ID

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold text-red-500">
        Blog ID: {id} - Page Under Construction
      </h1>
    </div>
  );
};

export default BlogPost;
