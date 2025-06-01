'use client';
import { useAppDispatch, useAppSelector, useWindowSize } from '@/service/hooks';
import { NavLink } from './NavLink';
import {
  closeNavbar,
  selectNavbarIsOpen,
} from '@/app/features/navbar/navbarSlide';
import { useEffect } from 'react';
export default function ResponsiveNavbar() {
  const dispatch = useAppDispatch();
  const windowSize = useWindowSize();
  const isResponsiveNavbarOpen = useAppSelector(selectNavbarIsOpen);

  useEffect(() => {
    if (windowSize.width > 960) {
      dispatch(closeNavbar());
    }
  }, [windowSize]);

  return isResponsiveNavbarOpen ? (
    <div className="responsive-navbar size-full md:hidden flex flex-col fixed bg-inherit px-4 pt-20">
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
    </div>
  ) : (
    <></>
  );
}
