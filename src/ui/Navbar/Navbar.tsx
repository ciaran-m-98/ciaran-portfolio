'use client';
import Link from 'next/link';
import Image from 'next/image';
import { NavLink } from './NavLink';
import {
  useAppDispatch,
  useAppSelector,
  useScrollPosition,
} from '@/service/hooks';
import {
  selectNavbarIsOpen,
  toggleNavbar,
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
    if (num === 0) {
      setIsScrollAtTop(true);
    } else {
      setIsScrollAtTop(false);
    }
  }, [num]);
  const cx = classNames;

  const linkClass = 'text-xl';
  return (
    <nav
      className={cx(
        'w-full h-24 flex flex-row px-2 justify-between items-center sticky top-0 z-50 font-[family-name:var(--font-orienta-sans)] tablet:px-[20%] bg-[url(../../public/background.png)]',
        { 'border-none bg-none bg-transparent': isScrollAtTop },
        { 'backdrop-blur-md bg-[#09090be0]': !isScrollAtTop }
      )}
    >
      <div>
        <NavLink
          title="Ciaran Melarkey"
          link="main-section"
          extraClass={'text-2xl'}
        />
      </div>
      <div className="hidden tablet:flex gap-8">
        <NavLink title="About" link="about-section" extraClass={linkClass} />
        <NavLink title="Skills" link="skills-section" extraClass={linkClass} />
        <div className="flex justify-center items-center">
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
      <div className="flex tablet:hidden justify-center items-center">
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
