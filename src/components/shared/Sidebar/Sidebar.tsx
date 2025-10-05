"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, PlusCircle, LogOut, LogIn, Settings2 } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

export default function Sidebar() {
  const session = useSession(); // Getting user session info in Client Component by using useSession hook
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    {
      href: "/dashboard/create-blog",
      label: "Create Blog Post",
      icon: PlusCircle,
    },
    {
      href: "/dashboard/manage-blogs",
      label: "Manage Blog Contents",
      icon: Settings2,
    }
  ];

  return (
    <aside className="flex h-screen w-72 flex-col border-r border-gray-800 bg-gradient-to-b from-gray-900 via-gray-950 to-black shadow-xl">
      {/* Logo / Header */}
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-2xl font-extrabold tracking-tight">
          <Link href="/">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-fuchsia-500 bg-clip-text text-transparent">
              MyPortfolio
            </span>
          </Link>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300
              ${
                isActive
                  ? "bg-gradient-to-r from-purple-600 via-pink-600 to-fuchsia-600 text-white shadow-md"
                  : "text-gray-300 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 hover:text-white"
              }`}
            >
              <Icon
                className={`h-5 w-5 ${
                  isActive
                    ? "text-white"
                    : "text-purple-400 group-hover:text-fuchsia-400"
                }`}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer / Sign out */}
      <div className="p-4 border-t border-gray-800">
        {session.status === "authenticated" ? (
          <Button
            onClick={() => signOut()}
            variant="ghost"
            className="w-full justify-start bg-gray-900 gap-3 cursor-pointer rounded-xl px-4 py-2 text-sm font-semibold text-gray-300 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 hover:text-white transition-all"
          >
            <LogOut className="h-5 w-5 text-purple-400 group-hover:text-fuchsia-400" />
            Sign Out
          </Button>
        ) : (
          <Link href="/login">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 cursor-pointer rounded-xl px-4 py-2 text-sm font-semibold text-gray-300 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-700 hover:text-white transition-all"
            >
              <LogIn className="h-5 w-5 text-purple-400 group-hover:text-fuchsia-400" />
              Log in
            </Button>
          </Link>
        )}
      </div>
    </aside>
  );
}
