import { ReactNode } from "react";

interface RowHeadProps {
  title: ReactNode;
  sub?: string;
}

export default function RowHead({ title, sub }: RowHeadProps) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16 }}>
      <div>
        <h3 className="mq-display mq-row-title" style={{ fontSize: 32, margin: 0, lineHeight: 1.05 }}>
          {title}
        </h3>
        {sub && (
          <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 6 }}>{sub}</div>
        )}
      </div>
      {/* Desktop: arrow buttons */}
      <div className="mq-row-arrows" style={{ display: "flex", gap: 8, flexShrink: 0 }}>
        <button className="mq-icon-btn" aria-label="previous">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button className="mq-icon-btn" aria-label="next">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
      {/* Mobile: "See all" link */}
      <span className="mq-link mq-label mq-row-see-all" style={{ display: "none", alignItems: "center", gap: 4, flexShrink: 0, whiteSpace: "nowrap" }}>
        SEE ALL
      </span>
    </div>
  );
}
