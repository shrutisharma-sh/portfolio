"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

const links = ["home", "about", "projects", "skills", "certificates", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-50% 0px -50% 0px" }
    );
    links.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold tracking-wide">
          <span className="text-accent">&gt;_</span> Shruti Sharma
        </a>

        {/* Desktop links */}
        <ul className="hidden gap-8 md:flex">
          {links.map((id) => (
            <li key={id} className="relative">
              <a
                href={`#${id}`}
                className={`capitalize transition-colors hover:text-accent ${
                  active === id ? "text-accent" : "text-text"
                }`}
              >
                {id}
              </a>
              {active === id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-accent"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-4 border-t border-line/60 bg-bg px-6 py-4 md:hidden">
          {links.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`capitalize ${active === id ? "text-accent" : ""}`}
              >
                {id}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}