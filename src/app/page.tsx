import { DigitalCard } from "@/components/DigitalCard";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col items-center justify-center overflow-x-hidden px-4 py-10 sm:px-6 sm:py-14 md:py-16">
      <JsonLd />
      {/* Quiet page atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 bg-[#09090B]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(124,106,175,0.12),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(91,75,138,0.1),_transparent_45%)]"
        aria-hidden="true"
      />
      <DigitalCard />
    </main>
  );
}
