"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Code, Cloud, Brain, Wrench } from "lucide-react";

type Category = {
  title: string;
  Icon: React.ComponentType<{ className?: string }>;
  items: string[];
  code?: string;
  note?: string;
};

const categories: Category[] = [
  {
    title: "Backend",
    Icon: Code,
    items: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Authentication & RBAC",
      "CORS",
      "PostgreSQL",
      "MySQL",
    ],
    code: `@RestController
public class UserController {

  @GetMapping("/users")
  public List<User> getUsers() {
    return userService.findAll();
  }
}`,
  },
  {
    title: "Cloud & DevOps",
    Icon: Cloud,
    items: [
      "AWS (EC2, S3, RDS, EKS)",
      "Docker",
      "Docker Compose",
      "Linux",
      "Networking",
      "CI/CD (GitHub Actions)",
    ],
    code: `$ docker compose up -d
[+] Running 3/3
 ✔ api   Started
 ✔ db    Started
 ✔ web   Started`,
  },
  {
    title: "AI Integration",
    Icon: Brain,
    items: [
      "Python",
      "FastAPI",
      "RAG (LlamaIndex)",
      "FAISS",
      "Hugging Face Transformers",
      "LangFuse (Observability)",
      "SigNoz (explored)",
    ],
    code: `from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "AI"}`,
  },
  {
    title: "Tools",
    Icon: Wrench,
    items: [
      "Git & GitHub",
      "VS Code",
      "Postman",
      "React + Vite + Tailwind",
      "Jupyter / Colab",
      "Figma (UI/UX)",
      "Canva (designs)",
    ],
    note: "continuous learning ♡",
  },
];


function TypedCode({ code }: { code: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(code.length);
      return;
    }
    const id = setInterval(() => {
      setCount((c) => {
        if (c >= code.length) {
          clearInterval(id);
          return c;
        }
        return c + 1;
      });
    }, 22);
    return () => clearInterval(id);
  }, [inView, code]);

  const cls =
    "whitespace-pre overflow-x-auto p-3 text-xs leading-relaxed";

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-lg border border-line bg-bg"
    >
      <pre aria-hidden className={`${cls} invisible`}>
        {code}
      </pre>
      <pre className={`${cls} absolute inset-0 text-accent/90`}>
        {code.slice(0, count)}
        {count < code.length && (
          <span className="inline-block h-3 w-1.5 animate-pulse bg-accent align-middle" />
        )}
      </pre>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      {/* heading */}
      <div className="relative">
        <motion.h2
          className="font-hand text-5xl sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        <motion.p
          className="mt-2 font-hand text-2xl text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Tools I use. Systems I love.
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

      {/* cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {categories.map((c, i) => (
          <motion.article
            key={c.title}
            className="group rounded-xl border border-line bg-panel/70 p-5 transition-colors hover:border-accent hover:shadow-[0_0_30px_rgba(110,231,183,0.15)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-bg">
                <c.Icon className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-lg font-semibold">{c.title}</h3>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <ul className="space-y-2 text-sm text-text/90">
                {c.items.map((item, t) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + t * 0.07 }}
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {c.code ? (
                <TypedCode code={c.code} />
              ) : (
                <div className="flex items-end justify-center sm:justify-end">
                  <motion.p
                    className="-rotate-6 font-hand text-2xl text-muted"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {c.note}
                  </motion.p>
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}