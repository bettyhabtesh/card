import { skills } from "@/data/profile";

export function Skills() {
  return (
    <section
      aria-labelledby="skills-heading"
      className="animate-fade-up animation-delay-200"
    >
      <h2
        id="skills-heading"
        className="mb-3.5 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-[#8E8799]"
      >
        Skills
      </h2>

      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill}>
            <span className="inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.035] px-3.5 py-1.5 text-[0.8rem] text-[#D4CFDB] transition-colors duration-200 hover:border-[#A78BFA]/25 hover:bg-white/[0.055] hover:text-[#F5F3F7]">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
