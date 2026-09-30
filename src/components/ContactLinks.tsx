import {
  MailIcon,
  GitHubIcon,
  LinkedInIcon,
  LinkIcon,
} from "@/components/icons";
import { contactLinks, type ContactLink } from "@/data/profile";

const iconMap = {
  mail: MailIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  link: LinkIcon,
} as const;

function ContactItem({ link }: { link: ContactLink }) {
  const Icon = iconMap[link.icon];

  return (
    <a
      href={link.href}
      {...(link.external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="group flex min-h-11 items-center gap-2.5 rounded-xl border border-transparent px-3 py-2.5 text-sm text-[#C9C4D1] transition-colors duration-200 hover:border-white/[0.08] hover:bg-white/[0.03] hover:text-[#F5F3F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0b10] sm:min-h-10"
    >
      <Icon
        className="size-[1.05rem] shrink-0 text-[#8B8499] transition-colors duration-200 group-hover:text-[#C4B5FD]"
        strokeWidth={1.6}
      />
      <span>{link.label}</span>
    </a>
  );
}

export function ContactLinks() {
  return (
    <nav
      aria-label="Contact links"
      className="animate-fade-up animation-delay-100"
    >
      <ul className="flex flex-wrap items-center gap-1 sm:gap-0.5">
        {contactLinks.map((link) => (
          <li key={link.id}>
            <ContactItem link={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
