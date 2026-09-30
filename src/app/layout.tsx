import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile, getSiteUrl } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${profile.name} — ${profile.role}`;
const description =
  "Bethelhem Habtamu is a frontend developer building modern, performant and user-focused web experiences.";
const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: `${profile.name} Digital Card`,
  authors: [{ name: profile.name, url: profile.portfolio }],
  creator: profile.name,
  keywords: [
    profile.name,
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Ethiopia",
    "Digital Business Card",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    title,
    description,
    siteName: profile.name,
    firstName: profile.firstName,
    lastName: profile.lastName,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-dvh overflow-x-hidden overflow-y-auto bg-[#09090B] text-[#F5F3F7]">
        {children}
      </body>
    </html>
  );
}
