"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// Dynamically import model-viewer to register the web component
if (typeof window !== "undefined") {
  import("@google/model-viewer");
}

/* ─── design tokens ─── */
const INK = "#0E0E0C";
const MUTED = "#7B7B78";
const BG = "#FAFAF8";
const FONT_DISPLAY = "var(--font-bodoni), 'Bodoni Moda', serif";
const FONT_SANS = "var(--font-inter), 'Inter', sans-serif";
const STAGE_BG = "#1A1917";

const chip: React.CSSProperties = {
  padding: "8px 14px",
  background: "rgba(255,255,255,0.85)",
  borderRadius: 999,
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  fontSize: 11,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  fontFamily: FONT_SANS,
  fontWeight: 500,
  color: INK,
  border: "1px solid rgba(28,26,22,0.08)",
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  lineHeight: 1,
  userSelect: "none",
};

const iconBtn: React.CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: "50%",
  background: "rgba(255,255,255,0.85)",
  border: "1px solid rgba(28,26,22,0.08)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  color: INK,
  padding: 0,
  lineHeight: 1,
};

/* ─── inline SVG icons ─── */
const ArIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73L13 2.27a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const ResetIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
  </svg>
);

const FullscreenIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 3 21 3 21 9" />
    <polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const BackIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73L13 2.27a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>
);

/* ─── showroom environment CSS ─── */
const showroomStyle = `
  @keyframes showroom-breathe {
    0%, 100% { opacity: 0.55; }
    50% { opacity: 0.7; }
  }
  @keyframes showroom-badge-pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.7; }
  }
`;

/* ─── props ─── */
interface VehicleMediaProps {
  images: string[];
  modelUrl: string;
  make: string;
  model: string;
  year: number;
  photoCount: number;
}

