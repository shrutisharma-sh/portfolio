"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EMAIL = "shrutish8439@gmail.com"; 
const GITHUB = "https://github.com/shrutisharma-sh";
const LINKEDIN = "https://www.linkedin.com/in/shrutisharma812"; 

const links = [
  { label: "GitHub", href: GITHUB, Icon: FaGithub },
  { label: "LinkedIn", href: LINKEDIN, Icon: FaLinkedin },
  { label: "Email", href: `mailto:${EMAIL}`, Icon: Mail },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }
  

  return (
    <>
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <div className="relative">
          <motion.h2
            className="font-hand text-5xl sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let&apos;s Connect
          </motion.h2>
          <motion.p
            className="mt-2 font-hand text-2xl text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Open to internships, collabs and good conversations.
          </motion.p>
          <motion.img
            src="/collage/doodles/cloud.svg"
            alt=""
            aria-hidden
            className="pointer-events-none absolute right-4 top-0 hidden w-24 sm:block"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          className="mt-10 min-w-0 overflow-hidden rounded-xl border border-line bg-panel shadow-[0_0_40px_rgba(110,231,183,0.08)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          {/* window bar */}
          <div className="flex items-center gap-2 border-b border-line bg-bg/60 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <div className="space-y-5 p-5 text-sm sm:text-base">
            <p className="break-words">
              <span className="text-accent">shruti@portfolio:~$</span> cat contact.txt
            </p>
            <p className="max-w-xl leading-relaxed text-text/90">
              Got an idea, an opportunity, or just want to talk backend and
              cloud? My inbox is open.
            </p>

            {/* email copy */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="break-all text-accent underline-offset-4 hover:underline"
              >
                {EMAIL}
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs transition hover:border-accent hover:text-accent"
                aria-label="Copy email address"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            {/* social links */}
            <div className="flex flex-wrap gap-3 pt-2">
              {links.map(({ label, href, Icon }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg border border-line bg-bg px-4 py-3 transition-colors hover:border-accent hover:text-accent hover:shadow-[0_0_18px_rgba(110,231,183,0.35)]"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -3 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <Icon className="text-lg" />
                  {label}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </motion.a>
              ))}
            </div>

            <p>
              <span className="text-accent">shruti@portfolio:~$</span>{" "}
              <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-accent" />
            </p>
          </div>
        </motion.div>
      </section>

      {/* footer */}
      <footer className="border-t border-line/60 px-6 py-8 text-center text-sm text-muted">
        <p className="font-hand text-2xl text-text/80">build. ship. improve.</p>
        <p className="mt-2">
  © 2026 Shruti Sharma
</p>
      </footer>
    </>
  );
}