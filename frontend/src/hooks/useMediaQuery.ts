'use client';
import { useEffect, useState } from 'react';

/** Возвращает true, если media-query выполняется (SSR-safe). */
export const useMediaQuery = (query: string): boolean => {
  const get = () => (typeof window !== 'undefined' ? window.matchMedia(query).matches : false);
  const [matches, setMatches] = useState<boolean>(get);

  useEffect(() => {
    const media = window.matchMedia(query);
    const handleChange = () => setMatches(media.matches);
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
};
