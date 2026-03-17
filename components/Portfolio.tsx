"use client";

import { useState } from "react";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";

const categories = ["All", "Web App", "Mobile"];

interface Project {
  title: string;
  description: string;
  category: "Web App" | "Mobile";
  screenshot?: string | string[]; // Can be single screenshot or array of screenshots
  liveDemo?: string; // Optional live demo URL
  tech: string[];
}

const projects: Project[] = [
  // School Management System
  {
    title: "Bishop Cipriano Kihangire School Management System",
    description: "Comprehensive school management platform for Bishop Cipriano Kihangire Secondary School, featuring student information management, academic tracking, fee structure display, and parent testimonials. Streamlines school administration and enhances communication between school, students, and parents.",
    category: "Web App",
    liveDemo: "https://schoolmanagementsystemgroupwork.netlify.app/",
    screenshot: "/schoolmanagement.PNG",
    tech: [],
  },
  // NIFE Transport Services
  {
    title: "NIFE Transport Services LLC",
    description: "Professional freight shipping and trucking platform offering comprehensive logistics solutions. Features real-time GPS tracking, diverse fleet management (flatbeds to reefers), and 24/7 customer support. Solves complex supply chain challenges with 98% on-time delivery, handling 28+ specialized freight types for businesses across North America.",
    category: "Web App",
    liveDemo: "https://nife-transport-services-virid.vercel.app/",
    screenshot: "/nife.PNG",
    tech: [],
  },
  // Fleet Management System
  {
    title: "Fleet Management System",
    description: "A truck fleet management platform integrated with Wialon, featuring real-time vehicle tracking and modules for maintenance, inventory, and tyre lifecycle management. Built to give fleet operators full visibility and control over their trucks at all times.",
    category: "Web App",
    screenshot: ["/fleet management1.jpeg", "/fleetmanagement2.jpeg"],
    tech: [],
  },
  // Inventory Management System
  {
    title: "Inventory Management System",
    description: "A straightforward inventory management solution built for small to medium-sized stores. Designed to simplify stock tracking, reduce manual errors, and keep business owners in control of their inventory with ease.",
    category: "Web App",
    screenshot: "/inventory.jpeg",
    tech: [],
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageTitle, setSelectedImageTitle] = useState<string>("");
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [totalImages, setTotalImages] = useState<number>(1);
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  const openImageModal = (imageSrc: string, title: string, index: number = 0, total: number = 1) => {
    setSelectedImage(imageSrc);
    setSelectedImageTitle(title);
    setImageIndex(index);
    setTotalImages(total);
    setImageLoading(true); // Start loading state
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setSelectedImageTitle("");
    setImageIndex(0);
    setTotalImages(1);
    setImageLoading(true);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageLoading(false);
  };

  const handleDownloadImage = async () => {
    if (!selectedImage) return;
    
    try {
      const response = await fetch(selectedImage);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${selectedImageTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage) {
        if (event.key === 'Escape') {
          closeImageModal();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      // Cleanup: restore scroll on unmount
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

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
                    Array.isArray(project.screenshot) ? (
                      // Multiple screenshots - show as a carousel/grid
                      <div className="flex h-full">
                        {project.screenshot.map((img, index) => (
                          <div 
                            key={index} 
                            className="relative flex-1 min-w-0 cursor-pointer group/image"
                            onClick={() => openImageModal(img, `${project.title} - Screenshot ${index + 1}`, index, project.screenshot.length)}
                          >
                            <Image
                              src={img}
                              alt={`${project.title} - Screenshot ${index + 1}`}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            {/* Screenshot indicator */}
                            {project.screenshot.length > 1 && (
                              <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                                {index + 1}/{project.screenshot.length}
                              </div>
                            )}
                            {/* Click to zoom indicator */}
                            <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover/image:opacity-100">
                              <div className="bg-white/90 rounded-full p-2">
                                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      // Single screenshot
                      <div 
                        className="relative w-full h-full cursor-pointer group/image"
                        onClick={() => openImageModal(project.screenshot as string, project.title, 0, 1)}
                      >
                        <Image
                          src={project.screenshot}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Click to zoom indicator */}
                        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover/image:opacity-100">
                          <div className="bg-white/90 rounded-full p-2">
                            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )
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

                  {/* Tech Stack - Only show if tech array has items */}
                  {project.tech.length > 0 && (
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
                  )}

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

        {/* Professional Image Modal/Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center"
              onClick={closeImageModal}
            >
              {/* Modal Header */}
              <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/50 to-transparent p-6">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                  {/* Back Button */}
                  <button
                    onClick={closeImageModal}
                    className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </div>
                    <span className="font-medium">Back to Portfolio</span>
                  </button>

                  {/* Image Info */}
                  <div className="text-center text-white/90">
                    <h3 className="text-lg font-semibold">{selectedImageTitle}</h3>
                    {totalImages > 1 && (
                      <p className="text-sm text-white/70 mt-1">
                        Image {imageIndex + 1} of {totalImages}
                      </p>
                    )}
                  </div>

                  {/* Header Actions */}
                  <div className="flex items-center gap-3">
                    {/* Download Button */}
                    <button
                      onClick={handleDownloadImage}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 text-white/90 hover:text-white"
                      title="Download image"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>

                    {/* Close Button */}
                    <button
                      onClick={closeImageModal}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 text-white/90 hover:text-white"
                      title="Close (Esc)"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Image Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-[95vw] max-h-[85vh] w-full h-full mx-4 mt-20 mb-4"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image with proper loading state */}
                <div className="relative w-full h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  {/* Regular img tag for right-click functionality */}
                  <img
                    src={selectedImage}
                    alt={selectedImageTitle}
                    className="w-full h-full object-contain"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                  
                  {/* Loading overlay - only show when loading */}
                  {imageLoading && (
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <p className="text-white/70 text-sm">Loading image...</p>
                      </div>
                    </div>
                  )}
                </div>

              </motion.div>

              {/* Background click area */}
              <div className="absolute inset-0 -z-10" onClick={closeImageModal} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
