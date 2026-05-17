import type { VehicleDetail } from "@/lib/vehicle-data";
import CarPlaceholder from "@/components/CarPlaceholder";

/* ── colour & font tokens ─────────────────────────────────── */
const INK = "#0E0E0C";
const MUTED = "#7B7B78";
const CARD = "#FFFFFF";
const ACCENT = "#5A2A2A";
const BODONI = "'Bodoni Moda', 'Playfair Display', serif";
const INTER = "'Inter', system-ui, sans-serif";

/* ── shared helper ─────────────────────────────────────────── */

function SectionHead({
  title,
  right,
}: {
  title: string;
  right?: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: `1px solid ${INK}1A`,
        paddingBottom: 18,
        marginBottom: 32,
      }}
    >
      <h2
        style={{
          fontFamily: BODONI,
          fontSize: 30,
          fontWeight: 400,
          color: INK,
          margin: 0,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      {right}
    </div>
  );
}

/* ── 1. TitleBlock ─────────────────────────────────────────── */

export function TitleBlock({ vehicle }: { vehicle: VehicleDetail }) {
  const transParts = vehicle.transmission.split(" ");
  const transValue = transParts[0];
  const transUnit = transParts.slice(1).join(" ");

  const specs: { label: string; value: string; unit: string }[] = [
    { label: "Power", value: String(vehicle.hp), unit: "HP" },
    { label: "0-100 km/h", value: vehicle.kmh0to100.replace("s", ""), unit: "sec" },
    { label: "Top speed", value: String(vehicle.topSpeed), unit: "km/h" },
    { label: "Transmission", value: transValue, unit: transUnit },
    { label: "Seats", value: String(vehicle.seats), unit: `doors ${vehicle.doors}` },
  ];

  return (
    <div style={{ marginBottom: 48 }}>
      {/* Eyebrow */}
      <div
        style={{
          fontFamily: INTER,
          fontSize: 11,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: MUTED,
          marginBottom: 8,
        }}
      >
        {vehicle.year} {vehicle.bodyType}
      </div>

      {/* Title row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: BODONI,
              fontSize: "clamp(36px, 8vw, 64px)",
              fontWeight: 400,
              color: INK,
              margin: 0,
              lineHeight: 1.05,
            }}
          >
            {vehicle.make}{" "}
            <em style={{ fontStyle: "italic" }}>{vehicle.model}</em>
          </h1>
          <div
            style={{
              fontFamily: BODONI,
              fontStyle: "italic",
              fontSize: 18,
              color: MUTED,
              marginTop: 6,
            }}
          >
            {vehicle.trim}
          </div>
        </div>

        {/* Rating + location */}
        <div
          style={{
            fontFamily: INTER,
            fontSize: 14,
            color: INK,
            display: "flex",
            alignItems: "center",
            gap: 6,
            paddingTop: 12,
          }}
        >
          <span style={{ fontSize: 14 }}>{"★"}</span>
          <span style={{ fontWeight: 600 }}>{vehicle.ratings.score.toFixed(1)}</span>
          <span style={{ color: MUTED }}>({vehicle.ratings.count})</span>
          <span style={{ color: MUTED, margin: "0 4px" }}>{"·"}</span>
          <span style={{ color: MUTED }}>
            {vehicle.location.neighborhood}, {vehicle.location.city}
          </span>
        </div>
      </div>

      {/* Spec bar */}
      <div
        className="mq-v-spec-bar"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          borderTop: `1px solid ${INK}1A`,
          borderBottom: `1px solid ${INK}1A`,
          marginTop: 36,
          padding: "24px 0",
          gap: 0,
        }}
      >
        {specs.map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: INTER,
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: MUTED,
                marginBottom: 8,
              }}
            >
              {s.label}
            </div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: 4 }}>
              <span
                style={{
                  fontFamily: BODONI,
                  fontSize: 32,
                  fontWeight: 400,
                  color: INK,
                }}
              >
                {s.value}
              </span>
              <span
                style={{
                  fontFamily: INTER,
                  fontSize: 12,
                  color: MUTED,
                }}
              >
                {s.unit}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 2. HostCard ───────────────────────────────────────────── */

