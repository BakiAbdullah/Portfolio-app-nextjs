"use client";
import {
  ChevronRight,
  Clock,
  Code2,
  ExternalLink,
  Eye,
  Github,
  Sparkles,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";


const ProjectShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Sample projects data - replace with your actual data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, secure payment processing, and admin dashboard.",
      thumbnail:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
      stats: { views: "2.5K", stars: 128, duration: "3 months" },
    },
    {
      id: 2,
      title: "AI Task Manager",
      description:
        "Smart task management app with AI-powered priority suggestions and automated scheduling.",
      thumbnail:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      tags: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL"],
      category: "frontend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
      stats: { views: "1.8K", stars: 95, duration: "2 months" },
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for tracking social media performance across multiple platforms with real-time data visualization.",
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tags: ["Vue.js", "D3.js", "Express", "Redis"],
      category: "fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
      stats: { views: "3.2K", stars: 156, duration: "4 months" },
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description:
        "Beautiful weather application with 7-day forecasts, interactive maps, and severe weather alerts.",
      thumbnail:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      tags: ["React Native", "API Integration", "Redux"],
      category: "mobile",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
      stats: { views: "1.2K", stars: 67, duration: "6 weeks" },
    },
    {
      id: 5,
      title: "Portfolio CMS",
      description:
        "Content management system specifically designed for portfolio websites with drag-and-drop interface.",
      thumbnail:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
      tags: ["Next.js", "Prisma", "TailwindCSS"],
      category: "fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true,
      stats: { views: "4.1K", stars: 203, duration: "5 months" },
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description:
        "Comprehensive fitness tracking application with workout plans, nutrition tracking, and progress analytics.",
      thumbnail:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
      tags: ["Flutter", "Firebase", "ML Kit"],
      category: "mobile",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
      stats: { views: "2.9K", stars: 142, duration: "3 months" },
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "fullstack",
      label: "Full Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "frontend",
      label: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
    {
      id: "mobile",
      label: "Mobile",
      count: projects.filter((p) => p.category === "mobile").length,
    },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-fuchsia-950 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-fuchsia-400" />
          <span className="text-fuchsia-300 text-sm font-medium">
            Featured Work
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          My Projects
        </h1>

        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
          Exploring the intersection of design and technology through innovative
          solutions
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                selectedFilter === filter.id
                  ? "bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white shadow-lg shadow-fuchsia-500/50 scale-105"
                  : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700"
              }`}
            >
              {filter.label}
              <span className="ml-2 px-2 py-0.5 bg-white/10 rounded-full text-xs">
                {filter.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2 transform rotate-3">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-bold">Featured</span>
                  </div>
                </div>
              )}

              <div className="relative flex flex-col h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-700/50 hover:border-fuchsia-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-fuchsia-500/20 hover:scale-[1.02]">
                {/* Thumbnail */}
                <div className="relative flex-shrink-0 h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
                  <Image
                    width={400}
                    height={300}
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-fuchsia-900/90 via-fuchsia-900/50 to-transparent z-20 transition-opacity duration-300 ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white text-slate-900 px-4 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-fuchsia-100 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-800/80 backdrop-blur-sm text-white px-4 py-3 rounded-xl font-semibold flex items-center justify-center hover:bg-slate-700 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-400">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{project.stats.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{project.stats.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl line-clamp-2 min-h-[45px] font-bold text-white mb-3 group-hover:text-fuchsia-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 mb-4 line-clamp-3 min-h-[72px]">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4 min-h-[30px]">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 h-fit bg-fuchsia-500/10 text-fuchsia-300 text-xs font-medium rounded-full border border-fuchsia-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Details Link */}
                  <button className="text-fuchsia-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all group/btn mt-auto">
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-transparent to-pink-500/5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Section */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-fuchsia-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
            <Code2 className="w-5 h-5" />
            View All Projects on GitHub
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectShowcase;
