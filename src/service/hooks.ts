'use client';
import { useLayoutEffect, useState } from 'react';

type windowSize = {
  width: number;
  height: number;
};
type windowSizeHook = windowSize;

export const useWindowSize = (): windowSizeHook => {
  const isClient = typeof window !== 'undefined';

  const initialWindowSize: windowSize = {
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  };

  const [windowSize, setWindowSize] = useState<windowSize>(initialWindowSize);

  const handleSize = (): void => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    if (!isClient) return;

    handleSize();

    window.addEventListener('resize', handleSize);

    return () => window.removeEventListener('resize', handleSize);
  }, [isClient]);

  return windowSize;
};
