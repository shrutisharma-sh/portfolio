"use client";

import { useEffect, useState } from "react";

type Step = { type: "cmd" | "out"; text: string };

const PROMPT = "shruti@portfolio:~$";

const steps: Step[] = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "Shruti Sharma\nBackend & Cloud Enthusiast" },
  { type: "cmd", text: "cat about.txt" },
  {
    type: "out",
    text: "I love building, breaking and fixing things. Currently exploring DevOps, AWS, Docker and everything in between.",
  },
];

export default function Terminal() {
  const [lines, setLines] = useState<Step[]>([]);
  const [typing, setTyping] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const sleep = (ms: number) =>
      new Promise((r) => setTimeout(r, reduce ? 0 : ms));

    async function run() {
      setLines([]);
      setTyping("");
      setDone(false);
      for (const step of steps) {
        if (cancelled) return;
        if (step.type === "cmd") {
          for (let i = 1; i <= step.text.length; i++) {
            if (cancelled) return;
            setTyping(step.text.slice(0, i));
            await sleep(70);
          }
          await sleep(300);
          if (cancelled) return;
          setTyping("");
          setLines((l) => [...l, step]);
        } else {
          await sleep(250);
          if (cancelled) return;
          setLines((l) => [...l, step]);
          await sleep(400);
        }
      }
      if (!cancelled) setDone(true);
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const showLive = typing !== "" || done || lines.length === 0;

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-panel shadow-[0_0_40px_rgba(110,231,183,0.08)]">
      {/* window bar */}
      <div className="flex items-center gap-2 border-b border-line bg-bg/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
      </div>

      {/* body */}
      <div className="min-h-[20rem] space-y-3 p-5 text-left text-sm leading-relaxed sm:text-base">
        {lines.map((l, i) =>
          l.type === "cmd" ? (
            <p key={i}>
              <span className="text-accent">{PROMPT}</span> {l.text}
            </p>
          ) : (
            <p key={i} className="whitespace-pre-line text-text">
              {l.text}
            </p>
          )
        )}

        {showLive && (
          <p>
            <span className="text-accent">{PROMPT}</span> {typing}
            <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-accent" />
          </p>
        )}
      </div>
    </div>
  );
}