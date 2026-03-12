/**
 * Themed SVG background decorations for each section/page.
 * These are subtle, professional vector patterns that add depth.
 */

// Safari compass rose - for Services / "What We Offer"
export const CompassDecoration = ({ className = "" }: { className?: string }) => (
  <svg
    className={`pointer-events-none select-none ${className}`}
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer ring */}
    <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
    <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.3" opacity="0.06" />
    <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="0.3" opacity="0.05" />
    {/* Cardinal lines */}
    <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="0.3" opacity="0.06" />
    <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="0.3" opacity="0.06" />
    {/* Diagonal lines */}
    <line x1="73" y1="73" x2="327" y2="327" stroke="currentColor" strokeWidth="0.3" opacity="0.04" />
    <line x1="327" y1="73" x2="73" y2="327" stroke="currentColor" strokeWidth="0.3" opacity="0.04" />
    {/* Compass needle */}
    <polygon points="200,40 210,200 200,180 190,200" fill="currentColor" opacity="0.06" />
    <polygon points="200,360 210,200 200,220 190,200" fill="currentColor" opacity="0.04" />
    {/* Tick marks */}
    {Array.from({ length: 36 }).map((_, i) => {
      const angle = (i * 10 * Math.PI) / 180;
      const r1 = 175;
      const r2 = i % 9 === 0 ? 160 : 168;
      return (
        <line
          key={i}
          x1={200 + r1 * Math.sin(angle)}
          y1={200 - r1 * Math.cos(angle)}
          x2={200 + r2 * Math.sin(angle)}
          y2={200 - r2 * Math.cos(angle)}
          stroke="currentColor"
          strokeWidth={i % 9 === 0 ? "0.5" : "0.3"}
          opacity={i % 9 === 0 ? "0.08" : "0.04"}
        />
      );
    })}
  </svg>
);

// Topographic contour lines - for Routes
export const TopoDecoration = ({ className = "" }: { className?: string }) => (
  <svg
    className={`pointer-events-none select-none ${className}`}
    viewBox="0 0 600 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M-50 200 Q100 80, 200 150 T400 120 T600 180 T800 100" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
    <path d="M-50 230 Q120 120, 220 180 T420 150 T620 210 T800 130" stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
    <path d="M-50 260 Q80 160, 240 210 T440 180 T640 240 T800 160" stroke="currentColor" strokeWidth="0.5" opacity="0.04" />
    <path d="M-50 290 Q100 200, 260 240 T460 210 T660 270 T800 190" stroke="currentColor" strokeWidth="0.4" opacity="0.04" />
    <path d="M-50 320 Q120 240, 280 270 T480 240 T680 300 T800 220" stroke="currentColor" strokeWidth="0.4" opacity="0.03" />
    {/* Mountain peaks */}
    <path d="M250 120 L270 60 L290 120" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
    <path d="M400 100 L430 30 L460 100" stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
    <path d="M360 130 L380 80 L400 130" stroke="currentColor" strokeWidth="0.4" opacity="0.04" />
  </svg>
);

// Quotation marks + speech bubbles - for Testimonials
export const TestimonialDecoration = ({ className = "" }: { className?: string }) => (
  <svg
    className={`pointer-events-none select-none ${className}`}
    viewBox="0 0 500 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Large open quote */}
    <path d="M60 120 Q60 60 120 60 L120 80 Q80 80 80 120 L120 120 L120 160 L60 160 Z" fill="currentColor" opacity="0.04" />
    <path d="M140 120 Q140 60 200 60 L200 80 Q160 80 160 120 L200 120 L200 160 L140 160 Z" fill="currentColor" opacity="0.04" />
    {/* Scattered dots */}
    {[
      [350, 50], [380, 70], [400, 40], [420, 80], [450, 55],
      [360, 240], [390, 260], [410, 230], [440, 250], [470, 235],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="2" fill="currentColor" opacity="0.05" />
    ))}
    {/* Decorative lines */}
    <line x1="300" y1="140" x2="480" y2="140" stroke="currentColor" strokeWidth="0.3" opacity="0.05" />
    <line x1="320" y1="160" x2="460" y2="160" stroke="currentColor" strokeWidth="0.3" opacity="0.04" />
  </svg>
);

// Road/route path - for Booking CTA
export const RoadDecoration = ({ className = "" }: { className?: string }) => (
  <svg
    className={`pointer-events-none select-none ${className}`}
    viewBox="0 0 600 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Winding road */}
    <path d="M-20 250 C100 250, 100 50, 200 50 S300 250, 400 250 S500 50, 620 50" stroke="currentColor" strokeWidth="1" opacity="0.05" />
    <path d="M-20 260 C100 260, 100 60, 200 60 S300 260, 400 260 S500 60, 620 60" stroke="currentColor" strokeWidth="1" opacity="0.05" />
    {/* Center dashes */}
    {Array.from({ length: 20 }).map((_, i) => {
      const t = i / 20;
      const x = -20 + t * 640;
      const y = 255 + Math.sin(t * Math.PI * 2) * -100;
      return (
        <circle key={i} cx={x} cy={y} r="1.5" fill="currentColor" opacity="0.04" />
      );
    })}
    {/* Location pin */}
    <path d="M500 80 C500 60 520 45 520 65 C520 80 500 100 500 100 C500 100 480 80 480 65 C480 45 500 60 500 80Z" fill="currentColor" opacity="0.06" />
  </svg>
);

