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

type projectDetailsProps = {
  projects: any;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const ProjectDetailsCard = ({
  projects,
  open,
  setOpen,
}: projectDetailsProps) => {
  const project = projects?.data || projects; // supports both formats

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden border-none shadow-2xl bg-white dark:bg-gray-900 rounded-3xl">
        {/* Thumbnail with Overlay */}
        <div className="relative w-full h-60 overflow-hidden">
          <Image
            height={300}
            width={600}
            src={project?.thumbnail}
            alt={project?.title}
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs px-4 py-1.5 rounded-full shadow-lg backdrop-blur-sm border border-white/20">
              {project?.category || "General"}
            </Badge>
          </div>

          {/* Featured Badge */}
          {project?.isFeatured && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-4 py-1.5 rounded-full shadow-lg backdrop-blur-sm border border-white/20 flex items-center gap-1">
                <span>⭐</span> Featured
              </Badge>
            </div>
          )}

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
              {project?.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg ring-2 ring-blue-100 dark:ring-gray-700">
                {project?.author?.name?.[0] || "A"}
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-gray-100">
                  {project?.author?.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {project?.author?.email}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Created
              </p>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {new Date(project?.createdAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-5 border border-gray-100 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {project?.description}
            </p>
          </div>

          {/* Tags */}
          {project?.tags && project.tags.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            {project?.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full py-5 shadow-lg hover:shadow-xl transition-all font-semibold">
                  <span className="mr-2">🚀</span> Live Demo
                </Button>
              </a>
            )}
            {project?.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  variant="outline"
                  className="w-full border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full py-5 font-semibold"
                >
                  <span className="mr-2">💻</span> View Code
                </Button>
              </a>
            )}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Last updated:{" "}
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {new Date(project?.updatedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </p>
            <DialogClose asChild>
              <Button
                variant="ghost"
                className="rounded-full px-6 hover:bg-gray-100 dark:hover:bg-gray-800"
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