export function HostCard({ vehicle }: { vehicle: VehicleDetail }) {
  const { host } = vehicle;

  return (
    <div style={{ marginBottom: 64 }}>
      <SectionHead title="Hosted by" />
      <div
        style={{
          border: `1px solid ${INK}14`,
          borderRadius: 16,
          padding: 32,
          background: CARD,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 24,
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <CarPlaceholder tone={host.tone} />
          </div>

          <div>
            <div
              style={{
                fontFamily: BODONI,
                fontSize: 26,
                fontWeight: 400,
                color: INK,
                marginBottom: 6,
              }}
            >
              {host.name}
            </div>
            {host.allStar && (
              <span
                style={{
                  fontFamily: INTER,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  background: ACCENT,
                  color: "#FFFFFF",
                  padding: "4px 14px",
                  borderRadius: 100,
                }}
              >
                All-Star Host
              </span>
            )}
          </div>
        </div>

        {/* Stats row */}
        <div
          className="mq-v-host-stats"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px 32px",
            fontFamily: INTER,
            fontSize: 13,
            color: MUTED,
            marginBottom: 24,
          }}
        >
          <span>
            <strong style={{ color: INK, fontWeight: 600 }}>{host.trips}</strong> trips hosted
          </span>
          <span>
            Joined <strong style={{ color: INK, fontWeight: 600 }}>{host.joined}</strong>
          </span>
          <span>
            <strong style={{ color: INK, fontWeight: 600 }}>{host.responseRate}%</strong> response rate
          </span>
          <span>
            Replies <strong style={{ color: INK, fontWeight: 600 }}>{host.responseTime}</strong>
          </span>
        </div>

        {/* Message button */}
        <button
          style={{
            fontFamily: INTER,
            fontSize: 14,
            fontWeight: 500,
            color: INK,
            background: "transparent",
            border: `1px solid ${INK}30`,
            borderRadius: 100,
            padding: "10px 28px",
            cursor: "pointer",
          }}
        >
          Message host
        </button>
      </div>
    </div>
  );
}

/* ── 3. FeaturesSection ────────────────────────────────────── */

export function FeaturesSection({ vehicle }: { vehicle: VehicleDetail }) {
  return (
    <div style={{ marginBottom: 64 }}>
      <SectionHead title="Vehicle features" />
      <div
        className="mq-v-2col"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          marginBottom: 28,
        }}
      >
        {vehicle.features.map((group) => (
          <div key={group.group}>
            <h3
              style={{
                fontFamily: BODONI,
                fontSize: 22,
                fontWeight: 400,
                color: INK,
                margin: "0 0 14px",
              }}
            >
              {group.group}
            </h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {group.items.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: INTER,
                    fontSize: 14,
                    color: INK,
                    padding: "10px 0",
                    borderTop: `1px solid ${INK}0A`,
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ color: MUTED, fontSize: 6, lineHeight: 1 }}>{"⬤"}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button
        style={{
          fontFamily: INTER,
          fontSize: 14,
          fontWeight: 500,
          color: INK,
          background: "transparent",
          border: `1px solid ${INK}30`,
          borderRadius: 100,
          padding: "10px 28px",
          cursor: "pointer",
        }}
      >
        See all 24 features
      </button>
    </div>
  );
}

/* ── 4. IncludedSection ────────────────────────────────────── */

