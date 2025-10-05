import { loginWithCredentials } from "@/services/AuthServices/login";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string | null;
      email: string | null;
      role: string | null;
    };
  }
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    role: string | null;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.error("Email or password is missing");
          return null;
        }
        try {
          const res = await loginWithCredentials(credentials);

          if (!res?.ok) {
            console.error("Login failed!", await res.json());
            return null;
          }

          const user = await res.json();
          
          if (user) {
            return {
              id: user?.data?.id,
              name: user?.data?.name,
              email: user?.data?.email,
              role: user?.data?.role,
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user?.id;
        token.role = user?.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token?.id as string;
        session.user.role = token?.role as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
