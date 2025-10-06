/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent
} from "@/components/ui/dialog";
import Image from "next/image";

type BlogDetailsProps = {
  blogs: any;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const AdminBlogDetailsCard = ({
  blogs,
  open,
  setOpen,
}: BlogDetailsProps) => {
  const blog = blogs?.data || blogs; // supports both formats

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0 overflow-y-auto border-none shadow-2xl bg-white dark:bg-gray-900 rounded-3xl">
        {/* Thumbnail with Enhanced Overlay */}
        <div className="relative w-full h-64 overflow-hidden group">
          <Image
            src={blog?.thumbnail}
            alt={blog?.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

          {/* Floating Category Badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs px-4 py-1.5 rounded-full shadow-lg backdrop-blur-md border border-white/20 font-semibold">
              {blog?.category || "General"}
            </Badge>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-3xl font-bold text-white leading-tight drop-shadow-2xl line-clamp-2">
              {blog?.title}
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Author Info - Compact */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg ring-2 ring-blue-100 dark:ring-gray-700">
                {blog?.author?.name?.[0] || "A"}
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  {blog?.author?.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {new Date(blog?.createdAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            {/* Reading Time */}
            <div className="text-right">
              <p className="text-xs text-gray-500 dark:text-gray-400">Read</p>
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200">
                {Math.ceil((blog?.description?.length || 0) / 200)} min
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-800/30 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              {blog?.description}
            </p>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center pt-3 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Updated{" "}
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {new Date(blog?.updatedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                })}
              </span>
            </p>
            <DialogClose asChild>
              <Button
                variant="ghost"
                className="rounded-full px-6 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-all"
              >
                Close
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
