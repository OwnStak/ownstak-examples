export const FireIcon = ({ className = "w-4 h-4", style }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={style}>
    <path d="M8.5 12.5c0-1.5 1.5-3 3-3s3 1.5 3 3-1.5 3-3 3-3-1.5-3-3-3z"/>
    <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"/>
    <path d="M12 6c-3.3 0-6 2.7-6 6 0 1.3.4 2.5 1.1 3.5l1.4-1.4c-.4-.6-.5-1.3-.5-2.1 0-2.2 1.8-4 4-4s4 1.8 4 4c0 .8-.2 1.5-.5 2.1l1.4 1.4c.7-1 1.1-2.2 1.1-3.5 0-3.3-2.7-6-6-6z"/>
  </svg>
);

export const SparkleIcon = ({ className = "w-6 h-6", style }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={style}>
    <path d="M12 0l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 0z"/>
    <circle cx="6" cy="6" r="1"/>
    <circle cx="18" cy="18" r="1"/>
    <circle cx="18" cy="6" r="1"/>
  </svg>
);

export const LeafIcon = ({ className = "w-6 h-6", style }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={style}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.19 0 2.34-.21 3.41-.6.3-.11.49-.4.49-.72 0-.43-.35-.78-.78-.78-.28 0-.53.15-.67.39-.78.28-1.62.43-2.45.43-3.86 0-7-3.14-7-7s3.14-7 7-7c.83 0 1.67.15 2.45.43.14.24.39.39.67.39.43 0 .78-.35.78-.78 0-.32-.19-.61-.49-.72-1.07-.39-2.22-.6-3.41-.6z"/>
    <path d="M16.5 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    <path d="M7 15c0 2.21 1.79 4 4 4h1c.55 0 1-.45 1-1s-.45-1-1-1h-1c-1.1 0-2-.9-2-2v-1c0-.55-.45-1-1-1s-1 .45-1 1v1z"/>
  </svg>
);

export const TruckIcon = ({ className = "w-6 h-6", style }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={style}>
    <path d="M1 4h14v11H1V4zm16 7h4v4h-4v-4zm1-2V6l2 2v1h-2z"/>
    <circle cx="4" cy="19" r="2"/>
    <circle cx="20" cy="19" r="2"/>
    <path d="M6 19h8v-2H6v2z"/>
    <path d="M16 6h5l-2-2h-3v2z"/>
  </svg>
);

export const ArrowRightIcon = ({ className = "w-4 h-4", style }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={style}>
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
  </svg>
);

export const MinusIcon = ({ className = "w-4 h-4", style }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={style}>
    <path d="M19 13H5v-2h14v2z"/>
  </svg>
);

export const PlusIcon = ({ className = "w-4 h-4", style }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={style}>
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
  </svg>
);

export const CheckIcon = ({ className = "w-4 h-4", style }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" style={style}>
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
  </svg>
);

export const ShoppingCartIcon = ({ className = "w-5 h-5", style }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}>
    <circle cx="9" cy="21" r="1"/>
    <circle cx="20" cy="21" r="1"/>
    <path d="m1 1 4 4 2 11h9l5-11H8"/>
  </svg>
);

export const ShoppingBagIcon = ({ className = "w-5 h-5", style }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}>
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

export const StarIcon = ({ className = "w-4 h-4", filled = false, style }) => (
  <svg className={className} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" style={style}>
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
);

export const TrashIcon = ({ className = "w-4 h-4", style }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={style}>
    <polyline points="3,6 5,6 21,6"/>
    <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"/>
    <line x1="10" y1="11" x2="10" y2="17"/>
    <line x1="14" y1="11" x2="14" y2="17"/>
  </svg>
); 