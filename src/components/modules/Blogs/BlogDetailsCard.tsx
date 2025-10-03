/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  ChevronLeft,
  Calendar,
  Eye,
  Clock,
  Share2,
  Bookmark,
  Heart,
  MessageCircle,
  Twitter,
  Facebook,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogDetailsCard = ({ blog }: { blog: any }) => {
  // Defensive check for data structure
  const blogs = blog?.data || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-fuchsia-50/20 to-indigo-100/30 dark:from-slate-950 dark:via-fuchsia-950/20 dark:to-slate-900">
      {/* Hero Section with Thumbnail */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        {/* Background Image with Overlay */}
        {blogs?.thumbnail && (
          <>
            <div className="absolute inset-0">
              <Image
                src={blogs.thumbnail}
                alt={blogs.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/80 to-slate-950" />
          </>
        )}

        {/* Back Button - Floating */}
        <div className="absolute top-8 left-8 z-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-16">
          <div className="max-w-4xl">
            {/* Category Badge */}
            {blogs?.category && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-600/90 backdrop-blur-sm text-white rounded-full mb-6 shadow-lg">
                <span className="text-sm font-bold">{blogs.category}</span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {blogs?.title}
            </h1>

            {/* Meta Info Bar */}
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-fuchsia-400" />
                <span className="text-sm font-medium">
                  {blogs.createdAt
                    ? new Date(blogs.createdAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "Recently"}
                </span>
              </div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-fuchsia-400" />
                <span className="text-sm font-medium">
                  {blogs?.views || 0} views
                </span>
              </div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-fuchsia-400" />
                <span className="text-sm font-medium">
                  {blogs?.readTime || "5 min"} read
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative -mt-20 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
            {/* Main Article */}
            <article className="flex-1">
              <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                {/* Author Section */}
                <div className="p-8 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-r from-fuchsia-50/50 to-pink-50/50 dark:from-fuchsia-950/20 dark:to-pink-950/20">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar className="w-16 h-16 ring-4 ring-fuchsia-500/20 shadow-lg">
                        <AvatarImage
                          src={
                            blogs?.author?.avatar ||
                            "https://cdn-icons-png.flaticon.com/512/9385/9385289.png"
                          }
                          alt={blogs?.author?.name}
                        />
                      </Avatar>
                      {blogs?.author?.isVerified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-fuchsia-600 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {blogs?.author?.name}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {blogs?.author?.bio ||
                          "Software Developer & Technical Writer"}
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-fuchsia-500/50 transition-all duration-300 hover:scale-105">
                      Follow
                    </button>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-8 md:p-12">
                  {/* Description/Intro */}
                  <div className="mb-8">
                    <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
                      {blogs?.description}
                    </p>
                  </div>

                  {/* Rich Content */}
                  <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-a:text-fuchsia-600 prose-a:no-underline hover:prose-a:underline">
                    {/* Sample Content - Replace with actual blog content */}
                    <h2 className="flex items-center gap-3 text-3xl font-bold mt-12 mb-6">
                      <span className="w-1 h-8 bg-gradient-to-b from-fuchsia-600 to-pink-600 rounded-full"></span>
                      Why This Blog Matters
                    </h2>

                    <p className="leading-relaxed">
                      In today&apos;s fast-paced digital landscape,
                      understanding the core principles discussed in this
                      article can make a significant difference in your approach
                      to problem-solving and innovation.
                    </p>

                    {/* Featured Quote */}
                    <div className="my-12 relative">
                      <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-fuchsia-600 to-pink-600 rounded-full"></div>
                      <blockquote className="pl-8 py-6 bg-gradient-to-r from-fuchsia-50 to-pink-50 dark:from-fuchsia-950/20 dark:to-pink-950/20 rounded-2xl border-none">
                        <p className="text-2xl font-semibold text-slate-900 dark:text-white italic mb-4">
                          &apos;A blog post is not just words — it&apos;s
                          storytelling, education, and connection.&apos;
                        </p>
                        <footer className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                          — Industry Expert
                        </footer>
                      </blockquote>
                    </div>

                    <h2 className="flex items-center gap-3 text-3xl font-bold mt-12 mb-6">
                      <span className="w-1 h-8 bg-gradient-to-b from-fuchsia-600 to-pink-600 rounded-full"></span>
                      Key Takeaways
                    </h2>

                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-fuchsia-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Understanding the fundamentals is crucial for
                          long-term success
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-fuchsia-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Practical implementation beats theoretical knowledge
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-fuchsia-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>
                          Continuous learning and adaptation are key in this
                          field
                        </span>
                      </li>
                    </ul>

                    {/* Call-to-Action Box */}
                    <div className="my-12 p-8 bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-3xl text-white shadow-2xl">
                      <h3 className="text-2xl font-bold mb-4 text-white">
                        Ready to Learn More?
                      </h3>
                      <p className="mb-6 text-white/90">
                        Subscribe to our newsletter for weekly insights and
                        updates on the latest trends.
                      </p>
                      <button className="px-6 py-3 bg-white text-fuchsia-600 font-bold rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg">
                        Subscribe Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Tags Section */}
                {blogs?.tags && blogs.tags.length > 0 && (
                  <div className="px-8 md:px-12 pb-8">
                    <div className="flex flex-wrap gap-3">
                      {blogs.tags.map((tag: string, i: number) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-fuchsia-50 dark:bg-fuchsia-950/20 text-fuchsia-600 dark:text-fuchsia-400 text-sm font-medium rounded-full border border-fuchsia-200 dark:border-fuchsia-800 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-900/30 transition-colors cursor-pointer"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Engagement Section */}
                <div className="px-8 md:px-12 py-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950/20 transition-colors border border-slate-200 dark:border-slate-700">
                        <Heart className="w-5 h-5 text-fuchsia-600" />
                        <span className="font-semibold text-slate-900 dark:text-white">
                          142
                        </span>
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-xl hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950/20 transition-colors border border-slate-200 dark:border-slate-700">
                        <MessageCircle className="w-5 h-5 text-fuchsia-600" />
                        <span className="font-semibold text-slate-900 dark:text-white">
                          28
                        </span>
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 bg-white dark:bg-slate-800 rounded-xl hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950/20 transition-colors border border-slate-200 dark:border-slate-700">
                        <Bookmark className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      </button>
                      <button className="p-2 bg-white dark:bg-slate-800 rounded-xl hover:bg-fuchsia-50 dark:hover:bg-fuchsia-950/20 transition-colors border border-slate-200 dark:border-slate-700">
                        <Share2 className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-80 space-y-6">
              {/* Share Card */}
              <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-slate-200 dark:border-slate-800 sticky top-8">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  Share this article
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  <button className="p-3 bg-blue-50 dark:bg-blue-950/20 text-blue-600 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                    <Twitter className="w-5 h-5 mx-auto" />
                  </button>
                  <button className="p-3 bg-blue-50 dark:bg-blue-950/20 text-blue-700 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                    <Facebook className="w-5 h-5 mx-auto" />
                  </button>
                  <button className="p-3 bg-blue-50 dark:bg-blue-950/20 text-blue-600 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                    <Linkedin className="w-5 h-5 mx-auto" />
                  </button>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-fuchsia-600 to-pink-600 rounded-full"></span>
                  Table of Contents
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-fuchsia-600 rounded-full"></span>
                      Why This Blog Matters
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-fuchsia-600 rounded-full"></span>
                      Key Takeaways
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-400 hover:text-fuchsia-600 dark:hover:text-fuchsia-400 transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-fuchsia-600 rounded-full"></span>
                      Conclusion
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-20"></div>
    </div>
  );
};

export default BlogDetailsCard;
