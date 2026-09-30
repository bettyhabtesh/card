import { profile } from "@/data/profile";

export function Hero() {
  return (
    <header className="animate-fade-up">
      <p
        className="mb-5 select-none text-[2.75rem] font-light leading-none tracking-tight text-[#7B7390]/55 sm:mb-6 sm:text-[3.25rem]"
        aria-hidden="true"
      >
        {profile.initials}
      </p>

      <h1 className="text-[1.85rem] font-semibold leading-[1.15] tracking-tight text-[#F5F3F7] sm:text-[2.35rem] md:text-[2.65rem]">
        {profile.name}
      </h1>

      <p className="mt-2.5 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-[#A9A4B2] sm:text-xs sm:tracking-[0.24em]">
        {profile.role}
      </p>

      <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-[#C9C4D1] sm:mt-6 sm:text-base">
        {profile.tagline}
      </p>

      <p className="mt-3 text-sm text-[#8E8799]">
        {profile.location}
        <span className="mx-2 text-[#5C5668]" aria-hidden="true">
          ·
        </span>
        {profile.availability}
      </p>
    </header>
  );
}
