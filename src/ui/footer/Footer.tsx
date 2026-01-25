'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@/service/hooks';
import classNames from 'classnames';
export default function Footer() {
  const theme = useTheme();
  const cx = classNames;
  const [selectedTheme, setSelectedTheme] = useState<string>('theme-device');
  useEffect(() => {
    handleThemeChange(selectedTheme);
  }, [theme]);

  const handleThemeChange = (theme: string) => {
    document.documentElement.classList.remove('light', 'dark');
    if (theme === 'theme-light') {
      document.documentElement.classList.add('light');
    } else if (theme === 'theme-dark') {
      document.documentElement.classList.add('dark');
    } else {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.add('light');
      }
    }
  };

  return (
    <div className="flex flex-row h-16 justify-between flex-wrap items-center p-4 border-t border-green-400">
      <div className="rounded-3xl dark:bg-zinc-700 w-auto h-8 flex flex-row justify-around items-center px-1">
        <span
          className={cx(
            'rounded-3xl w-7 h-7 block flex items-center justify-center',
            {
              'dark:!bg-zinc-900 !bg-stone-100':
                selectedTheme === 'theme-device',
            },
          )}
          id="theme-device"
          onClick={() => {
            setSelectedTheme('theme-device');
            handleThemeChange('theme-device');
          }}
        >
          <Image
            src="/theme-system.svg"
            alt="System Theme"
            width={16}
            height={16}
            className="dark:invert"
          />
        </span>
        <span
          className={cx(
            'rounded-3xl w-7 h-7 block flex items-center justify-center',
            {
              'dark:!bg-zinc-900 !bg-stone-100':
                selectedTheme === 'theme-light',
            },
          )}
          id="theme-light"
          onClick={() => {
            setSelectedTheme('theme-light');
            handleThemeChange('theme-light');
          }}
        >
          <Image
            src="/theme-light.svg"
            alt="Light Theme"
            width={20}
            height={20}
            className="dark:invert"
          />
        </span>
        <span
          className={cx(
            'rounded-3xl w-7 h-7 block flex items-center justify-center',
            {
              'dark:!bg-zinc-900 !bg-stone-100':
                selectedTheme === 'theme-dark',
            },
          )}
          id="theme-dark"
          onClick={() => {
            setSelectedTheme('theme-dark');
            handleThemeChange('theme-dark');
          }}
        >
          <Image
            src="/theme-dark.svg"
            alt="Dark Theme"
            width={20}
            height={20}
            className="dark:invert"
          />
        </span>
      </div>
      <span className="font-extralight text-sm font-[family-name:var(--font-jetbrains-mono)]">
        {`© ${new Date().getFullYear()} Ciarán Melarkey`}{' '}
      </span>
    </div>
  );
}
