import { useState, useEffect } from 'react';

export function useRain() {
  const [raindrops, setRaindrops] = useState([]);

  const generateDrops = () => {
    const dropCount = window.innerWidth < 768 ? 40 : 100;
    const width = window.innerWidth;
    const height = window.innerHeight;
    return Array.from({ length: dropCount }).map(() => ({
      id: Math.random().toString(36).slice(2),
      x: Math.random() * width,
      y: Math.random() * height,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 1.5,
      height: Math.random() * -60 + 40,
    }));
  };

  useEffect(() => {
    setRaindrops(generateDrops());
    const handleResize = () => setRaindrops(generateDrops());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return raindrops;
}