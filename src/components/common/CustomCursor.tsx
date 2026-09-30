import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, input, [role="button"], .cursor-pointer, .interactive-node');
        setIsHovering(!!interactive);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-200">
      {/* Central reticle dot */}
      <div
        className="fixed -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-circuit-cyan rounded-full shadow-[0_0_8px_#00f0ff]"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
      {/* Outer tracking ring with HUD crosshairs */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-100 ease-out flex items-center justify-center ${
          isHovering
            ? 'w-9 h-9 border-circuit-cyan bg-circuit-cyan/10 scale-110'
            : 'w-6 h-6 border-slate-500/50 scale-100'
        }`}
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      >
        {isHovering && (
          <div className="w-1.5 h-1.5 border-t border-l border-circuit-cyan opacity-80" />
        )}
      </div>
    </div>
  );
};
