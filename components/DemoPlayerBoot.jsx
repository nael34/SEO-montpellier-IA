'use client';

import { useEffect } from 'react';

/** Réattache le lecteur après navigation client Next.js vers /demo-ia */
export default function DemoPlayerBoot() {
  useEffect(() => {
    const run = () => {
      if (typeof window !== 'undefined' && window.initAiDemoPlayer) {
        window.initAiDemoPlayer();
      }
    };
    run();
    const t1 = setTimeout(run, 150);
    const t2 = setTimeout(run, 600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return null;
}