// Globe with coordinate grid - for Contact
export const GlobeDecoration = ({ className = "" }: { className?: string }) => (
  <svg
    className={`pointer-events-none select-none ${className}`}
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
    {/* Longitude curves */}
    <ellipse cx="200" cy="200" rx="80" ry="160" stroke="currentColor" strokeWidth="0.3" opacity="0.05" />
    <ellipse cx="200" cy="200" rx="40" ry="160" stroke="currentColor" strokeWidth="0.3" opacity="0.04" />
    <ellipse cx="200" cy="200" rx="120" ry="160" stroke="currentColor" strokeWidth="0.3" opacity="0.04" />
    {/* Latitude lines */}
    <ellipse cx="200" cy="200" rx="160" ry="40" stroke="currentColor" strokeWidth="0.3" opacity="0.04" />
    <ellipse cx="200" cy="200" rx="160" ry="80" stroke="currentColor" strokeWidth="0.3" opacity="0.05" />
    <ellipse cx="200" cy="200" rx="160" ry="120" stroke="currentColor" strokeWidth="0.3" opacity="0.04" />
    {/* Equator */}
    <line x1="40" y1="200" x2="360" y2="200" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
    {/* Africa dot */}
    <circle cx="220" cy="210" r="4" fill="currentColor" opacity="0.08" />
    <circle cx="220" cy="210" r="8" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
  </svg>
);

// Stars constellation - for Reviews page
export const StarFieldDecoration = ({ className = "" }: { className?: string }) => (
  <svg
    className={`pointer-events-none select-none ${className}`}
    viewBox="0 0 600 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Star shapes */}
    {[
      { x: 80, y: 60, s: 8 },
      { x: 150, y: 120, s: 6 },
      { x: 500, y: 80, s: 10 },
      { x: 420, y: 300, s: 7 },
      { x: 50, y: 280, s: 5 },
      { x: 300, y: 40, s: 9 },
      { x: 550, y: 200, s: 6 },
      { x: 200, y: 340, s: 8 },
    ].map(({ x, y, s }, i) => (
      <g key={i} transform={`translate(${x},${y})`}>
        <polygon
          points={`0,${-s} ${s * 0.22},${-s * 0.3} ${s * 0.95},${-s * 0.3} ${s * 0.36},${s * 0.12} ${s * 0.59},${s} 0,${s * 0.38} ${-s * 0.59},${s} ${-s * 0.36},${s * 0.12} ${-s * 0.95},${-s * 0.3} ${-s * 0.22},${-s * 0.3}`}
          fill="currentColor"
          opacity="0.06"
        />
      </g>
    ))}
    {/* Connecting constellation lines */}
    <line x1="80" y1="60" x2="150" y2="120" stroke="currentColor" strokeWidth="0.3" opacity="0.04" />
    <line x1="150" y1="120" x2="300" y2="40" stroke="currentColor" strokeWidth="0.3" opacity="0.03" />
    <line x1="300" y1="40" x2="500" y2="80" stroke="currentColor" strokeWidth="0.3" opacity="0.04" />
    <line x1="500" y1="80" x2="550" y2="200" stroke="currentColor" strokeWidth="0.3" opacity="0.03" />
    <line x1="550" y1="200" x2="420" y2="300" stroke="currentColor" strokeWidth="0.3" opacity="0.03" />
    <line x1="50" y1="280" x2="200" y2="340" stroke="currentColor" strokeWidth="0.3" opacity="0.03" />
  </svg>
);

// Airplane path - for Services page
export const AirplanePathDecoration = ({ className = "" }: { className?: string }) => (
  <svg
    className={`pointer-events-none select-none ${className}`}
    viewBox="0 0 600 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Flight path arc */}
    <path d="M50 250 Q200 -50, 550 100" stroke="currentColor" strokeWidth="0.5" opacity="0.06" strokeDasharray="8 4" />
    <path d="M50 260 Q200 -40, 550 110" stroke="currentColor" strokeWidth="0.3" opacity="0.04" />
    {/* Small airplane silhouette at the end */}
    <g transform="translate(540, 95) rotate(-20)" opacity="0.08">
      <path d="M0 0 L-8 -3 L-20 0 L-8 3 Z" fill="currentColor" />
      <path d="M-12 0 L-16 -8 L-18 -8 L-15 0 L-18 8 L-16 8 Z" fill="currentColor" />
      <path d="M-18 0 L-20 -3 L-21 -3 L-20 0 L-21 3 L-20 3 Z" fill="currentColor" />
    </g>
    {/* Origin dot */}
    <circle cx="50" cy="250" r="3" fill="currentColor" opacity="0.06" />
    <circle cx="50" cy="250" r="6" stroke="currentColor" strokeWidth="0.3" opacity="0.04" />
  </svg>
);

// Booking form decoration - pen/document
export const BookingDecoration = ({ className = "" }: { className?: string }) => (
  <svg
    className={`pointer-events-none select-none ${className}`}
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Document outline */}
    <rect x="120" y="60" width="160" height="220" rx="8" stroke="currentColor" strokeWidth="0.5" opacity="0.05" />
    <rect x="130" y="70" width="140" height="200" rx="4" stroke="currentColor" strokeWidth="0.3" opacity="0.04" />
    {/* Lines on document */}
    {[100, 120, 140, 160, 180, 200, 220].map((y, i) => (
      <line key={i} x1="150" y1={y} x2={250 - i * 5} y2={y} stroke="currentColor" strokeWidth="0.3" opacity="0.04" />
    ))}
    {/* Checkmarks */}
    <path d="M140 98 L145 103 L155 93" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
    <path d="M140 118 L145 123 L155 113" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
    <path d="M140 138 L145 143 L155 133" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
    {/* Pen */}
    <g transform="translate(280, 200) rotate(45)" opacity="0.06">
      <rect x="-3" y="-40" width="6" height="50" rx="1" fill="currentColor" />
      <polygon points="-3,10 3,10 0,18" fill="currentColor" />
    </g>
  </svg>
);
