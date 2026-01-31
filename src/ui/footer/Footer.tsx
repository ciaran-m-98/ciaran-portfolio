'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
export default function Footer() {
  const cx = classNames;
  const [selectedTheme, setSelectedTheme] = useState<string>('system');

  useEffect(() => {
    handleThemeChange(selectedTheme);
  }, [selectedTheme]);

  const handleThemeChange = (theme: string) => {
    document.documentElement.classList.remove('light', 'dark');
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else if (theme === 'dark') {
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
      <div className="rounded-3xl bg-neutral-100 dark:bg-zinc-700 w-auto h-8 flex flex-row justify-around items-center px-1">
        <span
          className={cx(
            'rounded-3xl w-7 h-7 flex items-center justify-center',
            {
              'dark:!bg-zinc-900 !bg-[#ffffff]': selectedTheme === 'system',
            },
          )}
          id="theme-device"
          onClick={() => {
            setSelectedTheme('system');
            handleThemeChange('system');
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
            'rounded-3xl w-7 h-7 flex items-center justify-center',
            {
              'dark:!bg-zinc-900 !bg-[#ffffff]': selectedTheme === 'light',
            },
          )}
          id="theme-light"
          onClick={() => {
            setSelectedTheme('light');
            handleThemeChange('light');
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
            'rounded-3xl w-7 h-7 flex items-center justify-center',
            {
              'dark:!bg-zinc-900 !bg-[#ffffff]': selectedTheme === 'dark',
            },
          )}
          id="theme-dark"
          onClick={() => {
            setSelectedTheme('dark');
            handleThemeChange('dark');
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
