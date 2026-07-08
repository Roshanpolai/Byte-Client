import React from "react";

function Logo({ width = "100px" }) {
  return (
    <svg
      viewBox="0 0 220 56"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width, height: "auto" }}
    >
      <defs>
        <linearGradient id="byteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4338CA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>

      {/* Icon mark */}
      <g transform="translate(0,4)">
        <rect x="0" y="0" width="48" height="48" rx="12" fill="url(#byteGrad)" />
        <rect x="14" y="12" width="14" height="8" rx="2" fill="white" opacity="0.95" />
        <rect x="14" y="24" width="20" height="8" rx="2" fill="white" opacity="0.95" />
        <rect x="14" y="12" width="8" height="20" rx="2" fill="white" />
      </g>

      {/* Wordmark */}
      <text
        x="60"
        y="36"
        fontFamily="'Space Grotesk', 'Inter', sans-serif"
        fontSize="26"
        fontWeight="700"
        fill="#1E1B4B"
      >
        Byte
        <tspan fill="url(#byteGrad)">Blog</tspan>
      </text>
    </svg>
  );
}

export default Logo;