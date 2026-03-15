"use client";

import AnimateOnScroll from "./ui/AnimateOnScroll";
import SectionHeading from "./ui/SectionHeading";

const valueProps = [
  {
    title: "Senior Engineers Only",
    description:
      "Every project is staffed with experienced engineers. No juniors, no handoffs, no surprises.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: "Transparent Pricing",
    description:
      "Fixed-price contracts with clear milestones. You know exactly what you're paying for.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "On-Time Delivery",
    description:
      "We ship on schedule. Our average MVP delivery is 8 weeks from kickoff to launch.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="About Us"
          subtitle="Built for clients. Open to collaborators. Delivered on time, every time."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <AnimateOnScroll direction="left">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                TaiCore is a technology company focused on helping businesses build, launch, and scale modern digital solutions. We work with startups, entrepreneurs, and growing organizations to transform ideas into reliable software products that deliver real value.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our expertise spans full-stack web development, mobile application development, cloud-based systems, and intelligent software integrations. From early prototypes to fully deployed platforms, we design and build technology that is secure, scalable, and built for long-term growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                At TaiCore, we believe that great technology is more than just code. It is about solving real problems, improving efficiency, and creating seamless digital experiences. Our team combines strong engineering practices with a practical understanding of business needs to deliver solutions that work in the real world.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether it&apos;s building a new platform, modernizing an existing system, or integrating advanced technologies, TaiCore partners with clients to turn ideas into powerful digital products.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Right Column - Value Props */}
          <div className="space-y-8">
            {valueProps.map((prop, i) => (
              <AnimateOnScroll key={prop.title} delay={i * 0.12}>
                <div className="flex items-start gap-4 group">
                  <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {prop.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {prop.title}
                    </h3>
                    <p className="text-gray-600">{prop.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
