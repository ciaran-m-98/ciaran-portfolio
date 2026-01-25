'use client';
import {
  useAppDispatch,
  useAppSelector,
  useWindowSize,
  useScrollPosition,
} from '@/service/hooks';
import { NavLink } from './NavLink';
import {
  closeNavbar,
  selectNavbarIsOpen,
} from '@/app/features/navbar/navbarSlide';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

export default function ResponsiveNavbar() {
  const dispatch = useAppDispatch();
  const windowSize = useWindowSize();
  const isResponsiveNavbarOpen = useAppSelector(selectNavbarIsOpen);

  useEffect(() => {
    if (windowSize.width > 960) {
      dispatch(closeNavbar());
    }
  }, [windowSize]);
  const num = useScrollPosition();
  const [isScrollAtTop, setIsScrollAtTop] = useState<boolean>(true);
  useEffect(() => {
    if (num <= 72) {
      setIsScrollAtTop(true);
    } else {
      setIsScrollAtTop(false);
    }
  }, [num]);
  const cx = classNames;
  return isResponsiveNavbarOpen ? (
    <div
      className={
        'md:hidden flex flex-col fixed z-40 overflow-hidden h-48 w-full border-b border-green-400 backdrop-blur-md p-6 gap-8'
      }
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
    </div>
  ) : (
    <></>
  );
}
