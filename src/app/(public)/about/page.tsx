import { Briefcase, Star, UserCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - My Portfolio",
  description: "Learn more about me, my skills, and my work experience.",
};

const AboutPage = () => {
  return (
    <section className="relative min-h-screen py-24 px-6 lg:px-12 bg-gradient-to-br from-slate-950 via-fuchsia-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400 md:text-6xl font-extrabold tracking-tight">
            About{" "}
            {/* <span className="bg-gradient-to-r from-pink-500 to-fuchsia-600 bg-clip-text text-transparent"> */}
            Me
            {/* </span> */}
          </h2>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">
            A passionate developer crafting modern, user-friendly, and scalable
            web applications. Always exploring new tech & delivering real-world
            solutions.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Personal Info */}
          <div className="relative rounded-2xl bg-gradient-to-br from-fuchsia-100 via-white to-pink-100 bg-white/60 backdrop-blur-lg shadow-lg border border-white/30 p-8 hover:scale-105 hover:shadow-fuchsia-200 transition">
            <div className="flex items-center gap-3 mb-6">
              <UserCircle className="w-8 h-8 text-fuchsia-600" />
              <h3 className="text-xl font-semibold text-fuchsia-700">
                Personal Info
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="font-semibold">👤 Name:</span> Baki Abdullah
              </li>
              <li>
                <span className="font-semibold">📧 Email:</span>{" "}
                baki@example.com
              </li>
              <li>
                <span className="font-semibold">📱 Phone:</span> +8801703699999
              </li>
              <li>
                <span className="font-semibold">📍 Location:</span> Dhaka,
                Bangladesh
              </li>
            </ul>
          </div>

          {/* Work Experience */}
          <div className="relative rounded-2xl bg-gradient-to-bl from-fuchsia-100 via-white to-pink-100 bg-white/60 backdrop-blur-lg shadow-lg border border-white/30 p-8 hover:scale-105 hover:shadow-fuchsia-200 transition">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-8 h-8 text-fuchsia-600" />
              <h3 className="text-xl font-semibold text-fuchsia-700">
                Work Experience
              </h3>
            </div>
            <div className="space-y-5">
              <div>
                <p className="font-semibold text-gray-900">
                  🚀 Full-Stack Developer
                </p>
                <p className="text-sm text-gray-500">
                  Freelance (2022 - Present)
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  💻 MERN Stack Intern
                </p>
                <p className="text-sm text-gray-500">
                  XYZ Company (2021 - 2022)
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="relative rounded-2xl bg-gradient-to-br from-fuchsia-100 via-white to-pink-100 bg-white/60 backdrop-blur-lg shadow-lg border border-white/30 p-8 hover:scale-105 hover:shadow-fuchsia-200 transition">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-8 h-8 text-fuchsia-600" />
              <h3 className="text-xl font-semibold text-fuchsia-700">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Express",
                "MongoDB",
                "Prisma",
                "TailwindCSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white shadow-md hover:shadow-lg hover:scale-105 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