export function IncludedSection({ vehicle }: { vehicle: VehicleDetail }) {
  return (
    <div style={{ marginBottom: 64 }}>
      <SectionHead title="Included in the price" />
      <div
        className="mq-v-2col"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
        }}
      >
        {vehicle.included.map((group) => (
          <div key={group.group}>
            <h3
              style={{
                fontFamily: BODONI,
                fontSize: 22,
                fontWeight: 400,
                color: INK,
                margin: "0 0 14px",
              }}
            >
              {group.group}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {group.items.map(([title, desc]) => (
                <div key={title} style={{ display: "flex", gap: 12 }}>
                  {/* Checkmark circle */}
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: `${INK}0D`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 6L5 8.5L9.5 3.5"
                        stroke={INK}
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: INTER,
                        fontSize: 14.5,
                        fontWeight: 500,
                        color: INK,
                        marginBottom: 3,
                      }}
                    >
                      {title}
                    </div>
                    <div
                      style={{
                        fontFamily: INTER,
                        fontSize: 13,
                        color: MUTED,
                        lineHeight: 1.5,
                      }}
                    >
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 5. RatingsSection ─────────────────────────────────────── */

export function RatingsSection({ vehicle }: { vehicle: VehicleDetail }) {
  const { ratings, reviews } = vehicle;

  return (
    <div style={{ marginBottom: 64 }}>
      <SectionHead
        title="Ratings & reviews"
        right={
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span
              style={{
                fontFamily: BODONI,
                fontSize: 38,
                fontWeight: 400,
                color: INK,
              }}
            >
              {ratings.score.toFixed(1)}
            </span>
            <span style={{ fontFamily: INTER, fontSize: 13, color: MUTED }}>
              ({ratings.count} reviews)
            </span>
          </div>
        }
      />

      <div
        className="mq-v-2col"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
        }}
      >
        {/* Breakdown bars */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {ratings.breakdown.map(([label, score]) => (
            <div
              key={label}
              style={{
                display: "grid",
                gridTemplateColumns: "130px 1fr 40px",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span style={{ fontFamily: INTER, fontSize: 13, color: MUTED }}>
                {label}
              </span>
              <div
                style={{
                  height: 6,
                  borderRadius: 3,
                  background: `${INK}0D`,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${(score / 5) * 100}%`,
                    borderRadius: 3,
                    background: INK,
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: INTER,
                  fontSize: 13,
                  fontWeight: 600,
                  color: INK,
                  textAlign: "right",
                }}
              >
                {score.toFixed(1)}
              </span>
            </div>
          ))}
        </div>

        {/* Review cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {reviews.map((r) => (
            <div
              key={r.initials + r.date}
              style={{
                border: `1px solid ${INK}14`,
                borderRadius: 14,
                padding: 22,
                background: CARD,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 10,
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: `${INK}0D`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: BODONI,
                      fontStyle: "italic",
                      fontSize: 15,
                      color: INK,
                    }}
                  >
                    {r.initials}
                  </span>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: INTER,
                      fontSize: 14,
                      fontWeight: 600,
                      color: INK,
                    }}
                  >
                    {r.name}
                  </div>
                  <div
                    style={{
                      fontFamily: INTER,
                      fontSize: 12,
                      color: MUTED,
                    }}
                  >
                    {r.date}
                  </div>
                </div>
                <div
                  style={{
                    marginLeft: "auto",
                    fontFamily: INTER,
                    fontSize: 13,
                    color: INK,
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <span>{"★"}</span>
                  <span style={{ fontWeight: 600 }}>{r.score.toFixed(1)}</span>
                </div>
              </div>
              <p
                style={{
                  fontFamily: INTER,
                  fontSize: 13.5,
                  color: INK,
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 28 }}>
        <button
          style={{
            fontFamily: INTER,
            fontSize: 14,
            fontWeight: 500,
            color: INK,
            background: "transparent",
            border: `1px solid ${INK}30`,
            borderRadius: 100,
            padding: "10px 28px",
            cursor: "pointer",
          }}
        >
          Read all {ratings.count} reviews
        </button>
      </div>
    </div>
  );
}

/* ── 6. RulesSection ───────────────────────────────────────── */

export function RulesSection({ vehicle }: { vehicle: VehicleDetail }) {
  return (
    <div style={{ marginBottom: 64 }}>
      <SectionHead title="Rules of the road" />
      <div
        className="mq-v-2col"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
        }}
      >
        {vehicle.rules.map(([title, desc]) => (
          <div
            key={title}
            style={{
              border: `1px solid ${INK}14`,
              borderRadius: 14,
              padding: 22,
              background: CARD,
              display: "flex",
              gap: 14,
            }}
          >
            {/* Info circle icon */}
            <div style={{ flexShrink: 0, marginTop: 1 }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke={MUTED} strokeWidth="1.2" />
                <path
                  d="M10 9V14"
                  stroke={MUTED}
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
                <circle cx="10" cy="6.5" r="0.8" fill={MUTED} />
              </svg>
            </div>
            <div>
              <div
                style={{
                  fontFamily: INTER,
                  fontSize: 14.5,
                  fontWeight: 500,
                  color: INK,
                  marginBottom: 4,
                }}
              >
                {title}
              </div>
              <div
                style={{
                  fontFamily: INTER,
                  fontSize: 13,
                  color: MUTED,
                  lineHeight: 1.5,
                }}
              >
                {desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 7. LocationSection ────────────────────────────────────── */

export function LocationSection({ vehicle }: { vehicle: VehicleDetail }) {
  const { location } = vehicle;

  return (
    <div style={{ marginBottom: 64 }}>
      <SectionHead title="Pick-up & delivery" />
      <div
        className="mq-v-location-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: 36,
        }}
      >
        {/* Left sidebar */}
        <div>
          <div style={{ fontFamily: INTER, fontSize: 14, color: INK, marginBottom: 20 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>{location.neighborhood}</div>
            <div style={{ color: MUTED }}>{location.area}, {location.city}</div>
            <div style={{ color: MUTED }}>{location.postcode}</div>
          </div>
          <div
            style={{
              fontFamily: INTER,
              fontSize: 13,
              color: MUTED,
              lineHeight: 1.6,
              borderTop: `1px solid ${INK}0A`,
              paddingTop: 16,
            }}
          >
            <div style={{ fontWeight: 500, color: INK, marginBottom: 6 }}>Delivery</div>
            <div>{location.delivery}</div>
          </div>
        </div>

        {/* Map placeholder */}
        <div
          style={{
            position: "relative",
            borderRadius: 16,
            overflow: "hidden",
            background: "#F2F0EB",
            minHeight: 320,
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 600 320"
            preserveAspectRatio="xMidYMid slice"
            style={{ position: "absolute", inset: 0, display: "block" }}
          >
            {/* Background */}
            <rect width="600" height="320" fill="#F2F0EB" />

            {/* Parks */}
            <rect x="40" y="60" width="80" height="50" rx="8" fill="#E4E9DC" />
            <rect x="420" y="30" width="120" height="60" rx="8" fill="#E4E9DC" />
            <rect x="200" y="240" width="90" height="45" rx="8" fill="#E4E9DC" />

            {/* Roads */}
            <line x1="0" y1="160" x2="600" y2="160" stroke="#D8D6D1" strokeWidth="3" />
            <line x1="300" y1="0" x2="300" y2="320" stroke="#D8D6D1" strokeWidth="3" />
            <line x1="0" y1="80" x2="600" y2="80" stroke="#E0DEDA" strokeWidth="1.5" />
            <line x1="0" y1="240" x2="600" y2="240" stroke="#E0DEDA" strokeWidth="1.5" />
            <line x1="150" y1="0" x2="150" y2="320" stroke="#E0DEDA" strokeWidth="1.5" />
            <line x1="450" y1="0" x2="450" y2="320" stroke="#E0DEDA" strokeWidth="1.5" />

            {/* Thames-style river */}
            <path
              d="M 0 280 Q 150 260 300 275 Q 450 290 600 270"
              fill="none"
              stroke="#C5D4E0"
              strokeWidth="12"
              strokeLinecap="round"
            />

            {/* Area labels */}
            <text x="280" y="130" fontFamily={INTER} fontSize="11" fill="#B0AEA8" letterSpacing="0.2em" textAnchor="middle">
              HATFIELD
            </text>
            <text x="470" y="130" fontFamily={INTER} fontSize="10" fill="#C0BEB8" letterSpacing="0.18em" textAnchor="middle">
              WELWYN
            </text>
            <text x="100" y="200" fontFamily={INTER} fontSize="10" fill="#C0BEB8" letterSpacing="0.18em" textAnchor="middle">
              ST ALBANS
            </text>

            {/* Pin marker */}
            <g transform="translate(280, 140)">
              <circle cx="0" cy="0" r="18" fill={ACCENT} opacity="0.15" />
              <circle cx="0" cy="0" r="8" fill={ACCENT} />
              <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
            </g>
          </svg>

          {/* Chip overlay */}
          <div
            style={{
              position: "absolute",
              bottom: 16,
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: INTER,
              fontSize: 12,
              color: INK,
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(8px)",
              padding: "8px 18px",
              borderRadius: 100,
              whiteSpace: "nowrap",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
          >
            Exact location shared after booking
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 8. SimilarSection ─────────────────────────────────────── */

export function SimilarSection({ vehicle }: { vehicle: VehicleDetail }) {
  return (
    <div style={{ marginBottom: 64 }}>
      <SectionHead
        title="Similar motors for your dates"
        right={
          <div style={{ display: "flex", gap: 8 }}>
            {/* Prev arrow */}
            <button
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: `1px solid ${INK}20`,
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8L10 13" stroke={INK} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {/* Next arrow */}
            <button
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: `1px solid ${INK}20`,
                background: "transparent",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke={INK} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        }
      />

      <div
        className="mq-v-similar-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 20,
        }}
      >
        {vehicle.similar.map((car) => (
          <div key={car.id} style={{ cursor: "pointer" }}>
            {/* Image */}
            <div
              style={{
                aspectRatio: "4/3",
                borderRadius: 14,
                overflow: "hidden",
                marginBottom: 12,
              }}
            >
              <CarPlaceholder
                tone={car.tone}
                label={`${car.make} ${car.model}`}
                sublabel={`${car.year}`}
              />
            </div>
            <div
              style={{
                fontFamily: BODONI,
                fontSize: 20,
                fontWeight: 400,
                color: INK,
                marginBottom: 4,
              }}
            >
              {car.make} <em style={{ fontStyle: "italic" }}>{car.model}</em>
            </div>
            <div
              style={{
                fontFamily: INTER,
                fontSize: 15,
                fontWeight: 600,
                color: INK,
                marginBottom: 4,
              }}
            >
              {"£"}{car.price}
              <span style={{ fontWeight: 400, fontSize: 13, color: MUTED }}> /day</span>
            </div>
            <div
              style={{
                fontFamily: INTER,
                fontSize: 12,
                color: MUTED,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span>{car.year}</span>
              <span>{"·"}</span>
              <span>{car.hp} HP</span>
              <span>{"·"}</span>
              <span>{car.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 9. BrowseMore ─────────────────────────────────────────── */

export function BrowseMore({ vehicle }: { vehicle: VehicleDetail }) {
  return (
    <div
      className="mq-v-browse-more"
      style={{
        border: `1px solid ${INK}14`,
        borderRadius: 16,
        padding: 36,
        background: CARD,
        display: "flex",
        alignItems: "center",
        gap: 32,
        marginBottom: 64,
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          width: 160,
          height: 120,
          borderRadius: 12,
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <CarPlaceholder tone="crimson" label={vehicle.make} />
      </div>

      <div style={{ flex: 1 }}>
        <h3
          style={{
            fontFamily: BODONI,
            fontSize: 28,
            fontWeight: 400,
            color: INK,
            margin: "0 0 8px",
          }}
        >
          Browse more {vehicle.make} motors
        </h3>
        <p
          style={{
            fontFamily: INTER,
            fontSize: 14,
            color: MUTED,
            lineHeight: 1.5,
            margin: "0 0 20px",
          }}
        >
          Discover the full range of {vehicle.make} vehicles available for hire across the UK.
        </p>
        <button
          style={{
            fontFamily: BODONI,
            fontStyle: "italic",
            fontSize: 15,
            fontWeight: 400,
            color: "#FFFFFF",
            background: INK,
            border: "none",
            borderRadius: 100,
            padding: "12px 30px",
            cursor: "pointer",
          }}
        >
          See {vehicle.make} motors
        </button>
      </div>
    </div>
  );
}
