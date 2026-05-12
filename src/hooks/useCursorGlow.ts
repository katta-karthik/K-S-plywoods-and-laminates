import { useEffect, useRef } from 'react';

export function useCursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia('(max-width: 768px)').matches) return;

    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.08;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.08;
      cursor.style.transform = `translate(${pos.current.x - 20}px, ${pos.current.y - 20}px)`;
      raf.current = requestAnimationFrame(animate);
    };

    const onMouseEnterLink = () => {
      cursor.style.transform += ' scale(1.5)';
      cursor.style.borderColor = '#c9a96e';
      cursor.style.backgroundColor = 'rgba(201, 169, 110, 0.1)';
    };

    const onMouseLeaveLink = () => {
      cursor.style.borderColor = 'rgba(201, 169, 110, 0.5)';
      cursor.style.backgroundColor = 'transparent';
    };

    document.addEventListener('mousemove', onMouseMove);
    raf.current = requestAnimationFrame(animate);

    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return { cursorRef, cursorDotRef };
}
