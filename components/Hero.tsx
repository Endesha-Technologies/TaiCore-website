"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

const headingContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
};

const wordReveal = {
  hidden: { opacity: 0, y: 48, skewY: 4 },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative px-6 pr-10 md:pr-16 min-h-screen flex items-center overflow-hidden bg-white"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 max-w-7xl mx-auto">
        <div className="absolute top-10 right-10 w-100 h-100 bg-gray-100 rounded-full blur-[100px] opacity-70 animate-pulse" />
        <div
          className="absolute bottom-10 left-10 w-100 h-100 bg-primary rounded-full blur-[100px] opacity-60 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#84CC16 1px, transparent 1px), linear-gradient(90deg, #84CC16 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full py-12 md:py-20 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="text-left space-y-6">

            {/* Pre-headline badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Trusted by 5 companies
            </motion.div>

            {/* Animated heading */}
            <motion.h1
              variants={headingContainer}
              initial="hidden"
              animate="visible"
              className="font-extrabold text-gray-900 leading-tight py-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              <span className="block overflow-hidden">
                {"We Build Software That".split(" ").map((word) => (
                  <motion.span
                    key={word}
                    variants={wordReveal}
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block overflow-hidden relative">
                {"Launches & Scales.".split(" ").map((word) => (
                  <motion.span
                    key={word}
                    variants={wordReveal}
                    className="inline-block mr-[0.2em] text-primary tracking-tight"
                  >
                    {word}
                  </motion.span>
                ))}
                {/* Animated underline */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-1 left-0 h-0.75 w-full bg-primary/40 rounded-full"
                  style={{ transformOrigin: "left" }}
                />
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.35)}
              className="text-gray-900 leading-relaxed max-w-lg font-medium"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
            >
              Taicore delivers full-stack web apps, mobile products, and AI
              integrations for companies moving fast. Professional, reliable,
              and beautifully designed.
            </motion.p>

            <motion.div
              {...fadeUp(0.5)}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#contact"
                className="group bg-primary text-gray-900 px-7 py-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 hover:-translate-y-0.5 transform transition-all duration-300 font-bold text-center text-sm"
              >
                Book a Discovery Call
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>
              <a
                href="#portfolio"
                className="group bg-white text-gray-900 px-7 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold border border-gray-200 hover:border-gray-300 shadow-sm text-center text-sm"
              >
                See Our Work
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>
            </motion.div>

            {/* Divider */}
            <div className="pt-6 pb-2">
              <div className="w-full h-px bg-gray-200 max-w-lg" />
            </div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.65)}
              className="flex items-center gap-8 flex-wrap pt-2"
            >
              {[
                { value: "5+", label: "Products Shipped" },
                { value: "98%", label: "Client Retention" },
                { value: "8 Wks", label: "Avg MVP Delivery" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-extrabold text-gray-900 text-2xl">
                    {stat.value}
                  </div>
                  <div className="text-gray-900 mt-0.5 font-semibold text-xs uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
            className="relative hidden lg:flex lg:items-center lg:justify-center"
            style={{ perspective: "1200px" }}
          >
            <div className="relative w-full max-w-[460px] h-[500px] flex items-center justify-center">

              {/* Depth glow orbs */}
              <div className="absolute inset-0 rounded-full bg-primary/15 blur-[90px] scale-75 pointer-events-none" />
              <div className="absolute right-0 top-1/4 w-40 h-40 bg-blue-300/10 rounded-full blur-[60px] pointer-events-none" />

              {/* ── MAIN 3D PANEL ── */}
              <motion.div
                animate={{ rotateX: [8, 6, 8], rotateY: [-16, -13, -16], y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: "0 50px 100px -20px rgba(0,0,0,0.22), 0 25px 60px -15px rgba(132,204,22,0.2), 0 0 0 1px rgba(0,0,0,0.05)",
                }}
                className="relative w-[300px] bg-white rounded-2xl overflow-hidden"
              >
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-3 py-2.5 bg-gray-50 border-b border-gray-100">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white border border-gray-200 rounded px-2 py-0.5 text-[10px] text-gray-500 text-center">
                    app.taicore.io
                  </div>
                </div>

                {/* Dashboard header */}
                <div className="px-4 pt-3 pb-2 flex items-center justify-between border-b border-gray-50">
                  <div>
                    <div className="text-xs font-extrabold text-gray-900">Live Dashboard</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse block" />
                      <span className="text-[9px] text-gray-400 font-medium">Real-time sync active</span>
                    </div>
                  </div>
                  <span className="bg-primary/10 text-primary text-[9px] font-bold px-2 py-0.5 rounded-full">LIVE</span>
                </div>

                {/* KPI row */}
                <div className="grid grid-cols-3 gap-2 p-3">
                  {[
                    { label: "Users",   value: "12.5K", delta: "▲ 8.2%", color: "text-green-500", bg: "bg-gray-50",    border: "border-gray-100" },
                    { label: "Revenue", value: "$2.5M", delta: "▲ 14%",  color: "text-green-500", bg: "bg-primary/5",  border: "border-primary/20" },
                    { label: "Uptime",  value: "99.9%", delta: "● stable", color: "text-blue-400", bg: "bg-gray-50",  border: "border-gray-100" },
                  ].map((item) => (
                    <div key={item.label} className={`${item.bg} rounded-xl p-2.5 border ${item.border}`}>
                      <div className="text-[9px] text-gray-400 font-semibold uppercase mb-1">{item.label}</div>
                      <div className="text-sm font-extrabold text-gray-900">{item.value}</div>
                      <div className={`text-[9px] font-bold mt-0.5 ${item.color}`}>{item.delta}</div>
                    </div>
                  ))}
                </div>

                {/* 3D bar chart */}
                <div className="px-3 pb-3">
                  <div className="bg-gray-900 rounded-xl p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] text-white/50 uppercase font-semibold tracking-wider">Performance</span>
                      <span className="text-[9px] text-primary font-bold">Last 7 days</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-16">
                      {[45, 62, 48, 78, 55, 88, 72].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end h-full">
                          <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.7, delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                              height: `${h}%`,
                              originY: 1,
                              background: i === 5
                                ? "linear-gradient(to top, rgba(80,150,10,0.85), rgba(132,204,22,0.95))"
                                : "rgba(255,255,255,0.12)",
                            }}
                            className="rounded-t-sm relative"
                          >
                            {/* 3D right-face highlight */}
                            <div
                              className="absolute right-0 top-0 w-1 h-full rounded-tr-sm"
                              style={{ background: i === 5 ? "rgba(55,110,5,0.8)" : "rgba(255,255,255,0.05)" }}
                            />
                            {/* 3D top-face highlight on peak bar */}
                            {i === 5 && (
                              <div
                                className="absolute -top-1 left-0 right-0 h-1 rounded-t-sm"
                                style={{ background: "rgba(180,255,60,0.9)" }}
                              />
                            )}
                          </motion.div>
                        </div>
                      ))}
                    </div>
                    <div className="flex mt-1.5">
                      {["M","T","W","T","F","S","S"].map((d, i) => (
                        <div key={i} className="flex-1 text-center text-[8px] text-white/30 font-medium">{d}</div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom edge gradient — adds depth illusion */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20" />
              </motion.div>

              {/* ── FLOATING CARD: Deploy badge (top-right) ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, x: 12 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute top-8 right-0"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white rounded-2xl px-4 py-3 border border-gray-100"
                  style={{ boxShadow: "0 12px 40px -8px rgba(0,0,0,0.14)" }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-green-50 rounded-xl flex items-center justify-center border border-green-100">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-extrabold text-gray-900">Deploy Successful</div>
                      <div className="text-[9px] text-gray-400 font-medium">v2.4.1 · just now</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* ── FLOATING CARD: AI Insights (bottom-left) ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, x: -12 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute bottom-16 -left-2"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white rounded-2xl px-4 py-3 border border-gray-100"
                  style={{ boxShadow: "0 12px 40px -8px rgba(0,0,0,0.14)" }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-extrabold text-gray-900">AI Insights Ready</div>
                      <div className="flex items-center gap-1 mt-0.5">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ scaleY: [0.4, 1, 0.4] }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                            className="w-1 h-3 bg-primary/60 rounded-full"
                          />
                        ))}
                        <span className="text-[9px] text-gray-400 ml-1">processing</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* ── FLOATING PILL: users online (bottom-right) ── */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.5 }}
                className="absolute bottom-6 right-6"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="bg-gray-900 rounded-full px-3.5 py-2 flex items-center gap-2"
                  style={{ boxShadow: "0 8px 30px -4px rgba(0,0,0,0.35)" }}
                >
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse block" />
                  <span className="text-[10px] text-white font-bold">1,204 online now</span>
                </motion.div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
