import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Only show custom cursor on non-touch devices
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    cursor.style.display = 'block';
    dot.style.display = 'block';

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;
      cursor.style.left = `${pos.current.x}px`;
      cursor.style.top = `${pos.current.y}px`;
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const handleEnter = () => {
      cursor.classList.add('scale-150', 'bg-[#c9a96e]/20');
    };
    const handleLeave = () => {
      cursor.classList.remove('scale-150', 'bg-[#c9a96e]/20');
    };

    const addListeners = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea').forEach((el) => {
        el.addEventListener('mouseenter', handleEnter);
        el.addEventListener('mouseleave', handleLeave);
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    addListeners();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] hidden"
        style={{
          width: '40px',
          height: '40px',
          border: '1px solid rgba(201, 169, 110, 0.6)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.15s ease, background-color 0.2s ease, border-color 0.2s ease',
          mixBlendMode: 'difference',
        }}
      />
      {/* Dot cursor */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] hidden"
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: '#c9a96e',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}
