'use client';
import { useState, useEffect } from 'react';
import { useWindowSize } from '@/service/hooks';
import Image from 'next/image';
export default function EventLine({
  isFirst,
  isLast,
  id,
  type,
}: {
  isFirst: boolean;
  isLast: boolean;
  id: string;
  type: string;
}) {
  const windowSize = useWindowSize();
  const [elementHeight, setElementHeight] = useState<number | null>(null);
  useEffect(() => {
    const el = document.getElementById(id);
    if (el) {
      setElementHeight(el.clientHeight / 2 / 12 || null);
    }
  }, [windowSize, id]);
  return (
    <div className="flex flex-col justify-center items-center w-8 gap-2 order-1 md:order-2">
      {!isFirst ? (
        <div
          className="w-1 bg-stone-200 dark:bg-stone-100 rounded-b"
          style={{ height: `${elementHeight}rem` }}
        />
      ) : (
        <div className="w-1" style={{ height: `${elementHeight}rem` }} />
      )}
      <div className="rounded-[50%] border-4 border-white dark:bg-green-400 bg-purple-900 md:h-16 md:w-16 h-12 w-12 flex justify-center items-center shadow-lg dark:shadow-none">
        <Image
          src={`/${type}.svg`}
          alt={type}
          width={27}
          height={27}
          className="invert"
        />
      </div>
      {!isLast ? (
        <div
          className="w-1 bg-stone-200 dark:bg-stone-100 rounded-t"
          style={{ height: `${elementHeight}rem` }}
        />
      ) : (
        <div className="w-1" style={{ height: `${elementHeight}rem` }} />
      )}
    </div>
  );
}
