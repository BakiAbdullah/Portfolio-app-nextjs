/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, Eye } from "lucide-react";

export default function BlogCard({ blog }: { blog: any }) {
  return (
    <Link href={`/blogs/${blog.id}`}
      className="block group h-full">
      <div className="relative bg-white dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-xl rounded-3xl h-full overflow-hidden border border-slate-200 dark:border-slate-700/50 hover:border-fuchsia-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-fuchsia-500/20 hover:scale-[1.02] flex flex-col">
        {/* Thumbnail */}
        <div className="relative h-56 w-full overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Category Badge */}
          {blog.category && (
            <div className="absolute top-4 left-4 z-20">
              <span className="px-4 py-2 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white text-xs font-bold rounded-full shadow-lg">
                {blog.category}
              </span>
            </div>
          )}

          {/* Reading Stats Overlay */}
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-3">
            <div className="flex items-center gap-1 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-white text-xs">
              <Eye className="w-3 h-3" />
              <span>{blog.views || "1.2K"}</span>
            </div>
            <div className="flex items-center gap-1 px-3 py-1 bg-slate-900/80 backdrop-blur-sm rounded-full text-white text-xs">
              <Clock className="w-3 h-3" />
              <span>{blog.readTime || "5 min"}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-300 transition-colors line-clamp-2 min-h-[56px]">
            {blog.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 min-h-[72px] text-sm leading-relaxed">
            {blog.description}
          </p>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 min-h-[32px]">
              {blog.tags.slice(0, 3).map((tag: string, i: number) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-fuchsia-500/10 text-fuchsia-300 text-xs font-medium rounded-full border border-fuchsia-500/20 h-fit"
                >
                  #{tag}
                </span>
              ))}
              {blog.tags.length > 3 && (
                <span className="px-3 py-1 bg-slate-700/50 text-slate-400 text-xs font-medium rounded-full h-fit">
                  +{blog.tags.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Footer */}
          <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700/50">
            <div className="flex items-center justify-between">
              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Image
                    src={
                      blog.author.picture ||
                      "https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
                    }
                    alt={blog.author.name}
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-fuchsia-500/30"
                  />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-900"></div>
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white text-sm font-medium">
                    {blog.author.name}
                  </p>
                  <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs">
                    <Calendar className="w-3 h-3" />
                    <span>
                      {blog.publishedAt
                        ? new Date(blog.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )
                        : "Recently"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Read More Button */}
              <div className="flex items-center gap-2 text-fuchsia-600 dark:text-fuchsia-400 font-semibold text-sm group/btn">
                <span className="hidden sm:inline">Read</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-transparent to-pink-500/5" />
        </div>
      </div>
    </Link>
  );
}
