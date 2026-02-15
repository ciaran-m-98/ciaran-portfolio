'use client';
import { useState, useEffect } from 'react';
import NavLink from './NavLink';
import '../../app/globals.css';
import classNames from 'classnames';
import Image from 'next/image';
export default function Navbar() {
  const cx = classNames;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  if (!mounted) {
    return null;
  }
  return (
    <nav
      className={cx(
        'fixed top-8 left-0 right-0 mx-auto w-[calc(100%-2rem)] max-w-7xl h-16 rounded-3xl border border-stone-100/20 flex backdrop-blur-md z-20 px-4 shadow-lg dark:shadow-none dark:mix-blend-difference',
      )}
    >
      <div className="flex flex-row justify-center items-center w-full p-4 h-16">
        <div className="flex w-full justify-between">
          <div className="flex w-full h-full">
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
              <Image
                src={isDarkMode ? '/theme-dark.svg' : '/theme-light.svg'}
                alt={'Logo'}
                width={30}
                height={30}
                className="dark:invert"
              />
            </button>
          </div>
          <ul className="flex flex-row gap-8 justify-center items-center">
            <li>
              <NavLink title="Expertise" link="expertise-section" />
            </li>
            <li>
              <NavLink title="History" link="history-section" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
