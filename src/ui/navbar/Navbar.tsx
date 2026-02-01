'use client';
import Link from 'next/link';
import Image from 'next/image';
import { NavLink } from './NavLink';
import {
  useAppDispatch,
  useAppSelector,
  useScrollPosition,
  useWindowSize,
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
  const windowSize = useWindowSize();
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
        'sticky top-0 w-full h-16 flex px-2 dark:bg-zinc-900 bg-white z-50',
        {
          'border-b border-green-400': windowSize.width > 767,
          'backdrop-blur-md': !isScrollAtTop,
          'border-b-0': isResponsiveNavbarOpen,
        },
      )}
    >
      <div className="flex flex-row justify-between items-center w-full px-4 h-16">
        <NavLink
          title="Ciaran Melarkey"
          link="main-section"
          extraClass={'text-xl'}
          onClick={() => dispatch(closeNavbar())}
        />
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
      </div>
    </nav>
  );
}
