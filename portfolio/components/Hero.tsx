import Terminal from "./Terminal";
import { ArrowRight } from "lucide-react";
import { FaAws, FaDocker, FaLinux, FaGithub } from "react-icons/fa";
import Collage from "./Collage";
import { SiKubernetes } from "react-icons/si";

const tech = [
  { Icon: FaAws, label: "AWS" },
  { Icon: FaDocker, label: "Docker" },
  { Icon: SiKubernetes, label: "Kubernetes" },
  { Icon: FaLinux, label: "Linux" },
  { Icon: FaGithub, label: "GitHub" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pb-16 pt-28 lg:grid-cols-2"
    >
      
      <div className="order-2 lg:order-1">
  <Collage />
</div>

      
      <div className="order-1 lg:order-2">
        <Terminal />

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-bg transition hover:shadow-[0_0_24px_rgba(110,231,183,0.5)]"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="rounded-full border border-line px-6 py-3 transition hover:border-accent hover:text-accent"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {tech.map(({ Icon, label }) => (
            <div
              key={label}
              title={label}
              className="flex h-14 w-14 items-center justify-center rounded-lg border border-line bg-panel text-2xl text-text transition hover:-translate-y-1 hover:border-accent hover:text-accent hover:shadow-[0_0_18px_rgba(110,231,183,0.35)]"
            >
              <Icon />
            </div>
          ))}
        </div>

        <p className="mt-6 flex items-center gap-2 text-sm text-muted">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accent" />
          System Online
        </p>
      </div>
    </section>
  );
}