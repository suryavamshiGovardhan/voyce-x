
import React from "react";

export const MandalaPattern: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 200 200" fill="none" {...props}>
    <circle cx="100" cy="100" r="90" stroke="#FF9933" strokeWidth="2" opacity="0.08" />
    <circle cx="100" cy="100" r="70" stroke="#138808" strokeWidth="1.5" opacity="0.06" />
    <circle cx="100" cy="100" r="50" stroke="#DC143C" strokeWidth="1" opacity="0.05" />
    <path d="M100,40 Q115,50 130,40 Q125,60 140,70 Q120,70 120,90 Q100,85 80,90 Q80,70 60,70 Q75,60 70,40 Q85,50 100,40Z"
      stroke="#FF9933" strokeWidth="1" fill="none" opacity="0.1" />
    <path d="M100,60 L110,80 L130,80 L116,92 L122,112 L100,100 L78,112 L84,92 L70,80 L90,80 Z"
      stroke="#DC143C" strokeWidth="0.8" fill="none" opacity="0.08" />
  </svg>
);

export const LaurelWreath: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 220 80" fill="none" {...props}>
    <path d="M20 60 Q60 10, 110 40 Q160 10, 200 60"
      stroke="#B8A165" strokeWidth="3" fill="none" opacity="0.12" />
    <path d="M30 62 Q60 32 110 55 Q160 32 190 62"
      stroke="#F3C13A" strokeWidth="2" fill="none" opacity="0.08" />
    <ellipse cx="35" cy="58" rx="8" ry="4" fill="#B8A165" opacity="0.1" />
    <ellipse cx="185" cy="58" rx="8" ry="4" fill="#B8A165" opacity="0.1" />
  </svg>
);

export const GreekKeyBorder: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 200 20" fill="none" {...props}>
    <path d="M2 6 L18 6 L18 14 L10 14 L10 10 L14 10" stroke="#243C89" strokeWidth="2" opacity="0.15"/>
    <path d="M22 6 L38 6 L38 14 L30 14 L30 10 L34 10" stroke="#243C89" strokeWidth="2" opacity="0.15"/>
    <path d="M42 6 L58 6 L58 14 L50 14 L50 10 L54 10" stroke="#243C89" strokeWidth="2" opacity="0.15"/>
    <path d="M62 6 L78 6 L78 14 L70 14 L70 10 L74 10" stroke="#243C89" strokeWidth="2" opacity="0.15"/>
  </svg>
);

export const LotusAccent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 36" fill="none" {...props}>
    <path d="M32 2 Q35 18 62 24 Q45 28 32 34 Q19 28 2 24 Q29 18 32 2Z"
      stroke="#FF9933" strokeWidth="2" fill="none" opacity="0.1"/>
    <path d="M32 8 Q34 16 48 20 Q40 22 32 26 Q24 22 16 20 Q30 16 32 8Z"
      stroke="#138808" strokeWidth="1.5" fill="none" opacity="0.08"/>
  </svg>
);

export const ArabesquePattern: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" fill="none" {...props}>
    <circle cx="50" cy="50" r="45" stroke="#278878" strokeWidth="2" opacity="0.08"/>
    <path d="M20 50 Q50 20 80 50 Q50 80 20 50" stroke="#E5C965" strokeWidth="1.5" opacity="0.06"/>
    <path d="M35 35 Q50 25 65 35 Q55 50 65 65 Q50 75 35 65 Q45 50 35 35" 
      stroke="#278878" strokeWidth="1" opacity="0.1"/>
  </svg>
);

export const KhokhlomaBorder: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 220 30" fill="none" {...props}>
    <ellipse cx="30" cy="15" rx="12" ry="8" fill="#F25038" opacity="0.1"/>
    <ellipse cx="70" cy="15" rx="10" ry="6" fill="#37833B" opacity="0.08"/>
    <ellipse cx="110" cy="15" rx="12" ry="8" fill="#F25038" opacity="0.1"/>
    <ellipse cx="150" cy="15" rx="10" ry="6" fill="#37833B" opacity="0.08"/>
    <ellipse cx="190" cy="15" rx="12" ry="8" fill="#F25038" opacity="0.1"/>
    <path d="M10 15 Q30 5 50 15 Q70 25 90 15 Q110 5 130 15 Q150 25 170 15 Q190 5 210 15"
      stroke="#37833B" strokeWidth="2" opacity="0.12"/>
  </svg>
);

export const PagodaAccent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 80 40" fill="none" {...props}>
    <rect x="25" y="25" width="30" height="8" stroke="#DA251D" strokeWidth="2" fill="none" opacity="0.1"/>
    <rect x="30" y="15" width="20" height="6" stroke="#FFD700" strokeWidth="2" fill="none" opacity="0.12"/>
    <rect x="35" y="5" width="10" height="6" stroke="#DA251D" strokeWidth="2" fill="none" opacity="0.15"/>
    <rect x="38" y="0" width="4" height="4" fill="#FFD700" opacity="0.2"/>
  </svg>
);

export const EgyptianHieroglyphBorder: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 200 30" fill="none" {...props}>
    <circle cx="25" cy="15" r="8" stroke="#243C89" strokeWidth="2" opacity="0.1"/>
    <rect x="45" y="8" width="6" height="14" stroke="#F3C13A" strokeWidth="2" opacity="0.12"/>
    <path d="M70 8 L78 15 L70 22 L62 15 Z" stroke="#243C89" strokeWidth="2" fill="none" opacity="0.1"/>
    <circle cx="95" cy="15" r="6" fill="#F3C13A" opacity="0.08"/>
    <rect x="115" y="10" width="8" height="10" stroke="#243C89" strokeWidth="1.5" opacity="0.1"/>
    <path d="M140 10 Q145 6 150 10 Q145 20 140 16" stroke="#F3C13A" strokeWidth="2" fill="none" opacity="0.12"/>
  </svg>
);

export const CherryBlossomAccent: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 60 60" fill="none" {...props}>
    <circle cx="30" cy="30" r="4" fill="#DA251D" opacity="0.15"/>
    <path d="M30 22 Q26 26 30 30 Q34 26 30 22" fill="#FFB6C1" opacity="0.1"/>
    <path d="M38 30 Q34 26 30 30 Q34 34 38 30" fill="#FFB6C1" opacity="0.1"/>
    <path d="M30 38 Q34 34 30 30 Q26 34 30 38" fill="#FFB6C1" opacity="0.1"/>
    <path d="M22 30 Q26 34 30 30 Q26 26 22 30" fill="#FFB6C1" opacity="0.1"/>
    <path d="M35 25 Q31 29 35 33 Q39 29 35 25" fill="#FFB6C1" opacity="0.08"/>
  </svg>
);
