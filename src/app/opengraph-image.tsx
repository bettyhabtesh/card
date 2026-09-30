import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#09090B",
          padding: "72px 80px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -40,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "rgba(139, 123, 184, 0.35)",
            filter: "blur(8px)",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 300,
            color: "rgba(123, 115, 144, 0.7)",
            letterSpacing: "-0.04em",
          }}
        >
          {profile.initials}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 600,
              color: "#F5F3F7",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 500,
              color: "#A9A4B2",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            {profile.role}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 12,
              fontSize: 26,
              color: "#C9C4D1",
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            {profile.tagline}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
