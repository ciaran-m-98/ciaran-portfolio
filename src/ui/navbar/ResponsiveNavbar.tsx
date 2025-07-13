'use client';
import { useAppDispatch, useAppSelector, useWindowSize } from '@/service/hooks';
import { NavLink } from './NavLink';
import {
  closeNavbar,
  selectNavbarIsOpen,
} from '@/app/features/navbar/navbarSlide';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function ResponsiveNavbar() {
  const dispatch = useAppDispatch();
  const windowSize = useWindowSize();
  const isResponsiveNavbarOpen = useAppSelector(selectNavbarIsOpen);
  const cssString = 'text-xl text-start pl-5 h-20 border-b';

  useEffect(() => {
    if (windowSize.width > 960) {
      dispatch(closeNavbar());
    }
  }, [windowSize]);

  return isResponsiveNavbarOpen ? (
    <div className="size-full md:hidden flex flex-col fixed bg-inherit font-[family-name:var(--font-orienta-sans)] z-40">
      <NavLink
        title="About"
        link="about-section"
        onClick={() => dispatch(closeNavbar())}
        extraClass={cssString}
      />
      <NavLink
        title="Skills"
        link="skills-section"
        onClick={() => dispatch(closeNavbar())}
        extraClass={cssString}
      />
      <div className='flex justify-center h-20 items-center'>
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
    </div>
  ) : (
    <></>
  );
}
