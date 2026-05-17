import { vehicleData } from "@/lib/vehicle-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import VehicleMedia from "@/components/vehicle/VehicleMedia";
import BookingWidget from "@/components/vehicle/BookingWidget";
import {
  TitleBlock,
  HostCard,
  FeaturesSection,
  IncludedSection,
  RatingsSection,
  RulesSection,
  LocationSection,
  SimilarSection,
  BrowseMore,
} from "@/components/vehicle/VehicleSections";

export default async function VehiclePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (id !== vehicleData.id) {
    notFound();
  }

  const V = vehicleData;

  return (
    <div style={{ background: "var(--background)", color: "var(--ink)", fontFamily: "var(--font-inter), 'Inter', system-ui, sans-serif", fontSize: 14, minHeight: "100vh" }}>

      {/* TOP STRIPE */}
      <div className="mq-label mq-px mq-top-stripe" style={{ display: "flex", justifyContent: "space-between", paddingTop: 12, paddingBottom: 12, borderBottom: "1px solid rgba(14,14,12,0.08)", color: "var(--muted)" }}>
        <span>Estd. London &middot; MMXXIV</span>
        <span>284 motor cars available today</span>
        <span>Complimentary delivery within Zone 1 &middot; Concierge 24/7</span>
      </div>

      {/* NAV */}
      <header className="mq-px" style={{ paddingTop: 24, paddingBottom: 24, display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 24 }}>
        <nav className="mq-nav-links" style={{ display: "flex", gap: 36 }}>
          <Link className="mq-link mq-label" href="/">The Garage</Link>
          <a className="mq-link mq-label" href="#">Collections</a>
          <a className="mq-link mq-label" href="#">Membership</a>
        </nav>
        <button className="mq-hamburger" aria-label="menu" style={{ display: "none", alignItems: "center", justifyContent: "center", background: "none", border: "none", cursor: "pointer", color: "var(--ink)", padding: 0 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
        <Link href="/" className="mq-link" style={{ textAlign: "center", lineHeight: 1, textDecoration: "none" }}>
          <div className="mq-display" style={{ fontSize: 38, letterSpacing: "0.04em" }}>MARQUE</div>
          <div className="mq-display mq-italic" style={{ fontSize: 12, marginTop: 4, opacity: 0.65 }}>&mdash; motor cars &mdash;</div>
        </Link>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 28, alignItems: "center" }}>
          <a className="mq-link mq-label mq-nav-right-links" href="#">List a motor</a>
          <a className="mq-link mq-label mq-nav-right-links" href="#">EN &middot; GBP</a>
          <a className="mq-link" href="#" aria-label="account" style={{ width: 34, height: 34, borderRadius: "50%", border: "1px solid rgba(14,14,12,0.33)", display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
            <span className="mq-display mq-italic" style={{ fontSize: 15 }}>m</span>
          </a>
        </div>
      </header>

      <div className="mq-px"><div className="mq-rule" /></div>

      {/* BREADCRUMB + SUBNAV */}
      <div className="mq-px mq-v-breadcrumb" style={{ paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", fontWeight: 500 }}>
          <Link className="mq-link" href="/">The Garage</Link>
          <span>&rsaquo;</span>
          <a className="mq-link" href="#">{V.bodyType.split("·")[0].trim()}</a>
          <span>&rsaquo;</span>
          <a className="mq-link" href="#">{V.make}</a>
          <span>&rsaquo;</span>
          <span style={{ color: "var(--ink)" }}>{V.model}</span>
        </div>
        <nav className="mq-vehicle-subnav" style={{ display: "flex", gap: 32 }}>
          {["Overview", "Features", "Reviews", "Location"].map((s, i) => (
            <a
              key={s}
              href={`#${s.toLowerCase()}`}
              className="mq-link"
              style={{
                padding: "14px 0",
                position: "relative",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 500,
                color: i === 0 ? "var(--ink)" : "var(--muted)",
                borderBottom: i === 0 ? "2px solid var(--ink)" : "2px solid transparent",
                textDecoration: "none",
              }}
            >
              {s}
            </a>
          ))}
        </nav>
      </div>

      {/* MEDIA */}
      <div className="mq-px" style={{ paddingTop: 20 }}>
        <VehicleMedia
          images={V.images}
          modelUrl={V.modelUrl}
          make={V.make}
          model={V.model}
          year={V.year}
          photoCount={V.photos}
        />
      </div>

      {/* TWO-COLUMN BODY */}
      <div id="overview" className="mq-px mq-vehicle-body" style={{ paddingTop: 48, display: "grid", gridTemplateColumns: "1fr 420px", gap: 56, alignItems: "start" }}>
        <main style={{ display: "flex", flexDirection: "column", gap: 64 }}>
          <TitleBlock vehicle={V} />
          <HostCard vehicle={V} />
          <div id="features">
            <FeaturesSection vehicle={V} />
          </div>
          <IncludedSection vehicle={V} />
          <div id="reviews">
            <RatingsSection vehicle={V} />
          </div>
          <RulesSection vehicle={V} />
        </main>
        <BookingWidget vehicle={V} />
      </div>

      {/* MAP & BELOW */}
      <div className="mq-px" style={{ paddingTop: 88, paddingBottom: 24, display: "flex", flexDirection: "column", gap: 88 }}>
        <div id="location">
          <LocationSection vehicle={V} />
        </div>
        <SimilarSection vehicle={V} />
        <BrowseMore vehicle={V} />
      </div>

      {/* FOOTER */}
      <footer className="mq-px mq-footer" style={{ paddingTop: 48, paddingBottom: 40, borderTop: "1px solid rgba(14,14,12,0.08)", marginTop: 32, display: "grid", gridTemplateColumns: "2.2fr 1fr 1fr 1fr", gap: 24 }}>
        <div>
          <div className="mq-display" style={{ fontSize: 30, letterSpacing: "0.04em" }}>MARQUE</div>
          <div className="mq-display mq-italic" style={{ fontSize: 14, marginTop: 4, opacity: 0.65 }}>&mdash; motor cars &mdash;</div>
          <div className="mq-label" style={{ marginTop: 18, color: "var(--muted)" }}>Estd. London &middot; MMXXIV</div>
        </div>
        {[
          ["Fleet", ["Concours", "New arrivals", "Convertibles", "Classics"]],
          ["House", ["Journal", "Membership", "Concierge", "Press"]],
          ["Hosts", ["List a motor", "Owner guide", "Insurance", "Standards"]],
        ].map(([t, items]) => (
          <div key={t as string}>
            <div className="mq-label" style={{ marginBottom: 14 }}>{t}</div>
            {(items as string[]).map((item) => (
              <a key={item} className="mq-link" href="#" style={{ display: "block", fontSize: 13.5, marginBottom: 6, textDecoration: "none" }}>
                {item}
              </a>
            ))}
          </div>
        ))}
      </footer>
    </div>
  );
}
