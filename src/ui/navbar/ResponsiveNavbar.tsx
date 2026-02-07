'use client';
import { useAppDispatch, useAppSelector, useWindowSize } from '@/service/hooks';
import { NavLink } from './NavLink';
import {
  closeNavbar,
  selectNavbarIsOpen,
  toggleNavbar,
} from '@/app/features/navbar/navbarSlide';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

export default function ResponsiveNavbar() {
  const dispatch = useAppDispatch();
  const windowSize = useWindowSize();
  const isResponsiveNavbarOpen = useAppSelector(selectNavbarIsOpen);

  useEffect(() => {
    if (windowSize.width > 767) {
      dispatch(closeNavbar());
    }
  }, [windowSize, dispatch]);

  const cx = classNames;
  const [mounted, setMounted] = useState(false);
  const [animate, setAnimate] = useState(false);
  const prevOpen = useRef(isResponsiveNavbarOpen);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) {
      prevOpen.current = isResponsiveNavbarOpen;
      return;
    }
    if (prevOpen.current !== isResponsiveNavbarOpen) {
      setAnimate(true);
      prevOpen.current = isResponsiveNavbarOpen;
    }
  }, [isResponsiveNavbarOpen, mounted]);

  useEffect(() => {
    if (windowSize.width > 767) {
      prevOpen.current = isResponsiveNavbarOpen;
      setAnimate(false);
    }
  }, [windowSize.width, isResponsiveNavbarOpen]);

  const handleNavbarState = () => {
    dispatch(toggleNavbar(!isResponsiveNavbarOpen));
  };
  return (
    <div
      className={cx(
        'md:hidden flex flex-col items-start p-4 justify-start overflow-hidden h-[300px] w-full gap-8 bg-white dark:bg-zinc-900 z-40 translate-y-[-300px] border-b border-green-400 static',
        {
          slideAnimation: animate && isResponsiveNavbarOpen,
          closeAnimation: animate && !isResponsiveNavbarOpen,
        },
      )}
    >
      <NavLink
        title="About"
        link="about-section"
        onClick={() => dispatch(closeNavbar())}
      />
      <NavLink
        title="Skills"
        link="skills-section"
        onClick={() => dispatch(closeNavbar())}
      />
      <div className="flex justify-center h-12 items-center">
        <Link href={'https://github.com/ciaran-m-98'} target="_blank">
          <Image
            className="dark:invert"
            src={'/github-mark.svg'}
            alt={'Github Link'}
            width={30}
            height={30}
            priority
          />
        </Link>
      </div>
      <div className="flex md:hidden justify-center items-center absolute bottom-3 right-4">
        <button onClick={() => handleNavbarState()}>
          <Image
            className={cx('dark:invert', {
              rotateAnimation: animate && isResponsiveNavbarOpen,
              reverseRotateAnimation: animate && !isResponsiveNavbarOpen,
            })}
            src={'/chevron-down.svg'}
            alt={'Open / Close Menu'}
            width={30}
            height={30}
            priority
          />
        </button>
      </div>
    </div>
  );
}
