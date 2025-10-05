/* eslint-disable @typescript-eslint/no-explicit-any */

import BlogCard from "@/components/modules/Blogs/BlogCard";
import { HeroSection } from "@/components/modules/Home/HeroSection";
import { getAllBlogs } from "@/services/BlogServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - My Portfolio",
  description: "Welcome to my personal portfolio website showcasing my projects and blogs.",
};

const HomePage = async () => {
  const { data: blogs } = await getAllBlogs();

  return (
    <div>
      <HeroSection />
      <h2 className="text-center text-5xl text-slate-900 my-16 font-extrabold">
        Featured Posts
      </h2>

      <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto px-4 pb-28">
        {blogs.slice(0, 3).map((blog: any) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