/* ─── component ─── */
export default function VehicleMedia({
  images,
  modelUrl,
  make,
  model,
  year,
  photoCount,
}: VehicleMediaProps) {
  const [mode, setMode] = useState<"3d" | "photo">("3d");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const pad = (n: number) => String(n + 1).padStart(2, "0");
  const total = images.length;

  /* keyboard nav for gallery */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!galleryOpen) return;
      if (e.key === "Escape") setGalleryOpen(false);
      if (e.key === "ArrowLeft")
        setPhotoIndex((i) => (i - 1 + total) % total);
      if (e.key === "ArrowRight")
        setPhotoIndex((i) => (i + 1) % total);
    },
    [galleryOpen, total]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  /* thumbnail click */
  const openPhoto = (idx: number) => {
    setPhotoIndex(idx);
    setMode("photo");
  };

  const openGallery = (idx: number) => {
    setPhotoIndex(idx);
    setGalleryOpen(true);
  };

  const backTo3D = () => setMode("3d");

  /* ─── render ─── */
  return (
    <>
      {/* main grid */}
      <div
        className="mq-v-media-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 0.54fr",
          gap: 8,
          height: 560,
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        {/* ── main viewer ── */}
        <div
          className="mq-v-viewer-panel"
          style={{
            position: "relative",
            background: mode === "3d" ? STAGE_BG : INK,
            borderRadius: "16px 0 0 16px",
            overflow: "hidden",
          }}
        >
          {mode === "3d" ? (
            <>
              <style>{showroomStyle}</style>

              {/* Showroom environment layers */}
              {/* 1. Base: dark warm concrete */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #2A2824 0%, #1A1917 35%, #141310 100%)", pointerEvents: "none" }} />

              {/* 2. Overhead spotlight — warm elliptical pool */}
              <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "90%", height: "80%", background: "radial-gradient(ellipse 55% 50% at 50% 40%, rgba(245,235,210,0.14) 0%, rgba(245,235,210,0.04) 40%, transparent 70%)", pointerEvents: "none", animation: "showroom-breathe 6s ease-in-out infinite" }} />

              {/* 3. Floor reflection gradient — polished concrete sheen */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "55%", background: "linear-gradient(180deg, transparent 0%, rgba(255,250,240,0.025) 30%, rgba(255,250,240,0.06) 70%, rgba(255,250,240,0.04) 100%)", pointerEvents: "none" }} />

              {/* 4. Subtle floor grid — scored concrete lines */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "50%",
                backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                backgroundSize: "80px 80px",
                transform: "perspective(600px) rotateX(58deg)",
                transformOrigin: "bottom center",
                maskImage: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)",
                pointerEvents: "none"
              }} />

              {/* 5. Rim highlight — edge light from left (simulates window wall) */}
              <div style={{ position: "absolute", top: 0, left: 0, width: "30%", height: "100%", background: "linear-gradient(90deg, rgba(200,190,170,0.06) 0%, transparent 100%)", pointerEvents: "none" }} />

              {/* 6. Vignette — architectural depth */}
              <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 120px 40px rgba(10,9,7,0.5)", pointerEvents: "none", zIndex: 1 }} />

              {/* 7. Top accent line — architectural ceiling strip light */}
              <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 1, background: "linear-gradient(90deg, transparent, rgba(255,250,240,0.15), rgba(255,250,240,0.25), rgba(255,250,240,0.15), transparent)", pointerEvents: "none" }} />

              {/* Model viewer */}
              <model-viewer
                src={modelUrl}
                auto-rotate
                camera-controls
                shadow-intensity="1.2"
                exposure="0.85"
                camera-orbit="30deg 72deg 105%"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  zIndex: 2,
                  background: "transparent",
                }}
              />

              {/* Badge top-left — dark showroom style */}
              <div style={{ position: "absolute", top: 20, left: 20, zIndex: 3 }}>
                <span style={{
                  ...chip,
                  background: "rgba(26,25,23,0.75)",
                  border: "1px solid rgba(255,250,240,0.1)",
                  color: "#E8E2D2",
                  backdropFilter: "blur(12px)",
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: "#C9A96E",
                    animation: "showroom-badge-pulse 2s ease-in-out infinite",
                    flexShrink: 0,
                  }} />
                  3D Showroom
                </span>
              </div>

              {/* Icon buttons top-right */}
              <div style={{ position: "absolute", top: 20, right: 20, zIndex: 3, display: "flex", gap: 8 }}>
                {[
                  { icon: <ArIcon />, label: "View in AR" },
                  { icon: <ResetIcon />, label: "Reset camera" },
                  { icon: <FullscreenIcon />, label: "Fullscreen" },
                ].map((btn) => (
                  <button key={btn.label} style={{
                    ...iconBtn,
                    background: "rgba(26,25,23,0.6)",
                    border: "1px solid rgba(255,250,240,0.08)",
                    color: "#D5CFBE",
                  }} aria-label={btn.label} title={btn.label}>
                    {btn.icon}
                  </button>
                ))}
              </div>

              {/* Hint bottom-center */}
              <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 3 }}>
                <span style={{
                  ...chip,
                  background: "rgba(26,25,23,0.5)",
                  border: "1px solid rgba(255,250,240,0.06)",
                  color: "rgba(213,207,190,0.6)",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/></svg>
                  Drag to rotate &middot; Pinch to zoom
                </span>
              </div>
            </>
          ) : (
            <>
              {/* photo viewer */}
              <Image
                src={images[photoIndex]}
                alt={`${year} ${make} ${model} - Photo ${photoIndex + 1}`}
                fill
                style={{ objectFit: "cover" }}
                sizes="65vw"
                priority
              />

              {/* back to 3D */}
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  left: 20,
                  zIndex: 2,
                }}
              >
                <button
                  onClick={backTo3D}
                  style={{
                    ...chip,
                    cursor: "pointer",
                    background: "rgba(255,255,255,0.9)",
                  }}
                >
                  <BackIcon />
                  Back to 3D
                </button>
              </div>

              {/* prev / next */}
              <button
                onClick={() =>
                  setPhotoIndex((i) => (i - 1 + total) % total)
                }
                style={{
                  ...iconBtn,
                  position: "absolute",
                  left: 20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                }}
                aria-label="Previous photo"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => setPhotoIndex((i) => (i + 1) % total)}
                style={{
                  ...iconBtn,
                  position: "absolute",
                  right: 20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                }}
                aria-label="Next photo"
              >
                <ChevronRight />
              </button>

              {/* counter */}
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 2,
                }}
              >
                <span
                  style={{
                    ...chip,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {pad(photoIndex)} / {pad(total - 1)}
                </span>
              </div>
            </>
          )}
        </div>

        {/* ── thumbnails column ── */}
        <div
          className="mq-v-media-thumbs"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {/* first thumbnail */}
          <div
            onClick={() => openPhoto(0)}
            style={{
              position: "relative",
              flex: 1,
              borderRadius: "0 16px 0 0",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            {images[0] && (
              <Image
                src={images[0]}
                alt={`${year} ${make} ${model} - Thumbnail 1`}
                fill
                style={{ objectFit: "cover" }}
                sizes="35vw"
              />
            )}
          </div>

          {/* second thumbnail with overlay */}
          <div
            onClick={() => openGallery(1)}
            style={{
              position: "relative",
              flex: 1,
              borderRadius: "0 0 16px 0",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            {images[1] && (
              <Image
                src={images[1]}
                alt={`${year} ${make} ${model} - Thumbnail 2`}
                fill
                style={{ objectFit: "cover" }}
                sizes="35vw"
              />
            )}
            {/* "View all" overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(14,14,12,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1,
              }}
            >
              <span
                style={{
                  ...chip,
                  background: "rgba(255,255,255,0.92)",
                  fontSize: 12,
                }}
              >
                View all {photoCount} photos
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── mobile thumbnail strip (below the viewer) ── */}
      <div
        className="mq-v-media-mobile-strip"
        style={{
          display: "none",
          gap: 8,
          marginTop: 10,
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          paddingBottom: 2,
        }}
      >
        {/* 3D tab */}
        <button
          onClick={backTo3D}
          style={{
            flex: "0 0 auto",
            width: 72,
            height: 52,
            borderRadius: 8,
            overflow: "hidden",
            cursor: "pointer",
            border: mode === "3d" ? "2px solid var(--ink)" : "2px solid rgba(14,14,12,0.12)",
            background: STAGE_BG,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
            opacity: mode === "3d" ? 1 : 0.6,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D5CFBE" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73L13 2.27a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
        </button>
        {/* Photo thumbnails */}
        {images.map((src, idx) => (
          <div
            key={idx}
            onClick={() => openPhoto(idx)}
            style={{
              position: "relative",
              flex: "0 0 auto",
              width: 72,
              height: 52,
              borderRadius: 8,
              overflow: "hidden",
              cursor: "pointer",
              border: mode === "photo" && photoIndex === idx ? "2px solid var(--ink)" : "2px solid transparent",
              opacity: mode === "photo" && photoIndex === idx ? 1 : 0.6,
            }}
          >
            <Image
              src={src}
              alt={`${make} ${model} thumbnail ${idx + 1}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="72px"
            />
          </div>
        ))}
      </div>

      {/* ─── full gallery overlay ─── */}
      {galleryOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(14,14,12,0.92)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* close */}
          <button
            onClick={() => setGalleryOpen(false)}
            style={{
              ...iconBtn,
              position: "absolute",
              top: 24,
              right: 24,
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
            }}
            aria-label="Close gallery"
          >
            <CloseIcon />
          </button>

          {/* counter */}
          <div
            style={{
              position: "absolute",
              top: 28,
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: FONT_SANS,
              fontSize: 13,
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.6)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {pad(photoIndex)} / {pad(total - 1)}
          </div>

          {/* main image */}
          <div
            style={{
              position: "relative",
              width: "min(85vw, 1200px)",
              height: "min(65vh, 720px)",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <Image
              src={images[photoIndex]}
              alt={`${year} ${make} ${model} - Gallery photo ${photoIndex + 1}`}
              fill
              style={{ objectFit: "contain" }}
              sizes="85vw"
              priority
            />
          </div>

          {/* prev / next */}
          <button
            onClick={() =>
              setPhotoIndex((i) => (i - 1 + total) % total)
            }
            style={{
              ...iconBtn,
              position: "absolute",
              left: 32,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
              width: 44,
              height: 44,
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => setPhotoIndex((i) => (i + 1) % total)}
            style={{
              ...iconBtn,
              position: "absolute",
              right: 32,
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
              width: 44,
              height: 44,
            }}
            aria-label="Next photo"
          >
            <ChevronRight />
          </button>

          {/* thumbnail strip */}
          <div
            style={{
              display: "flex",
              gap: 8,
              marginTop: 20,
              overflowX: "auto",
              maxWidth: "85vw",
              paddingBottom: 4,
            }}
          >
            {images.map((src, idx) => (
              <div
                key={idx}
                onClick={() => setPhotoIndex(idx)}
                style={{
                  position: "relative",
                  width: 72,
                  height: 52,
                  borderRadius: 8,
                  overflow: "hidden",
                  cursor: "pointer",
                  flexShrink: 0,
                  opacity: idx === photoIndex ? 1 : 0.5,
                  border:
                    idx === photoIndex
                      ? "2px solid rgba(255,255,255,0.8)"
                      : "2px solid transparent",
                  transition: "opacity 0.2s, border-color 0.2s",
                }}
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="72px"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
