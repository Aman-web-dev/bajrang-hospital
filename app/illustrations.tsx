import type { CSSProperties } from 'react';

const base: CSSProperties = { display: 'block' };

export function IllustrationKids(props: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label="Children and family care" preserveAspectRatio="xMidYMid meet" style={base} className={props.className}>
      <defs>
        <linearGradient id="ikBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fde2c2" /><stop offset="1" stopColor="#f7c994" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#ikBg)" rx="8" />
      <circle cx="100" cy="92" r="46" fill="#fff" stroke="#1f7770" strokeWidth="3" />
      <path d="M68 92a32 32 0 0 1 64 0" fill="none" stroke="#1f7770" strokeWidth="3" />
      <circle cx="86" cy="86" r="4" fill="#1f7770" /><circle cx="114" cy="86" r="4" fill="#1f7770" />
      <path d="M86 104q14 8 28 0" fill="none" stroke="#1f7770" strokeWidth="3" strokeLinecap="round" />
      <g fill="#e56d31">
        <circle cx="56" cy="60" r="10" /><circle cx="146" cy="58" r="7" /><circle cx="38" cy="140" r="6" /><circle cx="170" cy="150" r="9" />
      </g>
      <path d="M30 170h140" stroke="#1f7770" strokeWidth="3" strokeLinecap="round" />
      <g fill="#1f7770">
        <rect x="46" y="160" width="12" height="14" rx="2" />
        <rect x="84" y="160" width="12" height="14" rx="2" />
        <rect x="122" y="160" width="12" height="14" rx="2" />
      </g>
    </svg>
  );
}

export function IllustrationSurgery(props: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label="Surgery and operation theatre" preserveAspectRatio="xMidYMid meet" style={base} className={props.className}>
      <defs>
        <linearGradient id="isBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e3eef0" /><stop offset="1" stopColor="#c5dad9" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#isBg)" rx="8" />
      <circle cx="100" cy="70" r="38" fill="none" stroke="#1f7770" strokeWidth="4" />
      <circle cx="100" cy="70" r="22" fill="#fff" stroke="#1f7770" strokeWidth="3" />
      <path d="M100 48v44M78 70h44" stroke="#e56d31" strokeWidth="4" strokeLinecap="round" />
      <rect x="46" y="120" width="108" height="14" rx="3" fill="#fff" stroke="#1f7770" strokeWidth="3" />
      <rect x="56" y="140" width="88" height="8" rx="2" fill="#1f7770" opacity=".35" />
      <path d="M50 162q50 -28 100 0" fill="none" stroke="#1f7770" strokeWidth="3" />
      <g fill="#e56d31">
        <circle cx="36" cy="46" r="4" /><circle cx="164" cy="46" r="4" /><circle cx="32" cy="170" r="4" /><circle cx="168" cy="170" r="4" />
      </g>
    </svg>
  );
}

export function IllustrationMother(props: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label="Mother and baby care" preserveAspectRatio="xMidYMid meet" style={base} className={props.className}>
      <defs>
        <linearGradient id="imBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbd5c4" /><stop offset="1" stopColor="#f0b39c" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#imBg)" rx="8" />
      <circle cx="80" cy="90" r="36" fill="#fff" stroke="#1f7770" strokeWidth="3" />
      <path d="M62 90a18 18 0 0 1 36 0" fill="#1f7770" opacity=".15" />
      <path d="M70 96q10 6 20 0" stroke="#1f7770" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="72" cy="84" r="3" fill="#1f7770" /><circle cx="88" cy="84" r="3" fill="#1f7770" />
      <circle cx="130" cy="120" r="26" fill="#fff" stroke="#1f7770" strokeWidth="3" />
      <circle cx="124" cy="116" r="2.5" fill="#1f7770" /><circle cx="136" cy="116" r="2.5" fill="#1f7770" />
      <path d="M124 126q6 4 12 0" stroke="#1f7770" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M50 142q30 32 100 0" stroke="#e56d31" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="100" cy="56" r="6" fill="#e56d31" />
      <circle cx="160" cy="170" r="5" fill="#1f7770" />
    </svg>
  );
}

export function IllustrationHeart(props: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label="Heart and cardiology care" preserveAspectRatio="xMidYMid meet" style={base} className={props.className}>
      <defs>
        <linearGradient id="ihBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffd6c2" /><stop offset="1" stopColor="#f3a37e" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#ihBg)" rx="8" />
      <path d="M100 158s-46-28-46-66a26 26 0 0 1 46-16 26 26 0 0 1 46 16c0 38-46 66-46 66z" fill="#e0413b" stroke="#1f7770" strokeWidth="3" />
      <path d="M70 92h22l8 -16 12 32 8 -16h20" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <g fill="#1f7770">
        <circle cx="36" cy="40" r="4" /><circle cx="166" cy="50" r="4" /><circle cx="30" cy="160" r="4" /><circle cx="170" cy="170" r="4" />
      </g>
    </svg>
  );
}

export function IllustrationLab(props: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label="Diagnostic laboratory" preserveAspectRatio="xMidYMid meet" style={base} className={props.className}>
      <defs>
        <linearGradient id="ilBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#dceae6" /><stop offset="1" stopColor="#a8c7c1" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#ilBg)" rx="8" />
      <path d="M76 40v40l-26 60h76l-26 -60v-40z" fill="#fff" stroke="#1f7770" strokeWidth="3" strokeLinejoin="round" />
      <path d="M62 100h52" stroke="#e56d31" strokeWidth="3" />
      <circle cx="82" cy="118" r="3" fill="#e56d31" /><circle cx="92" cy="124" r="2" fill="#e56d31" /><circle cx="100" cy="116" r="3" fill="#1f7770" />
      <rect x="32" y="158" width="136" height="6" rx="2" fill="#1f7770" />
      <g fill="#fff" stroke="#1f7770" strokeWidth="2">
        <rect x="40" y="60" width="14" height="22" rx="2" /><rect x="146" y="64" width="14" height="18" rx="2" />
      </g>
    </svg>
  );
}

export function IllustrationAmbulance(props: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label="24/7 ambulance service" preserveAspectRatio="xMidYMid meet" style={base} className={props.className}>
      <defs>
        <linearGradient id="iaBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#cfe1dd" /><stop offset="1" stopColor="#8fb6b0" />
        </linearGradient>
      </defs>
      <rect width="200" height="200" fill="url(#iaBg)" rx="8" />
      <rect x="30" y="80" width="110" height="50" rx="8" fill="#fff" stroke="#1f7770" strokeWidth="3" />
      <path d="M140 96h22l18 18v16h-40z" fill="#fff" stroke="#1f7770" strokeWidth="3" strokeLinejoin="round" />
      <rect x="148" y="104" width="20" height="14" rx="2" fill="#e3eef0" stroke="#1f7770" strokeWidth="2" />
      <rect x="46" y="92" width="60" height="20" rx="3" fill="#e0413b" />
      <rect x="68" y="92" width="16" height="20" fill="#fff" />
      <rect x="68" y="98" width="16" height="8" fill="#e0413b" />
      <circle cx="62" cy="138" r="12" fill="#193331" />
      <circle cx="62" cy="138" r="5" fill="#fff" />
      <circle cx="148" cy="138" r="12" fill="#193331" />
      <circle cx="148" cy="138" r="5" fill="#fff" />
      <rect x="22" y="60" width="6" height="20" fill="#e56d31" />
      <path d="M25 60a6 6 0 1 1 -.1 .1" stroke="#e56d31" strokeWidth="2" fill="none" />
    </svg>
  );
}