"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Car } from "@/lib/data";
import CarPlaceholder from "./CarPlaceholder";

interface ListingProps {
  car: Car;
}

export default function Listing({ car }: ListingProps) {
  const images = car.images ?? [];
  const hasImages = images.length > 0;
  const hasMultiple = images.length > 1;
  const [idx, setIdx] = useState(0);

  const prev = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIdx((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  return (
    <Link href={`/vehicle/${car.id}`} className="mq-link mq-card block no-underline">
      <div
        style={{ aspectRatio: "4/3", borderRadius: 4, overflow: "hidden", position: "relative" }}
        className="mq-card-img mq-carousel"
      >
        {hasImages ? (
          <>
            {images.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`${car.year} ${car.make} ${car.model} — photo ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                style={{
                  objectFit: "cover",
                  opacity: i === idx ? 1 : 0,
                  transition: "opacity 0.35s ease",
                }}
                priority={i === 0}
              />
            ))}

            {hasMultiple && (
              <>
                {/* Prev arrow */}
                <button
                  className="mq-carousel-arrow mq-carousel-arrow-left"
                  onClick={prev}
                  aria-label="Previous image"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                {/* Next arrow */}
                <button
                  className="mq-carousel-arrow mq-carousel-arrow-right"
                  onClick={next}
                  aria-label="Next image"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>

                {/* Dots */}
                <div className="mq-carousel-dots">
                  {images.map((src, i) => (
                    <span
                      key={src}
                      className={i === idx ? "mq-dot active" : "mq-dot"}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        ) : (
          <CarPlaceholder
            tone={car.tone}
            label={`${car.make.toUpperCase()} · ${car.model.toUpperCase()}`}
            sublabel={`#${car.id.toUpperCase()}`}
            footer={`${car.hp}HP · ${car.kmh}`}
          />
        )}
        <button className="mq-heart" aria-label="save" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
      <div style={{ marginTop: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
          <div className="mq-display" style={{ fontSize: 20, lineHeight: 1.1 }}>
            {car.make} <span className="mq-italic">{car.model}</span>
          </div>
          <div className="mq-display" style={{ fontSize: 18, whiteSpace: "nowrap" }}>
            £{car.price.toLocaleString()}
          </div>
        </div>
        <div style={{ marginTop: 6, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div className="mq-label" style={{ color: "var(--muted)" }}>
            {car.year} &middot; {car.hp} HP &middot; {car.location}
          </div>
          <div className="mq-label" style={{ color: "var(--muted)", whiteSpace: "nowrap" }}>
            per day
          </div>
        </div>
        <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--muted)" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span style={{ color: "var(--ink)", fontWeight: 500 }}>{car.ratings.score.toFixed(2)}</span>
          <span>({car.ratings.count})</span>
        </div>
      </div>
    </Link>
  );
}
