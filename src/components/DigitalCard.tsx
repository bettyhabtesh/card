import { profile } from "@/data/profile";
import { Hero } from "@/components/Hero";
import { ContactLinks } from "@/components/ContactLinks";
import { Skills } from "@/components/Skills";
import { SelectedWork } from "@/components/SelectedWork";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { Footer } from "@/components/Footer";

export function DigitalCard() {
  return (
    <div className="relative mx-auto w-full max-w-[40rem]">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute -inset-x-16 -top-24 -z-10 h-64 rounded-full bg-[#7C6AAF]/15 blur-[90px] sm:-inset-x-24 sm:blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 -right-10 -z-10 h-48 w-48 rounded-full bg-[#5B4B8A]/20 blur-[80px] sm:h-56 sm:w-56"
        aria-hidden="true"
      />

      <article className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#0c0b10]/85 shadow-[0_0_0_1px_rgba(167,139,250,0.04),0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:rounded-[2rem]">
        {/* Decorative corner glow — top right */}
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-[#8B7BB8]/25 blur-2xl sm:h-44 sm:w-44"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-bl-[100%] bg-gradient-to-bl from-[#9B8BC4]/35 via-[#7C6AAF]/15 to-transparent sm:h-36 sm:w-36"
          aria-hidden="true"
        />

        {/* Fine curved line — bottom right */}
        <svg
          className="pointer-events-none absolute -bottom-6 -right-4 h-40 w-40 text-[#A78BFA]/25 sm:h-48 sm:w-48"
          viewBox="0 0 160 160"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M20 140 C60 100, 100 60, 150 30"
            stroke="currentColor"
            strokeWidth="0.75"
          />
          <path
            d="M40 150 C75 115, 110 80, 155 55"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.5"
          />
        </svg>

        {/* Tiny geometric accent — bottom left */}
        <div
          className="pointer-events-none absolute bottom-8 left-6 size-1.5 rounded-full bg-[#A78BFA]/40 sm:bottom-10 sm:left-8"
          aria-hidden="true"
        />
        <svg
          className="pointer-events-none absolute bottom-5 left-4 h-10 w-10 text-[#A78BFA]/20 sm:bottom-6 sm:left-5"
          viewBox="0 0 40 40"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="28"
            r="10"
            stroke="currentColor"
            strokeWidth="0.6"
          />
        </svg>

        <div className="relative z-10 flex flex-col gap-9 px-6 py-9 sm:gap-10 sm:px-10 sm:py-12 md:px-12 md:py-14">
          <Hero />
          <ContactLinks />
          <Skills />
          <SelectedWork />

          <p className="animate-fade-up animation-delay-350 text-sm italic leading-relaxed text-[#8E8799]">
            {profile.personalTouch}
          </p>

          <PrimaryCTA />
          <Footer />
        </div>
      </article>
    </div>
  );
}
