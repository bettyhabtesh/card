import { profile } from "@/data/profile";
import { SaveContactButton } from "@/components/SaveContactButton";

export function PrimaryCTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="animate-fade-up animation-delay-400"
    >
      <h2
        id="cta-heading"
        className="text-xl font-medium tracking-tight text-[#F5F3F7] sm:text-[1.35rem]"
      >
        {profile.ctaHeadline}
      </h2>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <a
          href={profile.portfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#F5F3F7] px-6 text-sm font-medium text-[#0c0b10] transition-all duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0b10] active:scale-[0.98]"
        >
          View Portfolio
        </a>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/[0.12] bg-transparent px-6 text-sm font-medium text-[#F5F3F7] transition-all duration-200 hover:border-[#A78BFA]/40 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0b10] active:scale-[0.98]"
        >
          Get in Touch
        </a>
        <SaveContactButton />
      </div>
    </section>
  );
}
