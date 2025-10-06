"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const session = useSession();
  // const features = [
  //   {
  //     title: "Dashboard",
  //     description: "Overview of your activity",
  //     href: "#",
  //   },
  //   {
  //     title: "Analytics",
  //     description: "Track your performance",
  //     href: "#",
  //   },
  //   {
  //     title: "Settings",
  //     description: "Configure your preferences",
  //     href: "#",
  //   },
  // ];

  return (
    <section className="w-full mx-auto px-10 sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div>
        <nav className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
              className="max-h-9 transition-transform duration-300 group-hover:rotate-6"
              alt="Logo"
              height={36}
              width={36}
            />
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              My Portfolio
            </span>
          </Link>

          {/* Desktop Menu */}
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="gap-4">
              {/* <NavigationMenuItem>
                <NavigationMenuTrigger className="font-medium hover:text-primary transition-colors">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-3 p-4">
                    {features.map((feature, index) => (
                      <NavigationMenuLink
                        href={feature.href}
                        key={index}
                        className="rounded-lg p-4 shadow-sm bg-slate-50 hover:bg-slate-100 transition-all duration-300"
                      >
                        <p className="mb-1 font-semibold">{feature.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/projects"
                  className={navigationMenuTriggerStyle()}
                >
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/blogs"
                  className={navigationMenuTriggerStyle()}
                >
                  Blogs
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className={navigationMenuTriggerStyle()}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/dashboard"
                  className={navigationMenuTriggerStyle()}
                >
                  Dashboard
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            {!session?.data?.user ? (
              <Link href="/login">
                <Button
                  variant="outline"
                  className="rounded-full px-6 cursor-pointer"
                >
                  Log in
                </Button>
              </Link>
            ) : (
              <Button
                onClick={() => signOut()}
                variant="outline"
                className="rounded-full px-6 cursor-pointer"
              >
                Log out
              </Button>
            )}
            <Link href="/about">
              <Button className="rounded-full cursor-pointer bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:opacity-90 px-6">
                Hire Me
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" className="rounded-full">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                      height={32}
                      width={32}
                      className="max-h-8"
                      alt="Logo"
                    />
                    <span className="text-lg font-semibold tracking-tight">
                      My Portfolio
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col p-4 space-y-6">
                {/* <Accordion type="single" collapsible>
                  <AccordionItem value="solutions" className="border-none">
                    <AccordionTrigger className="text-base">
                      Features
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2 gap-2">
                        {features.map((feature, index) => (
                          <a
                            href={feature.href}
                            key={index}
                            className="rounded-lg p-3 shadow-sm bg-slate-50 hover:bg-slate-100 transition-all"
                          >
                            <p className="font-semibold">{feature.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {feature.description}
                            </p>
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion> */}

                <div className="flex flex-col gap-4 text-lg font-medium">
                  <Link href="/projects">Projects</Link>
                  <Link href="/about">About</Link>
                  <Link href="#">Dashboard</Link>
                  <Link href="#">Blog</Link>
                </div>

                <div className="flex flex-col gap-3 pt-4">
                  <Link href="/login">
                    <Button variant="outline" className="rounded-full">
                      Log in
                    </Button>
                  </Link>
                  <Button className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:opacity-90">
                    Hire Me
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };

