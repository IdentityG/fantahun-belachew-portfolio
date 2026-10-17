'use client';
import { useEffect, useState } from 'react';
export default function ScrollProgress() {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(() => {
      const remaining = document.documentElement.scrollHeight - window.innerHeight;
      setPercent(remaining > 0 ? Math.min(100, (window.scrollY / remaining) * 100) : 0);
    }); };
    window.addEventListener('scroll', update, { passive: true }); update();
    return () => { window.removeEventListener('scroll', update); cancelAnimationFrame(frame); };
  }, []);
  return <div className="scroll-progress" style={{transform: `scaleX(${percent / 100})`}} aria-hidden="true" />;
}
