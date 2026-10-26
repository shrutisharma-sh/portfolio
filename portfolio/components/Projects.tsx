"use client";

import { motion } from "motion/react";
import { Bot, Package, ShoppingCart, ArrowUpRight, Landmark, Network } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Project = {
  title: string;
  status: "In Progress" | "Completed";
  description: string;
  tags: string[];
  Icon: React.ComponentType<{ className?: string }>;
  api: string;
  repo: string;
};

const projects: Project[] = [
  {
    title: "NextStep AI",
    status: "In Progress",
    description:
      "Multi-agent career intelligence platform with roadmaps, skill graphs, market insights and emotion-aware guidance.",
    tags: ["Spring Boot", "FastAPI", "React", "PostgreSQL", "Docker"],
    Icon: Bot,
    api: `POST /analyze\n{\n  "career": "backend",\n  "target": "senior"\n}`,
    repo: "https://github.com/shrutisharma-sh/nextstep-ai",
  },
  {
  title: "BankMate",
  status: "Completed",
  description:
    "Voice-first banking kiosk that helps elderly and low-literacy customers generate pre-filled withdrawal and mobile-update forms using camera scanning, bilingual voice interaction, and AWS serverless services.",
  tags: ["React", "Vite", "AWS Lambda", "Amazon S3", "API Gateway", "Python"],
  Icon: Landmark,
  api: `POST /scan-passbook\n{\n  "image": "base64_encoded_image"\n}`,
  repo: "https://github.com/shrutisharma-sh/BankMate",
},
{
  title: "LedgerLens",
  status: "Completed",
  description:
    "AI-powered civic investigation agent that uses FalkorDB graph traversal to uncover financial risk signals, hidden relationships, suspicious transfers, recurring complaints, and governance irregularities in housing societies.",
  tags: ["Python", "FalkorDB", "Cypher", "Streamlit", "Groq LLM", "Graph RAG"],
  Icon: Network,
  api: `Graph: ledgerlens\nMATCH path = shortestPath(\n  (fund:ReserveFund)-[:SENT|RECEIVED_BY*]->(trust:Trust)\n)\nRETURN path`,
  repo: "https://github.com/shrutisharma-sh/LedgerLense",
},
  {
    title: "Supply Chain App",
    status: "Completed",
    description:
      "End-to-end supply chain management with AI-based order detection using Hugging Face.",
    tags: ["Spring Boot", "React", "MySQL", "Docker", "Hugging Face"],
    Icon: Package,
    api: `GET /orders\n{\n  "status": "detected"\n}`,
    repo: "https://github.com/shrutisharma-sh/ET-AI-supply-chain",
  },
  {
    title: "E-commerce App",
    status: "Completed",
    description:
      "Full-stack e-commerce platform with cart, orders and JWT authentication.",
    tags: ["Spring Boot", "React", "MySQL", "JWT", "Docker"],
    Icon: ShoppingCart,
    api: `GET /api/products\n{\n  "page": 1,\n  "limit": 10\n}`,
    repo: "https://github.com/shrutisharma-sh/ecom-app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      {/* heading */}
      <div className="relative">
        <motion.h2
          className="font-hand text-5xl sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="mt-2 font-hand text-2xl text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Real problems. Practical solutions.
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
      <div className="mt-10  min-w-0 space-y-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            className="group grid min-w-0 max-w-full grid-cols-[minmax(0,1fr)] gap-5 overflow-hidden rounded-xl border border-line bg-panel/70 p-5 transition-colors hover:border-accent hover:shadow-[0_0_30px_rgba(110,231,183,0.15)] md:grid-cols-[auto_minmax(0,1fr)] lg:grid-cols-[auto_minmax(0,1fr)_14rem]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {/* thumbnail */}
           <div className="flex h-28 w-full min-w-0 items-center justify-center rounded-lg border border-line bg-bg md:w-40">
              <p.Icon className="h-12 w-12 text-accent transition-transform duration-300 group-hover:scale-110" />
            </div>

            {/* info */}
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-xs ${
                    p.status === "Completed"
                      ? "border-accent/60 text-accent"
                      : "border-yellow-400/60 text-yellow-300"
                  }`}
                >
                  {p.status}
                </span>
              </div>

              <p className="mt-2 break-words text-sm leading-relaxed text-text/80">
  {p.description}
</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag, t) => (
                  <motion.span
                    key={tag}
                    className="rounded border border-line bg-bg px-2.5 py-1 text-xs text-accent"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + t * 0.07 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* API snippet ,repo link */}
            <div className="min-w-0 max-w-full md:col-span-2 lg:col-span-1">
  <pre className="max-w-full overflow-x-auto rounded-lg border border-line bg-bg p-3 text-xs leading-relaxed text-muted">
    {p.api}
  </pre>
              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm transition-colors hover:text-accent"
              >
                <FaGithub />
                View Repo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}