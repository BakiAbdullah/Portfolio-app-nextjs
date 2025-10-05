/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Form from "next/form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { updateBlog } from "@/actions/updateBlog";

type UpdateBlogProps = {
  blogs: any;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function UpdateBlogForm({
  blogs,
  open,
  setOpen,
}: UpdateBlogProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl p-6 rounded-2xl shadow-2xl bg-gradient-to-br from-white/95 to-gray-100/90 dark:from-gray-900 dark:to-gray-800">
        <DialogHeader className="mb-4 text-center">
          <DialogTitle className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            ✏️ Update Blog
          </DialogTitle>
        </DialogHeader>

        <Form action={(formData)=> updateBlog(formData, blogs.id)} className="space-y-5">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={blogs?.title}
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none transition"
              placeholder="Enter blog title"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={blogs?.description}
              rows={4}
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none transition"
              placeholder="Write a short blog description..."
            />
          </div>

          {/* Thumbnail */}
          <div>
            <label
              htmlFor="thumbnail"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Thumbnail URL
            </label>
            <input
              type="url"
              id="thumbnail"
              name="thumbnail"
              defaultValue={blogs?.thumbnail}
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-2 focus:ring-2 focus:ring-purple-400 outline-none transition"
              placeholder="https://example.com/image.png"
            />
          </div>

          <DialogFooter className="pt-4 flex justify-between items-center border-t border-gray-200 dark:border-gray-700">
            <DialogClose asChild>
              <Button variant="secondary" className="rounded-full px-6">
                Cancel
              </Button>
            </DialogClose>

            <Button
              type="submit"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 hover:opacity-90 text-white font-semibold px-8 py-2 rounded-full transition"
            >
              Update Blog
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
