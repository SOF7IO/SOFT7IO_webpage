export function BackgroundDecoration() {
  return (
    <div
      className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 overflow-visible"
      style={{ width: "100vw", height: "100vh" }}
      aria-hidden
    >
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        width="20000"
        height="20000"
        viewBox="0 0 400 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <path d="M200 50 L350 550 L50 550 Z" stroke="currentColor" strokeWidth="2" />
        <path d="M200 50 L200 550" stroke="currentColor" strokeWidth="1.5" />
        <path d="M120 200 L280 200" stroke="currentColor" strokeWidth="1" />
        <path d="M90 350 L310 350" stroke="currentColor" strokeWidth="1" />
        <path d="M70 480 L330 480" stroke="currentColor" strokeWidth="1" />
        <path d="M150 200 L200 350" stroke="currentColor" strokeWidth="0.8" />
        <path d="M250 200 L200 350" stroke="currentColor" strokeWidth="0.8" />
        <path d="M130 350 L200 480" stroke="currentColor" strokeWidth="0.8" />
        <path d="M270 350 L200 480" stroke="currentColor" strokeWidth="0.8" />
        <path d="M140 150 L260 150" stroke="currentColor" strokeWidth="1" />
        <path d="M160 100 L240 100" stroke="currentColor" strokeWidth="0.8" />
        <path d="M100 300 L150 200 L120 200" stroke="currentColor" strokeWidth="0.6" />
        <path d="M300 300 L250 200 L280 200" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="200" cy="550" r="15" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}
