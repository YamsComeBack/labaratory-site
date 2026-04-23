'use client';

import { useMemo } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function useChunkSmart<T>(list: ReadonlyArray<T>): T[][] {
  const isMobile = useMediaQuery('(max-width: 767px)'); // < 768 px
  return useMemo(() => {
    const rows: T[][] = [];
    const maxPerRow = isMobile ? 2 : 3;

    for (let i = 0; i < list.length; ) {
      const rest = list.length - i;

      // Спец-правило как было: 4 → 2 + 2 (только для десктопа)
      const take =
        !isMobile && rest === 4 ? 2 : Math.min(maxPerRow, rest);

      rows.push(list.slice(i, (i += take)));
    }
    return rows;
  }, [list, isMobile]);
}
