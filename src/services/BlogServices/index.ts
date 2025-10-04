export const getAllBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
    next: { revalidate: 30 }, //! Incremental Static Regeneration (ISR)
  });
  return await res.json();
};


export const getSingleBlog = async (blogId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/blogs/${blogId}`,
    {
      next: { revalidate: 30 }, //! Incremental Static Regeneration (ISR)
    }
  );
  return await res.json();
};


