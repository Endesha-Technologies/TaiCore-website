"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";

const categories = ["All", "Web App", "Mobile"];

interface Project {
  title: string;
  description: string;
  category: "Web App" | "Mobile";
  screenshot?: string; // Path to screenshot image
  liveDemo?: string; // Optional live demo URL
  tech: string[];
}

const projects: Project[] = [
  // Example with screenshot only
  {
    title: "Project Name 1",
    description: "Brief description of what this product does and the problem it solves.",
    category: "Web App",
    screenshot: "/screenshots/project1.png", // Add your screenshot path
    tech: ["Next.js", "Node.js", "PostgreSQL"],
  },
  // Example with live demo link
  {
    title: "Project Name 2",
    description: "Brief description of what this product does and the problem it solves.",
    category: "Mobile",
    liveDemo: "https://demo.example.com",
    tech: ["React Native", "Firebase"],
  },
  // Add more projects here
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Our Work"
          subtitle="Products we've built, scaled, and shipped."
        />

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-primary text-gray-900"
                  : "text-gray-500 hover:text-gray-900 border border-gray-200 hover:border-gray-300 bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Screenshot or Placeholder */}
                <div className="relative h-56 bg-gray-100 overflow-hidden">
                  {project.screenshot ? (
                    <Image
                      src={project.screenshot}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-900 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Live Demo Button */}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300"
                    >
                      View Live Demo
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
