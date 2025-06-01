import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/service/hooks';
import {
  closeNavbar,
  selectNavbarIsOpen,
} from '@/app/features/navbar/navbarSlide';
export function NavLink({
  link,
  title,
  onClick,
}: {
  link: string;
  title: string;
  onClick?: () => void;
}) {
  const dispatch = useAppDispatch();
  const isResponsiveNavbarOpen = useAppSelector(selectNavbarIsOpen);
  function handleTitleClick(): void {
    if (!window) {
      return;
    }
    const mainElement: HTMLElement | null =
      document.getElementById('main-section');
    const targetElement: HTMLElement | null = document.getElementById(link);
    console.log(targetElement?.getBoundingClientRect());
    console.log(mainElement?.getBoundingClientRect());
    if (mainElement) {
      mainElement.scrollTo({
        top: 835,
        behavior: 'smooth',
      });
    }
    if (isResponsiveNavbarOpen) {
      dispatch(closeNavbar());
    }
  }
  function handleClickEvents() {
    if (onClick) {
      onClick();
    }
    handleTitleClick();
  }
  return <button onClick={handleClickEvents}>{title}</button>;
}
