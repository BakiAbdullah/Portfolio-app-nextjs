export const getAllBlogs = async () => {
  // const BASE_API = process.env.NEXT_PUBLIC_BASE_API || "https://portfolio-server-prisma.vercel.app/api/v1";
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
    next: { revalidate: 30 }, // (ISR)
  });
  return await res.json();
};

export const getSingleBlog = async (blogId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/blogs/${blogId}`,
    {
      next: { revalidate: 30 },
    }
  );
  return await res.json();
};
