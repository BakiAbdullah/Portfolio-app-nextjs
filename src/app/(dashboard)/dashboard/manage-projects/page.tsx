/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { deleteBlog } from "@/actions/deleteBlog";
import { AdminBlogDetailsCard } from "@/components/modules/Admin/AdminBlogDetailsCard";
import { ProjectDetailsCard } from "@/components/modules/Projects/ProjectDetailsCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllProjects } from "@/services/ProjectServices";
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Edit, Ellipsis, Eye, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { toast } from "sonner";

export default function ManageProjectsTable() {
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewBlogId, setViewBlogId] = useState<string | null>(null);
  // const [editBlogId, setEditBlogId] = useState<string | null>(null);
console.log(projects)
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getAllProjects();
        setProjects(data?.data || []);
      } catch (err) {
        console.error("Failed to fetch projects", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const handleDelete = async (id: number) => {
    toast.error("Are you sure you want to delete this blog?", {
      action: {
        label: "Delete",
        onClick: async () => {
          try {
            const result = await deleteBlog(id);
            console.log({ result });

            if (result?.success) {
              toast.success("Blog deleted successfully!");
              setProjects((prev) => prev.filter((b) => b._id !== id));
            } else {
              toast.error("Failed to delete blog!");
            }
          } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
          }
        },
      },
      duration: 3500,
    });
  };

  // // Update Blog
  // const handleUpdate = async (id: number) => {
  //   // updateBlog(id)
  // };

  const columns: ColumnDef<any>[] = [
    { accessorKey: "title", header: "📝 Title" },
    {
      accessorKey: "author.name",
      header: "👤 Author",
      cell: ({ row }) => row.original.author?.name || "Unknown",
    },
    {
      accessorKey: "category",
      header: "📌 Category",
      cell: ({ row }) => {
        const category = row.original.category || "DRAFT";
        return (
          <Badge
            className={`text-xs px-2 py-1 font-semibold rounded-full ${
              category === "PUBLISHED"
                ? "bg-green-100 text-green-700"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </Badge>
        );
      },
    },
    {
      accessorKey: "createdAt",
      header: "📅 Created At",
      cell: ({ row }) =>
        new Date(row.original.createdAt).toLocaleDateString("en-GB"),
    },
    {
      id: "actions",
      header: "⚙️ Actions",
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:bg-gray-100">
              <Ellipsis className="text-gray-500" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem
              className="cursor-pointer flex items-center gap-2"
              onClick={() => setViewBlogId(row.original.id)}
            >
              <Eye size={16} /> View
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer flex items-center gap-2"
              // onClick={() => setEditBlogId(row.original.id)}
            >
              <Edit size={16} /> Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer text-red-500 flex items-center gap-2"
              onClick={() => handleDelete(row.original.id)}
            >
              <Trash size={16} /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  const table = useReactTable({
    data: projects,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const skeletonRows = Array.from({ length: 5 });

  return (
    <div className="rounded-2xl w-full px-10 border border-gray-200 shadow-md bg-white dark:bg-gray-900 dark:border-gray-700">
      <div className="p-4">
        <h2 className="text-2xl text-center my-10 font-semibold text-gray-800 dark:text-gray-100">
          Manage Blog Contents
        </h2>
        <div className="overflow-x-auto">
          <Table className="w-full text-sm">
            <TableHeader className="bg-gray-100 dark:bg-gray-800">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead
                      key={header.id}
                      className="text-left font-semibold text-gray-700 dark:text-gray-200 px-4 py-3"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>

            <TableBody>
              {isLoading ? (
                skeletonRows.map((_, idx) => (
                  <TableRow key={idx}>
                    {columns.map((_, colIdx) => (
                      <TableCell key={colIdx} className="px-4 py-3">
                        <Skeleton
                          height={24}
                          baseColor="#202020"
                          highlightColor="#444"
                          className="rounded"
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row, idx) => (
                  <TableRow
                    key={row.original._id}
                    className={`transition-all ${
                      idx % 2 === 0
                        ? "bg-white dark:bg-gray-900"
                        : "bg-gray-50 dark:bg-gray-800"
                    } hover:bg-gray-100 dark:hover:bg-gray-700`}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="px-4 py-3 text-gray-800 dark:text-gray-100"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center text-gray-500 dark:text-gray-300"
                  >
                    No blogs found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {viewBlogId && (
        <ProjectDetailsCard
          projects={projects.find((b) => b.id === viewBlogId)!}
          open={!!viewBlogId}
          setOpen={(isOpen: any) => !isOpen && setViewBlogId(null)}
        />
      )}

      
      {/* {editBlogId && (
        <UpdateBlogForm
          blogs={blogs.find((b) => b.id === editBlogId)!}
          open={!!editBlogId}
          setOpen={(isOpen: any) => !isOpen && setEditBlogId(null)}
        />
      )} */}
    </div>
  );
}
