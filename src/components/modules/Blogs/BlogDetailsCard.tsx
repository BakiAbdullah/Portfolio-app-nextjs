/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, Calendar, Eye } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const BlogDetailsCard = ({ blog }: { blog: any }) => {
  // Defensive check for data structure
  const blogs = blog?.data || {};

  return (
    <section className="py-20 md:py-32 min-h-screen">
      <div className="container">
        <div className="relative flex flex-col justify-between gap-12 lg:flex-row">
          {/* Sidebar (Details/Meta) */}
          <aside className="top-10 h-fit flex-shrink-0 lg:sticky lg:w-[300px] xl:w-[380px] p-4 lg:p-0">
            {/* Back Link */}
            <Link
              className="text-muted-foreground hover:text-fuchsia-600 mb-6 flex items-center gap-1 text-sm font-medium transition-colors"
              href="/"
            >
              <ChevronLeft className="h-4 w-4" />
              Return to home
            </Link>

            {/* Title - Increased size for impact and used fuchsia-600 */}
            <h1 className="mb-6 text-balance text-4xl font-extrabold lg:text-5xl leading-tight bg-gradient-to-r from-pink-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              {blogs?.title}
            </h1>

            {/* Author Section */}
            <div className="flex gap-3 items-center border-b pb-6 dark:border-gray-700">
              <Avatar className="size-12 rounded-full border-2 border-fuchsia-500 shadow-md transition-shadow hover:shadow-lg">
                <AvatarImage
                  src={
                    blogs?.author?.avatar ||
                    "https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
                  }
                  alt={blogs?.author?.name}
                />
              </Avatar>
              <div>
                <h2 className="font-bold flex items-center gap-2 text-gray-900 dark:text-white">
                  {blogs?.author?.name}
                  {blogs?.author?.isVerified && (
                    <span
                      className="text-fuchsia-500 text-base"
                      title="Verified Author"
                    >
                      ★
                    </span>
                  )}
                </h2>
                {/* Meta Info */}
                <p className="text-sm text-gray-500 dark:text-gray-400 flex flex-wrap gap-x-4 gap-y-1 mt-1">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-fuchsia-500" />{" "}
                    {blogs.createdAt
                      ? new Date(blogs.createdAt).toLocaleDateString()
                      : "N/A"}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye size={14} className="text-fuchsia-500" />{" "}
                    {blogs?.views || 0} views
                  </span>
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <article className="max-w-4xl lg:flex-1 p-4 lg:p-0">
            {blogs?.thumbnail && (
              <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src={blogs.thumbnail}
                  alt={blogs.title}
                  fill
                  className="object-cover transition duration-700 ease-in-out hover:scale-[1.03]"
                />
              </div>
            )}

            {/* Rich text container with custom prose styling */}
            <div className="prose prose-lg dark:prose-invert max-w-none leading-relaxed prose-fuchsia">
              <p>{blogs?.description}</p>

              {/* Example extra rich content with fuchsia styling */}
              <h2 className="!text-fuchsia-600 dark:!text-fuchsia-400 text-2xl font-bold border-l-4 border-fuchsia-500 pl-3 mt-12 mb-4">
                Why this blog matters
              </h2>
              <blockquote className="border-l-4 border-fuchsia-500 pl-4 py-2 text-gray-600 dark:text-gray-300 italic text-xl">
                “A blog post is not just words — it’s storytelling.”
              </blockquote>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsCard;
