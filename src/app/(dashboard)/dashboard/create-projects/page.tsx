import CreateProjectForm from "@/components/modules/Projects/CreateProjectForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Blog - My Portfolio",
  description: "Create a new blog post to share your thoughts and expertise.",
};

const CreateProjectPage = () => {
  return (
    <div className="bg-gradient-to-br from-slate-100 via-slate-300 to-slate-200 w-full flex justify-center items-center min-h-screen ">
      <CreateProjectForm />
    </div>
  );
}

export default CreateProjectPage