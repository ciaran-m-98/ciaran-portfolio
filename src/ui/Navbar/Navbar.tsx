'use client';
import Link from 'next/link';
import Image from 'next/image';
import { NavLink } from './NavLink';
import {
  useAppDispatch,
  useAppSelector,
  useScrollPosition,
  useTheme,
} from '@/service/hooks';
import {
  selectNavbarIsOpen,
  toggleNavbar,
  closeNavbar,
} from '@/app/features/navbar/navbarSlide';
import '../../app/globals.css';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
export default function Navbar() {
  const dispatch = useAppDispatch();
  const isResponsiveNavbarOpen = useAppSelector(selectNavbarIsOpen);
  const handleNavbarState = () => {
    dispatch(toggleNavbar(!isResponsiveNavbarOpen));
  };
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

  return (
    <nav
      className={cx(
        'sticky top-0 w-full h-16 flex flex-row px-2 justify-between items-center z-50 border-b border-green-400',
        {
          'backdrop-blur-md': !isScrollAtTop,
          'border-b-[0px]': isResponsiveNavbarOpen,
        },
      )}
    >
      <div>
        <NavLink
          title="Ciaran Melarkey"
          link="main-section"
          extraClass={'text-xl'}
          onClick={() => dispatch(closeNavbar())}
        />
      </div>
      <div className="hidden md:flex gap-8">
        <NavLink title="About" link="about-section" />
        <NavLink title="Skills" link="skills-section" />
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
      <div className="flex md:hidden justify-center items-center">
        <button onClick={() => handleNavbarState()}>
          <Image
            className="dark:invert"
            src={isResponsiveNavbarOpen ? '/menu-open.svg' : '/menu.svg'}
            alt={'Open / Close Menu'}
            width={30}
            height={30}
            priority
          />
        </button>
      </div>
    </nav>
  );
}
