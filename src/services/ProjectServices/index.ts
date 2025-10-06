export const getAllProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
    next: { revalidate: 30 }, // (ISR)
  });
  return await res.json();
};

export const getSingleProject = async (projectId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/projects/${projectId}`,
    {
      next: { revalidate: 30 },
    }
  );
  return await res.json();
};
