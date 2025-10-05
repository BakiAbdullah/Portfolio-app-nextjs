"use server";
import { revalidateTag } from "next/cache";

export const deleteBlog = async (blogId: number) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/blogs/${blogId}`,
    {
      method: "DELETE",
      // next: { tags: ["BLOGS"] }, //! On-demand Revalidation
    }
  );

  const result = await res.json();

  revalidateTag("BLOGS");
  return result;
};
