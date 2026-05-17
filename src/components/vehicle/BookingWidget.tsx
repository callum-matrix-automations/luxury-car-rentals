"use client";

import { useState } from "react";
import type { VehicleDetail } from "@/lib/vehicle-data";

const INK = "#0E0E0C";
const MUTED = "#7B7B78";
const CARD = "#FFFFFF";
const ACCENT = "#5A2A2A";
const BG = "#FAFAF8";
const BORDER = "rgba(14,14,12,0.1)";
const BORDER_HOVER = "rgba(14,14,12,0.25)";

const bodoni = "var(--font-bodoni), 'Bodoni Moda', serif";
const inter = "var(--font-inter), Inter, sans-serif";

const labelStyle: React.CSSProperties = {
  fontSize: "10.5px",
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  fontWeight: 500,
  color: MUTED,
  fontFamily: inter,
};

function StarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={INK}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={INK}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={INK}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={INK}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2D6A4F"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={INK}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke={MUTED}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

export default function BookingWidget({
  vehicle,
}: {
  vehicle: VehicleDetail;
}) {
  const [hoveredAction, setHoveredAction] = useState<string | null>(null);
  const [ctaHover, setCtaHover] = useState(false);

  const totalBase = vehicle.price * vehicle.trip.days;
  const totalDiscount = vehicle.saving * vehicle.trip.days;
  const totalBeforeTax = totalBase - totalDiscount;

  const formatPrice = (n: number) =>
    `£${n.toLocaleString("en-GB")}`;

  return (
    <>
    <aside
      className="mq-v-booking-desktop"
      style={{
        position: "sticky",
        top: 24,
        alignSelf: "start",
        width: "100%",
        maxWidth: 420,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        fontFamily: inter,
      }}
    >
      {/* ── Main booking card ── */}
      <div
        style={{
          background: CARD,
          border: `1px solid ${BORDER}`,
          borderRadius: 16,
          padding: "28px 28px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 0,
        }}
      >
        {/* 1. Price block */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span
                style={{
                  fontFamily: bodoni,
                  fontSize: 44,
                  fontWeight: 400,
                  color: INK,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {formatPrice(vehicle.price)}
              </span>
              <span
                style={{
                  fontSize: 13,
                  color: MUTED,
                  fontWeight: 400,
                }}
              >
                per day
              </span>
            </div>
            <div
              style={{
                marginTop: 6,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  color: MUTED,
                  textDecoration: "line-through",
                }}
              >
                {formatPrice(vehicle.originalPrice)}
              </span>
              <span
                style={{
                  fontSize: 13,
                  fontStyle: "italic",
                  color: ACCENT,
                  fontWeight: 500,
                }}
              >
                save {formatPrice(vehicle.saving)}/day
              </span>
            </div>
          </div>
          <div style={{ textAlign: "right", paddingTop: 4 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                justifyContent: "flex-end",
              }}
            >
              <StarIcon />
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: INK,
                }}
              >
                {vehicle.ratings.score.toFixed(
                  vehicle.ratings.score % 1 === 0 ? 1 : 2
                )}
              </span>
            </div>
            <span
              style={{
                fontSize: 12,
                color: MUTED,
                marginTop: 2,
                display: "block",
              }}
            >
              {vehicle.ratings.count} trips
            </span>
          </div>
        </div>

        {/* 2. Divider */}
        <div
          style={{
            height: 1,
            background: BORDER,
            margin: "22px 0",
          }}
        />

        {/* 3. Trip fields */}
        <div>
          <span style={{ ...labelStyle, display: "block", marginBottom: 12 }}>
            Your trip
          </span>
          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            {/* Pick-up row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 16px",
              }}
            >
              <div>
                <span
                  style={{
                    ...labelStyle,
                    display: "block",
                    marginBottom: 4,
                    fontSize: 9.5,
                  }}
                >
                  Pick-up
                </span>
                <span style={{ fontSize: 14, color: INK, fontWeight: 500 }}>
                  {vehicle.trip.start.date}
                  <span
                    style={{
                      color: MUTED,
                      margin: "0 6px",
                      fontWeight: 300,
                    }}
                  >
                    &middot;
                  </span>
                  {vehicle.trip.start.time}
                </span>
              </div>
              <EditIcon />
            </div>
            {/* Separator */}
            <div style={{ height: 1, background: BORDER }} />
            {/* Return row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 16px",
              }}
            >
              <div>
                <span
                  style={{
                    ...labelStyle,
                    display: "block",
                    marginBottom: 4,
                    fontSize: 9.5,
                  }}
                >
                  Return
                </span>
                <span style={{ fontSize: 14, color: INK, fontWeight: 500 }}>
                  {vehicle.trip.end.date}
                  <span
                    style={{
                      color: MUTED,
                      margin: "0 6px",
                      fontWeight: 300,
                    }}
                  >
                    &middot;
                  </span>
                  {vehicle.trip.end.time}
                </span>
              </div>
              <EditIcon />
            </div>
          </div>

          {/* Delivery address */}
          <div
            style={{
              border: `1px solid ${BORDER}`,
              borderRadius: 10,
              padding: "14px 16px",
              marginTop: 10,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <span
                style={{
                  ...labelStyle,
                  display: "block",
                  marginBottom: 4,
                  fontSize: 9.5,
                }}
              >
                Delivery address
              </span>
              <span style={{ fontSize: 14, color: INK, fontWeight: 500 }}>
                {vehicle.location.neighborhood}, {vehicle.location.area}
              </span>
            </div>
            <EditIcon />
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: BORDER,
            margin: "22px 0",
          }}
        />

        {/* 4. Price breakdown */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 14,
              color: INK,
            }}
          >
            <span>
              {formatPrice(vehicle.price)} &times; {vehicle.trip.days} days
            </span>
            <span>{formatPrice(totalBase)}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 14,
              color: "#2D6A4F",
            }}
          >
            <span>{vehicle.trip.days}-day trip discount</span>
            <span>&minus;{formatPrice(totalDiscount)}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 14,
              color: INK,
            }}
          >
            <span>Door-to-door delivery</span>
            <span style={{ color: MUTED, fontStyle: "italic" }}>Included</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 14,
              color: INK,
            }}
          >
            <span>Insurance &amp; 24/7 support</span>
            <span style={{ color: MUTED, fontStyle: "italic" }}>Included</span>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: BORDER, margin: "4px 0" }} />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 500, color: INK }}>
              Total before tax
            </span>
            <span
              style={{
                fontFamily: bodoni,
                fontSize: 22,
                fontWeight: 400,
                color: INK,
                letterSpacing: "-0.01em",
              }}
            >
              {formatPrice(totalBeforeTax)}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: BORDER,
            margin: "22px 0",
          }}
        />

        {/* 5. Continue CTA */}
        <div>
          <button
            onMouseEnter={() => setCtaHover(true)}
            onMouseLeave={() => setCtaHover(false)}
            style={{
              width: "100%",
              padding: "16px 0",
              borderRadius: 999,
              border: "none",
              background: ctaHover ? "#2A2A28" : INK,
              color: "#FFFFFF",
              fontFamily: bodoni,
              fontSize: 19,
              fontStyle: "italic",
              fontWeight: 400,
              cursor: "pointer",
              transition: "background 0.2s ease",
              letterSpacing: "0.01em",
            }}
          >
            Continue to book
          </button>
          <p
            style={{
              textAlign: "center",
              fontSize: 12.5,
              color: MUTED,
              marginTop: 10,
              marginBottom: 0,
            }}
          >
            You will not be charged yet
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: BORDER,
            margin: "20px 0 16px",
          }}
        />

        {/* 6. Secondary actions */}
        <div style={{ display: "flex", gap: 10 }}>
          {(
            [
              { key: "save", icon: <HeartIcon />, label: "Save" },
              { key: "share", icon: <ShareIcon />, label: "Share" },
              { key: "enquire", icon: <ChatIcon />, label: "Enquire" },
            ] as const
          ).map(({ key, icon, label }) => (
            <button
              key={key}
              onMouseEnter={() => setHoveredAction(key)}
              onMouseLeave={() => setHoveredAction(null)}
              style={{
                flex: 1,
                aspectRatio: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                border: `1px solid ${hoveredAction === key ? BORDER_HOVER : BORDER}`,
                borderRadius: 12,
                background: hoveredAction === key ? BG : "transparent",
                cursor: "pointer",
                transition: "all 0.15s ease",
                padding: 0,
              }}
            >
              {icon}
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: INK,
                  fontFamily: inter,
                }}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── 7. Info panels ── */}

      {/* Cancellation policy */}
      <div
        style={{
          background: CARD,
          border: `1px solid ${BORDER}`,
          borderRadius: 16,
          padding: "22px 24px",
          display: "flex",
          gap: 14,
          alignItems: "flex-start",
        }}
      >
        <div style={{ flexShrink: 0, marginTop: 1 }}>
          <CheckIcon />
        </div>
        <div>
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: INK,
              display: "block",
              marginBottom: 4,
            }}
          >
            Free cancellation
          </span>
          <span style={{ fontSize: 13, color: MUTED, lineHeight: 1.5 }}>
            Full refund up to 48 hours before pick-up. Partial refund within 48
            hours subject to terms.
          </span>
        </div>
      </div>

      {/* Distance included */}
      <div
        style={{
          background: CARD,
          border: `1px solid ${BORDER}`,
          borderRadius: 16,
          padding: "22px 24px",
        }}
      >
        <span style={{ ...labelStyle, display: "block", marginBottom: 10 }}>
          Distance included
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 6,
            marginBottom: 6,
          }}
        >
          <span
            style={{
              fontFamily: bodoni,
              fontSize: 26,
              fontWeight: 400,
              color: INK,
              letterSpacing: "-0.01em",
            }}
          >
            {vehicle.distance.included} {vehicle.distance.unit}
          </span>
        </div>
        <span
          style={{
            fontSize: 13,
            color: MUTED,
            display: "block",
            marginBottom: 8,
          }}
        >
          {formatPrice(vehicle.distance.overageFee)}/{vehicle.distance.unit.replace(/s$/, "")} beyond
        </span>
        <a
          href="#"
          style={{
            fontSize: 13,
            color: ACCENT,
            fontWeight: 500,
            textDecoration: "underline",
            textUnderlineOffset: 3,
          }}
        >
          Add miles
        </a>
      </div>

      {/* Insurance */}
      <div
        style={{
          background: CARD,
          border: `1px solid ${BORDER}`,
          borderRadius: 16,
          padding: "22px 24px",
          display: "flex",
          gap: 14,
          alignItems: "flex-start",
        }}
      >
        <div style={{ flexShrink: 0, marginTop: 1 }}>
          <ShieldIcon />
        </div>
        <div>
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: INK,
              display: "block",
              marginBottom: 4,
            }}
          >
            {vehicle.insurance.provider}
          </span>
          <span
            style={{
              fontSize: 13,
              color: MUTED,
              lineHeight: 1.5,
              display: "block",
            }}
          >
            {vehicle.insurance.cover} &middot; Excess {vehicle.insurance.excess}
          </span>
        </div>
      </div>

      {/* 8. Report link */}
      <div style={{ textAlign: "center", paddingTop: 4, paddingBottom: 8 }}>
        <a
          href="#"
          style={{
            fontSize: 12.5,
            color: MUTED,
            textDecoration: "underline",
            textUnderlineOffset: 3,
            fontFamily: inter,
          }}
        >
          Report this listing
        </a>
      </div>
    </aside>

    {/* Mobile sticky bottom bar */}
    <div className="mq-v-booking-mobile" style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: CARD,
      borderTop: `1px solid ${BORDER}`,
      padding: "12px 16px",
      display: "none",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
    }}>
      <div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <span style={{ fontFamily: bodoni, fontSize: 24, lineHeight: 1 }}>
            {formatPrice(vehicle.price)}
          </span>
          <span style={{ ...labelStyle, fontSize: 10 }}>per day</span>
        </div>
        <div style={{ fontSize: 12, color: MUTED, marginTop: 2 }}>
          {vehicle.trip.start.date} &ndash; {vehicle.trip.end.date} &middot; {vehicle.trip.days} days
        </div>
      </div>
      <button style={{
        padding: "14px 28px",
        background: INK,
        color: BG,
        border: "none",
        borderRadius: 999,
        cursor: "pointer",
        fontFamily: bodoni,
        fontStyle: "italic",
        fontSize: 16,
        flexShrink: 0,
      }}>
        Continue
      </button>
    </div>
    </>
  );
}
