import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { getSingleblog } from "@/services/BlogServices";

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const {blogId} = await params;
  const blogDetails = await getSingleblog(blogId);
  console.log(blogId);
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      
      <BlogDetailsCard blog={ blogDetails} />
    </div>
  );
};

export default BlogDetailsPage;
