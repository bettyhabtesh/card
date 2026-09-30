import { profile } from "@/data/profile";

export function generateVCard(): string {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${profile.lastName};${profile.firstName};;;`,
    `FN:${profile.name}`,
    `TITLE:${profile.role}`,
    `EMAIL;TYPE=INTERNET,PREF:${profile.email}`,
    `URL;TYPE=Portfolio:${profile.portfolio}`,
    `URL;TYPE=LinkedIn:${profile.linkedin}`,
    `URL;TYPE=GitHub:${profile.github}`,
    `ADR;TYPE=HOME:;;;${profile.location};;;`,
    `NOTE:${profile.tagline} ${profile.availability}.`,
    "END:VCARD",
  ];

  return lines.join("\r\n");
}

export function downloadVCard(): void {
  const vcard = generateVCard();
  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${profile.firstName}-${profile.lastName}.vcf`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}
