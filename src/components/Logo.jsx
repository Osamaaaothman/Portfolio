export default function Logo({ size = 30 }) {
  return (
    <svg className="logo" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="logo-ring" x1="10" y1="54" x2="54" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#b6bfff" />
        </linearGradient>
      </defs>
      <path
        className="logo-ring"
        pathLength="100"
        d="M35.82 10.33 A22 22 0 1 0 53.67 28.18"
        fill="none"
        stroke="url(#logo-ring)"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <g className="logo-orbit">
        <circle cx="47.56" cy="16.44" r="5" fill="#8e9bff" />
      </g>
    </svg>
  );
}
