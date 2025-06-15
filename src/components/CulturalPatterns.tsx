
import React from "react";

export const MandalaPattern: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 200 200" fill="none" {...props}>
    <circle cx="100" cy="100" r="90" stroke="#FAA327" strokeWidth="2" opacity=".11" />
    <circle cx="100" cy="100" r="60" stroke="#FD8D3C" strokeWidth="1.5" opacity=".09" />
    <path d="M100,40 Q115,50 130,40 Q125,60 140,70 Q120,70 120,90 Q100,85 80,90 Q80,70 60,70 Q75,60 70,40 Q85,50 100,40Z"
      stroke="#C44536" strokeWidth="1" fill="none" opacity=".13" />
  </svg>
);

export const LaurelWreath: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 220 80" fill="none" {...props}>
    <path d="M20 60 Q60 10, 110 40 Q160 10, 200 60"
      stroke="#B8A165" strokeWidth="4" fill="none" opacity=".10" />
    <path d="M30 62 Q60 32 110 55 Q160 32 190 62"
      stroke="#C2A94B" strokeWidth="2" fill="none" opacity=".10" />
  </svg>
);

export const GreekKeyBorder: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 200 20" fill="none" {...props}>
    <rect x="2" y="6" width="16" height="8" stroke="#29608A" strokeWidth="2" opacity=".18"/>
    <rect x="22" y="6" width="16" height="8" stroke="#29608A" strokeWidth="2" opacity=".18"/>
    {/* Repeat as desired... */}
  </svg>
);

export const LotusAccent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 36" fill="none" {...props}>
    <path
      d="M32 2 Q35 18 62 24 Q45 28 32 34 Q19 28 2 24 Q29 18 32 2Z"
      stroke="#FD484A" strokeWidth="2" fill="none" opacity=".12"/>
  </svg>
);

export const ArabesquePattern: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 50 50" fill="none" {...props}>
    <circle cx="25" cy="25" r="24" stroke="#228B73" strokeWidth="2" opacity=".09"/>
    <rect x="10" y="10" width="30" height="30" stroke="#E5C965" strokeWidth="1" opacity=".08"/>
  </svg>
);

export const KhokhlomaBorder: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 220 20" fill="none" {...props}>
    <ellipse cx="20" cy="10" rx="10" ry="6" fill="#F25038" opacity=".12"/>
    <ellipse cx="50" cy="10" rx="7" ry="5" fill="#37833B" opacity=".09"/>
    {/* Reduced for brevity */}
  </svg>
);

export const PagodaAccent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 60 28" fill="none" {...props}>
    <rect x="20" y="18" width="20" height="6" stroke="#C93434" strokeWidth="2" fill="none" opacity=".11"/>
    <rect x="24" y="8" width="12" height="7" stroke="#EDB03E" strokeWidth="2" fill="none" opacity=".12"/>
    <rect x="28" y="2" width="4" height="5" stroke="#E08150" strokeWidth="2" fill="none" opacity=".16"/>
  </svg>
)
