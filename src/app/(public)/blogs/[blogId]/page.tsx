import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { getAllBlogs, getSingleBlog } from "@/services/BlogServices";

// SSG (Static Site Generation) with Params
export const generateStaticParams = async () => { 
  const blogs = await getAllBlogs();
  return blogs?.data?.map((blog: { id: string }) => ({
    blogId: String(blog.id),
  }));
}

// Next js Metadata API
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const blogDetails = await getSingleBlog(blogId);

  return {
    title: `${blogDetails?.data?.title} | My Portfolio`,
    description: blogDetails?.data?.description?.slice(0, 160),
  };
};

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  const blogDetails = await getSingleBlog(blogId);
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <BlogDetailsCard blog={blogDetails} />
    </div>
  );
};

export default BlogDetailsPage;
