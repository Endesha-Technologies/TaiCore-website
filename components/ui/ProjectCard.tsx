"use client";

import { motion } from "framer-motion";

export interface Project {
  title: string;
  description: string;
  category: string;
  tech: string[];
  metric: string;
  metricLabel: string;
  mockup: "dashboard" | "mobile" | "terminal" | "chart";
}

function Mockup({ type }: { type: Project["mockup"] }) {
  const base = "w-full h-full bg-gray-800 p-5 flex flex-col gap-3";

  if (type === "dashboard") {
    return (
      <div className={base}>
        <div className="flex gap-1.5 mb-1">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/15" />
          <div className="w-2 h-2 rounded-full bg-white/10" />
        </div>
        <div className="flex gap-3 mt-1">
          <div className="flex-1 bg-white/8 rounded-lg p-3 border border-white/10">
            <div className="w-8 h-2 bg-primary/50 rounded mb-2" />
            <div className="w-12 h-4 bg-white/20 rounded" />
          </div>
          <div className="flex-1 bg-white/8 rounded-lg p-3 border border-white/10">
            <div className="w-8 h-2 bg-white/20 rounded mb-2" />
            <div className="w-12 h-4 bg-white/20 rounded" />
          </div>
        </div>
        <div className="flex-1 bg-white/5 rounded-lg p-3 border border-white/10">
          <div className="flex gap-1 items-end h-full">
            {[40, 65, 45, 80, 55, 70, 90, 60].map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t ${i === 6 ? "bg-primary/70" : "bg-white/20"}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === "mobile") {
    return (
      <div className={`${base} items-center justify-center`}>
        <div className="w-28 bg-white/8 rounded-2xl p-3 border border-white/15">
          <div className="w-8 h-1 bg-white/25 rounded mx-auto mb-3" />
          <div className="space-y-2">
            <div className="bg-white/10 rounded-lg p-2 border border-white/10">
              <div className="w-full h-2 bg-white/20 rounded" />
              <div className="w-2/3 h-2 bg-white/10 rounded mt-1" />
            </div>
            <div className="bg-white/10 rounded-lg p-2 border border-white/10">
              <div className="w-full h-2 bg-white/20 rounded" />
              <div className="w-1/2 h-2 bg-white/10 rounded mt-1" />
            </div>
            <div className="bg-primary/30 rounded-lg p-2 text-center border border-primary/20">
              <div className="w-12 h-2 bg-primary/60 rounded mx-auto" />
            </div>
          </div>
          <div className="w-6 h-6 bg-white/10 rounded-full mx-auto mt-3 border border-white/15" />
        </div>
      </div>
    );
  }

  if (type === "terminal") {
    return (
      <div className={base}>
        <div className="bg-black/40 rounded-lg p-4 h-full border border-white/10 font-mono text-xs">
          <div className="flex gap-1.5 mb-3">
            <div className="w-2 h-2 rounded-full bg-red-400/50" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
            <div className="w-2 h-2 rounded-full bg-green-400/50" />
          </div>
          <div className="space-y-2">
            <div className="flex gap-2 items-center">
              <span className="text-primary/80">$</span>
              <div className="w-24 h-1.5 bg-white/15 rounded" />
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-white/30">›</span>
              <div className="w-32 h-1.5 bg-white/10 rounded" />
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-green-400/60">✓</span>
              <div className="w-20 h-1.5 bg-primary/20 rounded" />
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-primary/80">$</span>
              <div className="w-16 h-1.5 bg-white/10 rounded" />
              <div className="w-1.5 h-3 bg-primary/60 rounded-sm animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // chart
  return (
    <div className={`${base}`}>
      <div className="flex justify-between items-center">
        <div className="w-16 h-2 bg-white/20 rounded" />
        <div className="w-10 h-2 bg-primary/40 rounded" />
      </div>
      <div className="flex-1 flex items-end gap-1.5 px-1">
        {[30, 50, 35, 70, 45, 85, 60, 75, 90, 55].map((h, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end h-full">
            <div
              className={`rounded-t ${i === 6 ? "bg-primary/70" : "bg-white/15"}`}
              style={{ height: `${h}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-primary/60" />
          <div className="w-10 h-1.5 bg-white/15 rounded" />
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-10 h-1.5 bg-white/10 rounded" />
        </div>
      </div>
    </div>
  );
}

export default function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      {/* Mockup Area */}
      <div className="h-36 overflow-hidden relative">
        <div className="group-hover:scale-105 transition-transform duration-500 h-full">
          <Mockup type={project.mockup} />
        </div>
        {/* Glassmorphism overlay on mockup bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-black/30 to-transparent" />
        {/* Category Badge */}
        <div
          className="absolute top-3 right-3 px-3 py-1 text-xs font-bold text-gray-900 rounded-full"
          style={{
            background: "rgba(234,179,8,0.9)",
            backdropFilter: "blur(8px)",
          }}
        >
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-sm font-extrabold text-gray-900 leading-snug group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed">
          {project.description}
        </p>
      </div>


    </motion.div>
  );
}
