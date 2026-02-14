'use client';
import { useEffect, useState } from 'react';
import DarkVeil from './reactbits/DarkVeil';
import Threads from './reactbits/Threads';

export default function BackgroundVeil() {
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);

    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      {isDarkMode ? (
        <DarkVeil
          hueShift={56}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={1}
          scanlineFrequency={0}
          warpAmount={0}
        />
      ) : (
        <Threads
          color={[0.68, 0.68, 0.68]}
          amplitude={1}
          distance={0}
          enableMouseInteraction={false}
        />
      )}
    </div>
  );
}
