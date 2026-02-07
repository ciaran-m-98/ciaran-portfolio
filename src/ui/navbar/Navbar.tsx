'use client';
import Link from 'next/link';
import Image from 'next/image';
import { NavLink } from './NavLink';
import {
  useAppDispatch,
  useScrollPosition,
  useWindowSize,
} from '@/service/hooks';
import '../../app/globals.css';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
export default function Navbar() {
  const windowSize = useWindowSize();
  const dispatch = useAppDispatch();

  const num = useScrollPosition();
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const cx = classNames;

  return (
    <nav
      className={cx(
        'sticky top-0 w-full h-16 flex bg-transparent md:dark:bg-zinc-900 md:bg-white md:shadow-lg z-10',
        {
          'border-b border-green-400': mounted && windowSize.width > 767,
        },
      )}
    >
      <div className="flex flex-row justify-end items-center w-full px-4 h-16">
        <div className="hidden md:flex gap-16">
          <ul className="flex flex-row gap-16 justify-center items-center">
            <li>
              <NavLink title="About" link="about-section" />
            </li>
            <li>
              <NavLink title="Skills" link="skills-section" />
            </li>
          </ul>
          <div className="flex justify-center items-center">
            <Link href={'https://github.com/ciaran-m-98'} target="_blank">
              <Image
                className="dark:invert"
                src={'/github-mark.svg'}
                alt={'Github Link'}
                width={24}
                height={24}
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
