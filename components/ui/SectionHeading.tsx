"use client";

import AnimateOnScroll from "./AnimateOnScroll";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <AnimateOnScroll className="text-center mb-16">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
        {title}
      </h2>
      <div className="w-16 h-1.5 bg-primary mx-auto mb-5 rounded-full" />
      {subtitle && (
        <p className="text-base text-gray-600 max-w-2xl mx-auto font-bold">
          {subtitle}
        </p>
      )}
    </AnimateOnScroll>
  );
}
