"use client";

import { useId } from "react";
import { CAR_TONES } from "@/lib/data";

interface CarPlaceholderProps {
  tone?: string;
  label?: string;
  sublabel?: string;
  footer?: string;
}

export default function CarPlaceholder({ tone = "graphite", label, sublabel, footer }: CarPlaceholderProps) {
  const t = CAR_TONES[tone] || CAR_TONES.graphite;
  const stripeId = useId();

  return (
    <div
      style={{
        position: "relative",
        background: t.bg,
        color: t.fg,
        overflow: "hidden",
        width: "100%",
        height: "100%",
      }}
    >
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        style={{ position: "absolute", inset: 0, display: "block" }}
      >
        <defs>
          <pattern
            id={stripeId}
            width="14"
            height="14"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(35)"
          >
            <rect width="14" height="14" fill={t.bg} />
            <rect width="1" height="14" fill={t.stripe} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${stripeId})`} />
        <rect x="0" y="62%" width="100%" height="0.5" fill={t.accent} opacity="0.4" />
      </svg>
      <svg
        width="78%"
        height="34%"
        viewBox="0 0 400 110"
        preserveAspectRatio="xMidYMid meet"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.18,
        }}
      >
        <ellipse cx="200" cy="98" rx="190" ry="6" fill={t.fg} opacity="0.5" />
        <path d="M 30 80 Q 80 30 200 28 Q 320 30 370 80 L 370 90 L 30 90 Z" fill={t.fg} />
        <circle cx="110" cy="90" r="14" fill={t.bg} />
        <circle cx="290" cy="90" r="14" fill={t.bg} />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: 16,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          pointerEvents: "none",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
          <div
            style={{
              fontFamily: "ui-monospace, monospace",
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              opacity: 0.55,
              color: t.fg,
            }}
          >
            {sublabel || "IMAGE PLACEHOLDER"}
          </div>
          {footer && (
            <div
              style={{
                fontFamily: "ui-monospace, monospace",
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                opacity: 0.55,
                color: t.fg,
              }}
            >
              {footer}
            </div>
          )}
        </div>
        <div
          style={{
            fontFamily: "ui-monospace, monospace",
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.6,
            color: t.fg,
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}
