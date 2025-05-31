'use-client';
import { useEffect, RefObject, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, AppStore, RootState } from './store';

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const elem = ref.current;

      if (!elem) return;

      if (elem.contains(event.target as HTMLElement)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

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

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
