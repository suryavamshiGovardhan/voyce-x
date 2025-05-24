
import React from 'react';

interface JapaneseIconProps {
  type: 'cherry' | 'wave' | 'mountain' | 'bamboo' | 'zen' | 'torii' | 'crane' | 'lotus';
  className?: string;
  animate?: boolean;
}

export default function JapaneseIcon({ type, className = "", animate = true }: JapaneseIconProps) {
  const getIcon = () => {
    const baseClass = `w-8 h-8 ${animate ? 'float-3d' : ''} ${className}`;
    
    switch (type) {
      case 'cherry':
        return (
          <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2C12 8 8 12 2 12" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 2C12 8 16 12 22 12" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="12" cy="12" r="3" fill="rgba(255, 218, 185, 0.6)"/>
            <circle cx="8" cy="8" r="1.5" fill="rgba(255, 182, 193, 0.8)"/>
            <circle cx="16" cy="8" r="1.5" fill="rgba(255, 182, 193, 0.8)"/>
            <circle cx="6" cy="14" r="1" fill="rgba(255, 182, 193, 0.6)"/>
            <circle cx="18" cy="14" r="1" fill="rgba(255, 182, 193, 0.6)"/>
          </svg>
        );
      
      case 'wave':
        return (
          <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M2 12c2-4 4-4 6 0s4 4 6 0s4-4 6 0" strokeWidth="2" strokeLinecap="round"/>
            <path d="M2 16c2-3 4-3 6 0s4 3 6 0s4-3 6 0" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
            <path d="M2 8c2-2 4-2 6 0s4 2 6 0s4-2 6 0" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
          </svg>
        );
      
      case 'mountain':
        return (
          <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M8 20L12 8L16 20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 20L8 12L12 20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
            <path d="M12 20L16 12L20 20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
            <circle cx="12" cy="10" r="1" fill="white"/>
          </svg>
        );
      
      case 'bamboo':
        return (
          <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="10" y1="2" x2="10" y2="22" strokeWidth="3" strokeLinecap="round"/>
            <line x1="14" y1="2" x2="14" y2="22" strokeWidth="3" strokeLinecap="round"/>
            <line x1="8" y1="7" x2="16" y2="7" strokeWidth="1" strokeLinecap="round"/>
            <line x1="8" y1="12" x2="16" y2="12" strokeWidth="1" strokeLinecap="round"/>
            <line x1="8" y1="17" x2="16" y2="17" strokeWidth="1" strokeLinecap="round"/>
          </svg>
        );
      
      case 'zen':
        return (
          <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" strokeWidth="2"/>
            <path d="M12 2a10 10 0 0 0 0 20" strokeWidth="2" fill="rgba(14, 165, 233, 0.2)"/>
            <circle cx="12" cy="12" r="3" fill="none" strokeWidth="1"/>
            <circle cx="12" cy="12" r="1" fill="currentColor"/>
          </svg>
        );
      
      case 'torii':
        return (
          <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="6" y1="6" x2="18" y2="6" strokeWidth="3" strokeLinecap="round"/>
            <line x1="6" y1="10" x2="18" y2="10" strokeWidth="2" strokeLinecap="round"/>
            <line x1="8" y1="6" x2="8" y2="20" strokeWidth="2" strokeLinecap="round"/>
            <line x1="16" y1="6" x2="16" y2="20" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      
      case 'crane':
        return (
          <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M6 8c0-2 2-4 6-4s6 2 6 4c0 4-2 6-6 6s-6-2-6-6z" strokeWidth="1.5" fill="rgba(255, 218, 185, 0.3)"/>
            <path d="M12 14c-2 2-4 4-6 6" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 14c2 2 4 4 6 6" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 8v6" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="10" cy="9" r="1" fill="currentColor"/>
          </svg>
        );
      
      case 'lotus':
        return (
          <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 20c-2-4-4-6-4-10s2-6 4-6 4 2 4 6-2 6-4 10z" strokeWidth="1.5" fill="rgba(255, 218, 185, 0.4)"/>
            <path d="M8 16c-2-2-4-3-4-6s2-4 4-4 4 1 4 4-2 4-4 6z" strokeWidth="1.5" fill="rgba(14, 165, 233, 0.3)"/>
            <path d="M16 16c2-2 4-3 4-6s-2-4-4-4-4 1-4 4 2 4 4 6z" strokeWidth="1.5" fill="rgba(14, 165, 233, 0.3)"/>
            <circle cx="12" cy="16" r="2" fill="rgba(255, 218, 185, 0.6)"/>
          </svg>
        );
      
      default:
        return (
          <svg className={baseClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" strokeWidth="2"/>
          </svg>
        );
    }
  };

  return <div className="inline-block">{getIcon()}</div>;
}
