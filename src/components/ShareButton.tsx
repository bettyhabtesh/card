"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";
import { profile } from "@/data/profile";
import { Toast } from "@/components/Toast";

export function ShareButton() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("Link copied");

  async function handleShare() {
    const shareData = {
      title: `${profile.name} — ${profile.role}`,
      text: profile.tagline,
      url: typeof window !== "undefined" ? window.location.href : profile.siteUrl,
    };

    try {
      if (
        typeof navigator !== "undefined" &&
        typeof navigator.share === "function" &&
        (!navigator.canShare || navigator.canShare(shareData))
      ) {
        await navigator.share(shareData);
        return;
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(shareData.url);
      setToastMessage("Link copied");
      setToastVisible(true);
      window.setTimeout(() => setToastVisible(false), 2200);
    } catch {
      setToastMessage("Unable to share");
      setToastVisible(true);
      window.setTimeout(() => setToastVisible(false), 2200);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleShare}
        aria-label="Share my card"
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-transparent px-4 text-sm text-[#9B95A6] transition-colors duration-200 hover:text-[#F5F3F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0b10]"
      >
        <Share2 className="size-3.5" strokeWidth={1.6} aria-hidden="true" />
        Share my card
      </button>
      <Toast message={toastMessage} visible={toastVisible} />
    </>
  );
}
