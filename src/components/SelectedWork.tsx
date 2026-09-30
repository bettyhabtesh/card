import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/profile";

function ProjectItem({ project }: { project: Project }) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[0.95rem] font-medium text-[#F5F3F7] transition-colors duration-200 group-hover:text-white">
          {project.name}
        </h3>
        {project.href ? (
          <ArrowUpRight
            className="mt-0.5 size-4 shrink-0 text-[#6B6578] transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C4B5FD]"
            strokeWidth={1.6}
            aria-hidden="true"
          />
        ) : null}
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-[#9B95A6]">
        {project.description}
      </p>
      <p className="mt-2.5 text-xs tracking-wide text-[#6F697C]">
        {project.technologies.join(" · ")}
      </p>
    </>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-200 hover:border-[#A78BFA]/20 hover:bg-white/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0b10] sm:p-5"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 sm:p-5">
      {content}
    </div>
  );
}

export function SelectedWork() {
  return (
    <section
      aria-labelledby="work-heading"
      className="animate-fade-up animation-delay-300"
    >
      <h2
        id="work-heading"
        className="mb-3.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[#8E8799]"
      >
        Selected Work
      </h2>

      <ul className="flex flex-col gap-2.5">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectItem project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
