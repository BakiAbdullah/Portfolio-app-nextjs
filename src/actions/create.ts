"use server";

import { getUserSession } from "@/helpers/getUserSession";
import { redirect } from "next/navigation";

export const create = async (data: FormData) => {
  const session = await getUserSession();
  const blogInfo = Object.fromEntries(data.entries());
  const modifiedData = { ...blogInfo, authorId: session?.user?.id };

  console.log(modifiedData) 

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedData),
  });

  const result = await res.json();
  console.log(result)

  if (result?.data?.id) {
    redirect("/blogs");
  }
  return result;
};
