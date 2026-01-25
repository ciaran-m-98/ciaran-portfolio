'use client';
import { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, AppStore, RootState } from './store';

type windowSize = {
  width: number;
  height: number;
};
type windowSizeHook = windowSize;

export const useWindowSize = (): windowSizeHook => {
  if (typeof window === 'undefined') {
    return {
      width: 0,
      height: 0,
    };
  }
  const initialWindowSize: windowSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const [windowSize, setWindowSize] = useState<windowSize>(initialWindowSize);

  const handleSize = (): void => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    handleSize();

    window.addEventListener('resize', handleSize);

    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return windowSize;
};

export const useScrollPosition = (): number => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return scrollPosition;
};
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

export const useTheme = (): 'light' | 'dark' => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useLayoutEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (isDarkMode: boolean) => {
      setTheme(isDarkMode ? 'dark' : 'light');
    };

    applyTheme(darkModeMediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      applyTheme(event.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return theme;
}