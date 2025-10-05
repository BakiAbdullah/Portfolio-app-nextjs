import LoginForm from "@/components/modules/Auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - My Portfolio",
  description: "Login to explore.",
};

const LoginPage = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default LoginPage;
