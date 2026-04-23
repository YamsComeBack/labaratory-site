import { useState, useEffect } from 'react';

export const useScrolled = (threshold = 0) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > threshold);
    onScroll();                                 // начальное значение
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return isScrolled;
};