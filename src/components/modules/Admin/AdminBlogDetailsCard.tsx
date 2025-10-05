/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
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
      <DialogContent className="max-w-2xl p-0 overflow-hidden border-none shadow-2xl bg-gradient-to-br from-white/95 to-gray-100/90 dark:from-gray-900 dark:to-gray-800 rounded-2xl">
        {/* Thumbnail */}
        <div className="relative w-full h-64">
          <Image
            src={blog?.thumbnail}
            alt={blog?.title}
            fill
            className="object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-t-2xl" />
          <div className="absolute bottom-4 left-4 text-white">
            <Badge className="bg-blue-600/80 text-white text-xs px-3 py-1 rounded-full">
              {blog?.category || "General"}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              {blog?.title}
            </DialogTitle>
          </DialogHeader>

          {/* Author Info */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white font-semibold shadow-md">
              {blog?.author?.name?.[0] || "A"}
            </div>
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-200">
                {blog?.author?.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(blog?.createdAt).toLocaleDateString("en-GB")}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {blog?.description}
          </p>

          {/* Footer */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated:{" "}
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {new Date(blog?.updatedAt).toLocaleDateString("en-GB")}
              </span>
            </p>
            <DialogClose asChild>
              <Button variant="secondary" className="rounded-full px-6">
                Close
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
