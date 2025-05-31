'use client';
import Link from 'next/link';
import Image from 'next/image';
import { NavLink } from './NavLink';
import { useAppDispatch, useAppSelector } from '@/service/hooks';
import {
  closeNavbar,
  selectNavbarIsOpen,
  toggleNavbar,
} from '@/app/features/navbar/navbarSlide';

export default function Navbar() {
  const dispatch = useAppDispatch();
  const isResponsiveNavbarOpen = useAppSelector(selectNavbarIsOpen);
  const handleNavbarState = () => {
    dispatch(toggleNavbar(!isResponsiveNavbarOpen));
  };
  function handleTitleClick(): void {
    if (!window) {
      return;
    }
    const mainElement: HTMLElement | null =
      document.getElementById('main-section');
    if (mainElement) {
      mainElement.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    if (isResponsiveNavbarOpen) {
      dispatch(closeNavbar());
    }
  }
  return (
    <nav className="w-full h-20 flex flex-row justify-between p-2 items-center sticky top-0 border-b z-50 bg-inherit">
      <div>
        <button
          className="text-2xl p-3 tracking-tighter"
          onClick={handleTitleClick}
        >
          Ciarán Melarkey
        </button>
      </div>
      <div className="hidden tablet:flex">
        <NavLink title="About" link="#about-section" />
        <NavLink title="Skills" link="#skills-section" />
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
            className="dark:invert "
            src={isResponsiveNavbarOpen ? '/menu-open.svg' : '/menu.svg'}
            alt={'Github Link'}
            width={30}
            height={30}
            priority
          />
        </button>
      </div>
    </nav>
  );
}
