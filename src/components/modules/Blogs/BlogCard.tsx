/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { getAllBlogs } from "@/services/BlogServices";

const BlogCard = async () => {
  const { data: blogs } = await getAllBlogs();

  return (
    <section className="py-32">
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            Latest Updates
          </Badge>
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Blog Posts
          </h2>
          <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
            Discover the latest trends, tips, and best practices in modern web
            development. From UI components to design systems, stay updated with
            our expert insights.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {blogs.map((blog: any) => (
            <Card
              key={blog.id}
              className="grid grid-rows-[auto_auto_1fr_auto] pt-0 h-full"
            >
              <div className="aspect-16/9 w-full">
                <a
                  href={blog.url}
                  target="_blank"
                  className="transition-opacity duration-200 fade-in hover:opacity-70"
                >
                  <Image
                    height={200}
                    width={400}
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="h-full w-full object-cover object-center"
                  />
                </a>
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  <a href={blog.url} target="_blank">
                    {blog.title}
                  </a>
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{blog.description}</p>
              </CardContent>
              <CardFooter>
                <a
                  href={blog.url}
                  target="_blank"
                  className="flex items-center text-foreground hover:underline"
                >
                  Read more
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { BlogCard };
