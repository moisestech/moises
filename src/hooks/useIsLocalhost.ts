'use client';

import { useState, useEffect } from 'react';

/**
 * Returns true when running on localhost (dev/preview).
 * Use to show edit links, draft tools, etc. only when viewing locally.
 */
export function useIsLocalhost(): boolean {
  const [isLocalhost, setIsLocalhost] = useState(false);

  useEffect(() => {
    const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
    setIsLocalhost(hostname === 'localhost' || hostname === '127.0.0.1');
  }, []);

  return isLocalhost;
}
