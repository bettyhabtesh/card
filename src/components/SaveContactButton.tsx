"use client";

import { useState } from "react";
import { ContactRound } from "lucide-react";
import { downloadVCard } from "@/lib/vcard";
import { Toast } from "@/components/Toast";

export function SaveContactButton() {
  const [toastVisible, setToastVisible] = useState(false);

  function handleSave() {
    downloadVCard();
    setToastVisible(true);
    window.setTimeout(() => setToastVisible(false), 2200);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleSave}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/[0.1] bg-transparent px-5 text-sm font-medium text-[#D4CFDB] transition-all duration-200 hover:border-[#A78BFA]/35 hover:bg-white/[0.04] hover:text-[#F5F3F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A78BFA]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c0b10] active:scale-[0.98]"
      >
        <ContactRound className="size-4" strokeWidth={1.6} aria-hidden="true" />
        Save Contact
      </button>
      <Toast message="Contact saved" visible={toastVisible} />
    </>
  );
}
