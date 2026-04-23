import { useEffect } from 'react';

export const useBodyScrollLock = (active: boolean) => {
  useEffect(() => {
    document.documentElement.classList.toggle('overflow-hidden', active);
  }, [active]);
};