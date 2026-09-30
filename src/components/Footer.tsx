import { profile } from "@/data/profile";
import { ShareButton } from "@/components/ShareButton";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="animate-fade-up animation-delay-500 mt-2 flex flex-col gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xs text-[#6F697C]">
        © {year} {profile.name}
      </p>
      <ShareButton />
    </footer>
  );
}
