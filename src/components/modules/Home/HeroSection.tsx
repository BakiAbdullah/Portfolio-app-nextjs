import { TrendingUp, Users, Zap } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-fuchsia-100 via-white to-pink-100 w-full mx-auto h-full px-5 lg:px-10 overflow-hidden py-32">
      <div className="border-b border-t border-dashed">
        <div className="relative flex w-full max-w-5xl flex-col border border-t-0 border-dashed px-5 py-12 items-center justify-center mx-auto">
          <p className="text-muted-foreground flex items-center gap-3 text-sm">
            <span className="inline-block size-2 rounded bg-fuchsia-400" />
            NEW PROJECTS IN 10 DAYS
          </p>

          <div className="mb-7 mt-3 max-w-7xl text-center text-5xl font-bold tracking-tight md:mb-10 md:text-6xl lg:mb-0 t lg:text-7xl">
            <h1 className="relative z-10 inline-block">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Baki Abdullah
              </span>
            </h1>

            <div className="mt-4 md:mt-6">
              <ContainerTextFlip
                className="text-3xl font-semibold tracking-tighter text-primary md:text-5xl lg:text-6xl"
                words={[
                  "Full-Stack Developer",
                  "UI/UX Enthusiast",
                  "MERN-Stack Developer",
                ]}
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center border border-b-0 border-t-0 border-dashed py-20">
          <div className="w-full max-w-2xl space-y-5 text-center">
            <p className="text-muted-foreground px-5 lg:text-lg">
              I&apos;m passionate about building modern, responsive, and
              user-friendly web applications. With expertise in the{" "}
              <span className="font-semibold text-primary">MERN stack</span>, I
              focus on delivering clean code and scalable solutions for
              real-world problems.
            </p>
            <Button className="mx-5 h-12 rounded-lg">View My Projects</Button>
          </div>
        </div>

        <ul className="mx-auto grid w-full max-w-5xl grid-cols-1 border border-b-0 border-dashed md:grid-cols-2 lg:grid-cols-3">
          <li className="flex h-full items-center justify-between gap-6 px-5 py-6 md:gap-3 lg:justify-center">
            <div className="bg-muted flex size-12 items-center justify-center rounded-lg">
              <Zap className="text-muted-foreground size-6" />
            </div>
            <p className="text-muted-foreground text-lg">
              2+ Years of Coding Experience
            </p>
          </li>
          <li className="flex h-full items-center justify-between gap-6 border-l border-t border-dashed px-5 py-6 md:gap-3 lg:justify-center lg:border-t-0">
            <div className="bg-muted flex size-12 items-center justify-center rounded-lg">
              <Users className="text-muted-foreground size-6" />
            </div>
            <p className="text-muted-foreground text-lg">
              Worked with 20+ Clients Worldwide
            </p>
          </li>
          <li className="col-span-1 flex h-full items-center justify-between gap-6 border-l border-t border-dashed px-5 py-6 md:col-span-2 md:justify-center md:gap-3 lg:col-span-1 lg:border-t-0">
            <div className="bg-muted flex size-12 items-center justify-center rounded-lg">
              <TrendingUp className="text-muted-foreground size-6" />
            </div>
            <p className="text-muted-foreground text-lg">
              Built 30+ Projects Successfully
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { HeroSection };
