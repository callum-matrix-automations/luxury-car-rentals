interface CategoryIconProps {
  kind: string;
}

export default function CategoryIcon({ kind }: CategoryIconProps) {
  const s = 18;
  const common = {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (kind) {
    case "all":
      return (
        <svg {...common}>
          <path d="M3 12l3-7h12l3 7" />
          <circle cx="7" cy="16" r="2" />
          <circle cx="17" cy="16" r="2" />
          <path d="M3 12v4h2M19 16h2v-4" />
        </svg>
      );
    case "super":
      return (
        <svg {...common}>
          <path d="M2 14l2-5 4-2h8l5 3 3 1v3l-2 1H4l-2-1z" />
          <circle cx="7" cy="16" r="2" />
          <circle cx="17" cy="16" r="2" />
        </svg>
      );
    case "conv":
      return (
        <svg {...common}>
          <path d="M3 14l3-6 7-1 8 3v4" />
          <circle cx="7" cy="16" r="2" />
          <circle cx="17" cy="16" r="2" />
        </svg>
      );
    case "suv":
      return (
        <svg {...common}>
          <path d="M2 14l1-5 4-3h10l4 4 2 1v3H2z" />
          <circle cx="7" cy="16" r="2" />
          <circle cx="17" cy="16" r="2" />
        </svg>
      );
    case "classic":
      return (
        <svg {...common}>
          <path d="M2 14l3-6 5-1 6 1 5 3v3" />
          <circle cx="7" cy="16" r="2" />
          <circle cx="17" cy="16" r="2" />
          <path d="M9 8v-2h6v2" />
        </svg>
      );
    case "ev":
      return (
        <svg {...common}>
          <path d="M2 14l2-5 4-2h8l5 3v4" />
          <circle cx="7" cy="16" r="2" />
          <circle cx="17" cy="16" r="2" />
          <path d="M13 9l-2 4h3l-2 3" />
        </svg>
      );
    case "coupe":
      return (
        <svg {...common}>
          <path d="M2 14l4-6 5-1 6 2 5 3v2" />
          <circle cx="7" cy="16" r="2" />
          <circle cx="17" cy="16" r="2" />
        </svg>
      );
    case "del":
      return (
        <svg {...common}>
          <path d="M3 7h11v8H3z" />
          <path d="M14 10h4l3 3v2h-7z" />
          <circle cx="7" cy="17" r="2" />
          <circle cx="17" cy="17" r="2" />
        </svg>
      );
    default:
      return null;
  }
}
