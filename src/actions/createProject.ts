"use server";

import { getUserSession } from "@/helpers/getUserSession";
import { redirect } from "next/navigation";

export const createProject = async (data: FormData) => {
  const session = await getUserSession();

  const projectInfo = Object.fromEntries(data.entries());
  console.log(projectInfo)

  Object.keys(projectInfo).forEach((key) => {
    if (key.startsWith("$ACTION_ID")) {
      delete projectInfo[key];
    }
  });
  const modifiedData = {
    ...projectInfo,
    tags: projectInfo.tags
      .toString()
      .split(",")
      .map((tag) => tag.trim()),
    authorId: session?.user?.id,
    isFeatured: Boolean(projectInfo.isFeatured)
  };

  console.log(modifiedData) 

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedData),
  });

  const result = await res.json();
  console.log(result)

  if (result?.data?.id) {
    redirect("/projects");
  }
  return result;
};
