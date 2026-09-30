import { profile, getSiteUrl } from "@/data/profile";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: profile.email,
    url: profile.portfolio,
    mainEntityOfPage: getSiteUrl(),
    address: {
      "@type": "PostalAddress",
      addressCountry: "ET",
      addressLocality: profile.location,
    },
    sameAs: [profile.github, profile.linkedin, profile.portfolio],
    description: profile.tagline,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
