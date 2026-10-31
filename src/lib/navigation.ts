'use client';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { hrefFor } from '../config/routes';

/** Navigate by route id. The `platform` id scrolls to the #platform section when already on Home. */
export function useGo() {
  const router = useRouter();
  return useCallback(
    (id: string) => {
      if (id === 'platform' && window.location.pathname === '/') {
        history.replaceState(null, '', '/#platform');
        const el = document.getElementById('platform');
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
        return;
      }
      router.push(hrefFor(id));
    },
    [router],
  );
}
