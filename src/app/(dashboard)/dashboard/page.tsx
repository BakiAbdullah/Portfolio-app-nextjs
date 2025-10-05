import { getUserSession } from "@/helpers/getUserSession";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - My Portfolio",
  description: "Admin Dashboard - Manage your portfolio content.",
};

export default async function DashboardHomePage() {
  const session = await getUserSession();
  console.log(session, "Dashboard Session");
  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-full">
      <h1 className="text-4xl font-bold bg-gradient-to-br from-pink-600 via-fuchsia-700 to-violet-600 bg-clip-text text-transparent">
        Welcome to Dashboard {session?.user?.name}!
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        {session?.user?.email}
      </p>
    </div>
  );
}
