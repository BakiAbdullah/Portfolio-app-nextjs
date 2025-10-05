
/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";
// import { Badge } from "@/components/ui/badge";
import { getAllBlogs } from "@/services/BlogServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Blogs - My Portfolio",
  description:
    "All Blogs showcase.",
};

const AllBlogsPage = async () => {
  const { data: Allblogs } = await getAllBlogs();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-fuchsia-50/30 to-indigo-100/50 dark:from-slate-950 dark:via-fuchsia-950/30 dark:to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full mb-6">
            <span className="text-fuchsia-600 dark:text-fuchsia-400 text-sm font-medium">
              ✨ Latest Updates
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold dark:text-white md:text-5xl lg:text-6xl bg-gradient-to-r from-fuchsia-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
            All Blog Posts
          </h1>

          <p className="my-8 text-slate-600 dark:text-slate-300 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover the latest trends, tips, and best practices in modern web
            development. From UI components to design systems, stay updated with
            our expert insights.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-slate-600 dark:text-slate-400">
                <strong className="text-slate-900 dark:text-white">
                  {Allblogs?.length || 0}
                </strong>{" "}
                Articles
              </span>
            </div>
            <div className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="text-slate-600 dark:text-slate-400">
                Updated{" "}
                <strong className="text-slate-900 dark:text-white">
                  Weekly
                </strong>
              </span>
            </div>
            <div className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="text-slate-600 dark:text-slate-400">
                <strong className="text-slate-900 dark:text-white">Free</strong>{" "}
                to Read
              </span>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        {Allblogs && Allblogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Allblogs.map((blog: any, index: number) => (
              <div
                key={blog.id}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl">📝</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              No Blogs Yet
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              Check back soon for exciting content about web development,
              design, and technology.
            </p>
          </div>
        )}

        {/* Load More Section (Optional) */}
        {Allblogs && Allblogs.length > 9 && (
          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-fuchsia-500/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
              <span>Load More Articles</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBlogsPage;
