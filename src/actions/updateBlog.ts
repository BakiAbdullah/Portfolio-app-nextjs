import { redirect } from "next/navigation";

export const updateBlog = async (payload: FormData, blogId: number) => {
  const blogData = Object.fromEntries(payload.entries());
  const modifiedBlogData = { ...blogData };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/blogs/${blogId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedBlogData),
    }
  );
  const result = await res.json();
  if (result?.data?.id) {
    redirect("/dashboard/manage-blogs");
  }
  return result;
};
