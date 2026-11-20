type P = { className?: string };

// Rayo con el trazo del logo: inclinado, de dos quiebres.
export function Bolt({ className }: P) {
  return (
    <svg viewBox="0 0 64 120" className={className} fill="currentColor" aria-hidden="true">
      <path d="M40 0 4 66h22L14 120 60 48H36L52 0Z" />
    </svg>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Arrow({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}
export function ArrowLeft({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
      <path d="M20 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}
export function Plug({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke} aria-hidden="true">
      <path d="M17 6v10M31 6v10M11 16h26v8a13 13 0 0 1-26 0ZM24 37v6" />
    </svg>
  );
}
export function Truck({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke} aria-hidden="true">
      <path d="M3 11h26v22H3ZM29 19h8l8 8v6H29ZM12 36a4 4 0 1 0 0 .1M37 36a4 4 0 1 0 0 .1" />
    </svg>
  );
}
export function Wrench({ className }: P) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...stroke} aria-hidden="true">
      <path d="M30 6a11 11 0 0 0-9 15L6 36l6 6 15-15a11 11 0 0 0 15-9l-7 4-6-2-2-6Z" />
    </svg>
  );
}
export function Check({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}
export function Menu({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" {...stroke} aria-hidden="true">
      {open ? <path d="M5 5l14 14M19 5 5 19" /> : <path d="M3 8h18M3 16h18" />}
    </svg>
  );
}
export function WhatsApp({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
      <path d="M3 21l1.600-5A9 9 0 1 1 8 19.400L3 21Z" />
      <path d="M9 9.500c0 3 2.500 5.500 5.500 5.500l1.500-1.500-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2L9 9.500Z" />
    </svg>
  );
}
export function Instagram({ className }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...stroke} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.500 6.500h.01" />
    </svg>
  );
}
