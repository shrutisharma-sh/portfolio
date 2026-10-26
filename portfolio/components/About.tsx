"use client";

import { motion } from "motion/react";
import { MapPin, GraduationCap, CircleDot } from "lucide-react";

const journey = [
  { year: "2024", text: "Joined GBPUAT - B.Tech (IPE)" },
  { year: "2025", text: "Started backend & web development" },
  { year: "2026", text: "Explored cloud, DevOps, AI & system design" },
  { year: "2027", text: "GSoC 2027 (Goal)" },
];

const currently = [
  "Building NextStep AI",
  "Learning FastAPI + RAG",
  "Exploring AWS",
  "Working on hackathons",
  "Growing every day :)",
];

const info = [
  { Icon: MapPin, text: "Pantnagar, Uttarakhand" },
  { Icon: GraduationCap, text: "B.Tech (IPE) 2024 - 2028" },
  { Icon: CircleDot, text: "Open to opportunities" },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
        {/* LEFT: polaroid + sticky note */}
        <motion.div
          className="relative mx-auto w-full max-w-xs"
          initial={{ opacity: 0, y: 40, rotate: -6 }}
          whileInView={{ opacity: 1, y: 0, rotate: -3 }}
          whileHover={{ rotate: 0, scale: 1.03 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 90, damping: 14 }}
        >
          <div className="relative bg-paper p-3 pb-10 shadow-2xl">
            <div className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3 bg-paper/70 shadow-sm" />
            <img
              src="/frontface.jpeg"
              alt="Shruti Sharma"
              className="aspect-[4/5] w-full bg-panel object-cover"
            />
          </div>

          <motion.div
            className="absolute -bottom-6 -right-4 w-36 rotate-6 bg-paper p-3 font-hand text-xl leading-tight text-[#17352e] shadow-xl"
            whileHover={{ rotate: [6, 2, 9, 6] }}
            transition={{ duration: 0.5 }}
          >
            building a kinder internet ♡
          </motion.div>
        </motion.div>

        {/*  text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-hand text-5xl text-text sm:text-6xl">About Me</h2>
          <p className="mt-5 leading-relaxed text-text/90">
            I&apos;m Shruti Sharma, a 3rd year Industrial &amp; Production
            Engineering student at GBPUAT, Pantnagar. I&apos;m passionate about
            building scalable systems, cloud infrastructure and AI-powered
            solutions. I enjoy turning ideas into real products and learning
            through hands-on projects.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-muted">
            {info.map(({ Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <Icon className="h-4 w-4 text-accent" />
                {text}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/*  currently */}
      <div className="mt-20 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        {/*timeline */}
        <div>
          <h3 className="font-hand text-4xl">My Journey</h3>

          <div className="relative mt-8 pl-8">
            
            <motion.div
              className="absolute left-[7px] top-1 h-[calc(100%-0.5rem)] w-0.5 origin-top bg-accent/60"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            <ul className="space-y-8">
              {journey.map((item, i) => (
                <motion.li
                  key={item.year}
                  className="relative flex gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: 0.3 + i * 0.25 }}
                >
                  <motion.span
                    className="absolute -left-8 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-bg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      delay: 0.3 + i * 0.25,
                    }}
                  />
                  <span className="w-12 font-semibold text-accent">
                    {item.year}
                  </span>
                  <span className="text-text/90">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Currently sticky note */}
        <motion.div
          className="mx-auto w-full max-w-sm self-start bg-paper p-6 text-[#17352e] shadow-2xl"
          initial={{ opacity: 0, y: 40, rotate: 6 }}
          whileInView={{ opacity: 1, y: 0, rotate: 2 }}
          whileHover={{ rotate: 0, scale: 1.03 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 90, damping: 14 }}
        >
          <h3 className="font-hand text-3xl">Currently...</h3>
          <ul className="mt-3 space-y-2 font-hand text-2xl">
            {currently.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                <motion.span
                  className="flex h-5 w-5 items-center justify-center border-2 border-[#17352e] text-sm leading-none"
                  initial={{ backgroundColor: "rgba(23,53,46,0)" }}
                  whileInView={{ backgroundColor: "rgba(23,53,46,1)" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.4, duration: 0.3 }}
                >
                  <motion.span
                    className="text-paper"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + i * 0.4 }}
                  >
                    ✓
                  </motion.span>
                </motion.span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}