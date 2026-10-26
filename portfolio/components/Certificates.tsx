"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Trophy,
  GitBranch,
  GraduationCap,
  ExternalLink,
  Expand,
  X,
} from "lucide-react";

type Category = "Hackathons" | "Open Source" | "Courses";

type Cert = {
  title: string;
  issuer: string;
  date: string;
  category: Category;
  image?: string; 
  link?: string;
};


const certs: Cert[] = [
  {
    title: " Women Who Master Hackathon - Participant",
    issuer: "Logitech and Aspire for her",
    date: "2026",
    category: "Hackathons",
    image: "/certi.jpeg",
    
  },
  {
    title: "Open Source Contribution",
    issuer: "Girl Script Summer of Code",
    date: "2026",
    category: "Open Source",
    image: "/certi2.png",
    link:"https://gssoc.girlscript.org/profile/53b2f9b8-b8c1-49d5-9e63-29dcdfde527f"
  },
  // {
  //   title: "AWS Cloud Practitioner Essentials",
  //   issuer: "AWS Training",
  //   date: "2026",
  //   category: "Courses",
  // },
  // {
  //   title: "Another Hackathon",
  //   issuer: "Organizer",
  //   date: "2026"",
  //   category: "Hackathons",
  // },
];

const icons = {
  Hackathons: Trophy,
  "Open Source": GitBranch,
  Courses: GraduationCap,
};

export default function Certificates() {
  const [selected, setSelected] = useState<Cert | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section id="certificates" className="mx-auto max-w-6xl px-6 py-24">
      {/* heading */}
      <div className="relative">
        <motion.h2
          className="font-hand text-5xl sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Certificates
        </motion.h2>
        <motion.p
          className="mt-2 font-hand text-2xl text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Proof of showing up and learning.
        </motion.p>
        <motion.img
          src="/collage/doodles/star.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-6 top-0 hidden w-12 sm:block"
          animate={{ rotate: [0, 12, 0], y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <p className="mt-6 font-hand text-xl text-muted lg:hidden">swipe →</p>

      
      <div className="-mx-6 mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 lg:mx-0 lg:mt-10 lg:overflow-visible lg:px-0 lg:pb-0">
        {certs.map((c, i) => {
          const Icon = icons[c.category];
          return (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative h-[26rem] w-[17rem] shrink-0 snap-center overflow-hidden rounded-xl border border-line bg-panel transition-[flex-grow,border-color,box-shadow] duration-500 hover:border-accent hover:shadow-[0_0_30px_rgba(110,231,183,0.2)] focus-within:border-accent lg:w-auto lg:min-w-0 lg:flex-[1_1_0%] lg:hover:flex-[2.4_1_0%] lg:focus-within:flex-[2.4_1_0%]"
            >
              
              {c.image ? (
                <img
                  src={c.image}
                  alt={c.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="absolute inset-0 flex items-start justify-center bg-gradient-to-b from-bg to-panel pt-20">
                  <Icon className="h-14 w-14 text-accent transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6" />
                </div>
              )}

             
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-transparent" />

              
              <span className="absolute left-4 top-3 font-hand text-4xl text-accent/70">
                0{i + 1}
              </span>

              {/* enlarge */}
              {c.image && (
                <button
                  onClick={() => setSelected(c)}
                  className="absolute right-3 top-3 rounded-full border border-line bg-bg/70 p-2 opacity-100 backdrop-blur transition hover:border-accent hover:text-accent lg:opacity-0 lg:group-hover:opacity-100 lg:focus:opacity-100"
                  aria-label={`View ${c.title}`}
                >
                  <Expand className="h-4 w-4" />
                </button>
              )}

              {/* text */}
              <div className="absolute inset-x-0 bottom-0 min-w-0 p-5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg/70 px-2.5 py-0.5 text-xs text-accent">
                  <Icon className="h-3 w-3" />
                  {c.category}
                </span>
                <h3 className="mt-3 line-clamp-3 break-words font-semibold leading-snug">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {c.issuer} · {c.date}
                </p>

                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm text-accent transition-all hover:underline lg:max-h-0 lg:overflow-hidden lg:opacity-0 lg:group-hover:max-h-8 lg:group-hover:opacity-100"
                  >
                    Verify
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>

      
      <AnimatePresence>
        {selected?.image && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-bg/90 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute right-4 top-4 rounded-full border border-line bg-panel p-2 hover:border-accent hover:text-accent"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              src={selected.image}
              alt={selected.title}
              className="max-h-[85vh] max-w-full rounded-lg border border-line shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}