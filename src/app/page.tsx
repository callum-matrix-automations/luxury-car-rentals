import { featured, newArrivals, categories } from "@/lib/data";
import Listing from "@/components/Listing";
import RowHead from "@/components/RowHead";
import CarPlaceholder from "@/components/CarPlaceholder";
import CategoryIcon from "@/components/CategoryIcon";
import Link from "next/link";

const tabs = [
  { label: "All", icon: "all" },
  { label: "Supercar", icon: "super" },
  { label: "Convertible", icon: "conv" },
  { label: "SUV", icon: "suv" },
  { label: "Classic", icon: "classic" },
  { label: "Electric", icon: "ev" },
  { label: "Coupe", icon: "coupe" },
  { label: "Delivered", icon: "del" },
];

export default function Home() {
  return (
    <div className="mq-root" style={{ background: "var(--background)", color: "var(--ink)", fontFamily: "var(--font-inter), 'Inter', system-ui, sans-serif", fontSize: 13, minHeight: "100vh" }}>

      {/* TOP STRIPE — hidden on mobile */}
      <div className="mq-label mq-px mq-top-stripe" style={{ display: "flex", justifyContent: "space-between", paddingTop: 12, paddingBottom: 12, borderBottom: "1px solid rgba(14,14,12,0.08)", color: "var(--muted)" }}>
        <span>Estd. London &middot; MMXXIV</span>
        <span>284 motor cars available today</span>
        <span>Complimentary delivery within Zone 1 &middot; Concierge 24/7</span>
      </div>

      {/* NAV */}
      <header className="mq-px" style={{ paddingTop: 24, paddingBottom: 24, display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: 24 }}>
        {/* Desktop nav links */}
        <nav className="mq-nav-links" style={{ display: "flex", gap: 36 }}>
          <a className="mq-link mq-label" href="#">The Garage</a>
          <a className="mq-link mq-label" href="#">Collections</a>
          <a className="mq-link mq-label" href="#">Membership</a>
        </nav>
        {/* Mobile hamburger */}
        <button className="mq-hamburger" aria-label="menu" style={{ display: "none", alignItems: "center", justifyContent: "center", background: "none", border: "none", cursor: "pointer", color: "var(--ink)", padding: 0 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>

        {/* Wordmark */}
        <Link href="/" className="mq-link" style={{ textAlign: "center", lineHeight: 1, textDecoration: "none" }}>
          <div className="mq-display" style={{ fontSize: 38, letterSpacing: "0.04em" }}>MARQUE</div>
          <div className="mq-display mq-italic" style={{ fontSize: 12, marginTop: 4, opacity: 0.65 }}>&mdash; motor cars &mdash;</div>
        </Link>

        {/* Desktop right nav */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 28, alignItems: "center" }}>
          <a className="mq-link mq-label mq-nav-right-links" href="#">List a motor</a>
          <a className="mq-link mq-label mq-nav-right-links" href="#">EN &middot; GBP</a>
          <a className="mq-link" href="#" aria-label="account" style={{ width: 34, height: 34, borderRadius: "50%", border: "1px solid rgba(14,14,12,0.33)", display: "inline-flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
            <span className="mq-display mq-italic" style={{ fontSize: 15 }}>m</span>
          </a>
        </div>
      </header>

      <div className="mq-px"><div className="mq-rule" /></div>

      {/* SEARCH — Desktop pill */}
      <section className="mq-px" style={{ paddingTop: 40, paddingBottom: 28 }}>
        <div style={{ maxWidth: 1180, marginInline: "auto" }}>
          {/* Desktop search pill */}
          <div className="mq-pill">
            <div className="mq-pill-seg">
              <div className="mq-label" style={{ color: "var(--muted)", marginBottom: 4 }}>Where</div>
              <div style={{ fontSize: 14 }}>London, United Kingdom</div>
            </div>
            <div className="mq-pill-seg">
              <div className="mq-label" style={{ color: "var(--muted)", marginBottom: 4 }}>Pick-up</div>
              <div style={{ fontSize: 14 }}>Thu, 28 May &middot; 09:00</div>
            </div>
            <div className="mq-pill-seg">
              <div className="mq-label" style={{ color: "var(--muted)", marginBottom: 4 }}>Return</div>
              <div style={{ fontSize: 14 }}>Sun, 31 May &middot; 18:00</div>
            </div>
            <div className="mq-pill-seg">
              <div className="mq-label" style={{ color: "var(--muted)", marginBottom: 4 }}>Body</div>
              <div style={{ fontSize: 14, color: "var(--muted)" }}>Any</div>
            </div>
            <button style={{ margin: 5, padding: "0 30px", height: 56, border: "none", borderRadius: 999, background: "var(--ink)", color: "var(--background)", display: "inline-flex", alignItems: "center", gap: 12, cursor: "pointer", fontFamily: "var(--font-bodoni), 'Bodoni Moda', serif", fontStyle: "italic", fontSize: 18 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-5-5" />
              </svg>
              Search
            </button>
          </div>

          {/* Mobile search bar */}
          <div className="mq-search-mobile" style={{ alignItems: "center", gap: 12, padding: "12px 18px", background: "var(--card)", border: "1px solid rgba(14,14,12,0.12)", borderRadius: 999, boxShadow: "0 4px 20px -8px rgba(14,14,12,0.12)" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.6">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-5-5" />
            </svg>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 500 }}>Where to?</div>
              <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 1 }}>Any date &middot; Any type</div>
            </div>
            <button style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(14,14,12,0.15)", background: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--ink)", flexShrink: 0 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="M4 6h16M4 12h10M4 18h14" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* TABS — body type filter */}
      <section className="mq-px" style={{ paddingTop: 0, paddingBottom: 8 }}>
        <div className="mq-tabs-wrap" style={{ display: "flex", justifyContent: "center", gap: 40, borderBottom: "1px solid rgba(14,14,12,0.08)" }}>
          {tabs.map((t, i) => (
            <div
              key={t.label}
              className={"mq-tab " + (i === 0 ? "active" : "")}
              style={{ color: i === 0 ? "var(--ink)" : "var(--muted)", display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}
            >
              <CategoryIcon kind={t.icon} />
              <span className="mq-label">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONCOURS */}
      <section className="mq-px" style={{ paddingTop: 48, paddingBottom: 16 }}>
        <RowHead title="The Concours Collection" sub="Six motors, hand-selected this season · average daily rate" />
        <div className="mq-grid-4" style={{ marginTop: 28 }}>
          {featured.slice(0, 4).map((car) => (
            <Listing key={car.id} car={car} />
          ))}
        </div>
      </section>

      {/* SUPERCARS */}
      <section className="mq-px" style={{ paddingTop: 40, paddingBottom: 16 }}>
        <RowHead title="Supercars in London" sub="Daily rate · insurance included" />
        <div className="mq-grid-4" style={{ marginTop: 28 }}>
          {[featured[2], newArrivals[0], newArrivals[2], featured[4]].map((car) => (
            <Listing key={car.id} car={car} />
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="mq-px" style={{ paddingTop: 40, paddingBottom: 16 }}>
        <RowHead title="Newly listed" sub="Eight motors added in the last seven days" />
        <div className="mq-grid-4" style={{ marginTop: 28 }}>
          {newArrivals.slice(0, 4).map((car) => (
            <Listing key={car.id} car={car} />
          ))}
        </div>
      </section>

      {/* CONVERTIBLES */}
      <section className="mq-px" style={{ paddingTop: 40, paddingBottom: 16 }}>
        <RowHead title="Convertibles for the weekend" sub="Roof down, by the day" />
        <div className="mq-grid-4" style={{ marginTop: 28 }}>
          {[featured[0], featured[2], newArrivals[1], featured[5]].map((car) => (
            <Listing key={car.id} car={car} />
          ))}
        </div>
      </section>

      {/* BROWSE BY BODY */}
      <section className="mq-px" style={{ paddingTop: 56, paddingBottom: 16 }}>
        <RowHead title="Browse by body" sub="Find your kind of motor" />
        <div className="mq-grid-6" style={{ marginTop: 28 }}>
          {categories.map((c, i) => (
            <a key={c.id} href="#" className="mq-link mq-card block" style={{ textDecoration: "none" }}>
              <div style={{ aspectRatio: "4/5", borderRadius: 4, overflow: "hidden", position: "relative" }} className="mq-card-img">
                <CarPlaceholder tone={c.tone} label={c.label.toUpperCase()} sublabel={`№ 0${i + 1}`} footer={`${c.count} MOTORS`} />
              </div>
              <div style={{ marginTop: 14, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span className="mq-display" style={{ fontSize: 22 }}>{c.label}</span>
                <span className="mq-label" style={{ color: "var(--muted)" }}>{c.count}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* GUARANTEE STATS — visible on mobile between browse-by-body and host CTA */}
      <section className="mq-px mq-guarantee-section" style={{ paddingTop: 48, paddingBottom: 16 }}>
        <h3 className="mq-display mq-row-title" style={{ fontSize: 32, margin: 0, lineHeight: 1.05, marginBottom: 24 }}>
          The Marque guarantee
        </h3>
        <div className="mq-host-stats" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }}>
          {[
            ["£20m", "comprehensive cover"],
            ["72hr", "cancellation policy"],
            ["24/7", "concierge support"],
            ["1,200+", "verified owners"],
          ].map(([n, l]) => (
            <div key={l} style={{ padding: "24px 0", borderTop: "1px solid rgba(14,14,12,0.13)" }}>
              <div className="mq-display" style={{ fontSize: 36, lineHeight: 1 }}>{n}</div>
              <div className="mq-label" style={{ color: "var(--muted)", marginTop: 8 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOST CTA */}
      <section className="mq-px" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div className="mq-host-grid" style={{ border: "1px solid rgba(14,14,12,0.1)", padding: "clamp(24px, 4vw, 64px)", display: "grid", gridTemplateColumns: "7fr 5fr", gap: "clamp(24px, 4vw, 64px)", alignItems: "center" }}>
          <div>
            <div className="mq-label" style={{ color: "var(--muted)", marginBottom: 18 }}>For owners</div>
            <h2 className="mq-display mq-host-heading" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: 0, lineHeight: 1 }}>
              List your motor,<br /><span className="mq-italic">earn from it.</span>
            </h2>
            <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.55, color: "var(--muted)", maxWidth: 460 }}>
              Owners average £4,200 a month on a single vehicle.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#" style={{ padding: "15px 26px", background: "var(--ink)", color: "var(--background)", borderRadius: 999, textDecoration: "none", fontSize: 13, letterSpacing: "0.04em", fontFamily: "var(--font-bodoni), 'Bodoni Moda', serif", fontStyle: "italic", fontWeight: 400 }}>
                List a motor
              </a>
            </div>
          </div>
          <div className="mq-host-stats mq-host-stats-desktop" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
            {[
              ["£4.2k", "avg. monthly"],
              ["£10m", "comprehensive cover"],
              ["72hr", "time to first booking"],
            ].map(([n, l]) => (
              <div key={l} style={{ padding: "24px 0", borderTop: "1px solid rgba(14,14,12,0.13)" }}>
                <div className="mq-display" style={{ fontSize: 44, lineHeight: 1 }}>{n}</div>
                <div className="mq-label" style={{ color: "var(--muted)", marginTop: 8 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mq-px mq-footer" style={{ paddingTop: 48, paddingBottom: 40, borderTop: "1px solid rgba(14,14,12,0.08)", display: "grid", gridTemplateColumns: "2.2fr 1fr 1fr 1fr", gap: 24 }}>
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
