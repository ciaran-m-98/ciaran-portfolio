import { useAppDispatch, useAppSelector } from '@/service/hooks';
import {
  closeNavbar,
  selectNavbarIsOpen,
} from '@/app/features/navbar/navbarSlide';
import './link.css';
export function NavLink({
  link,
  title,
  onClick,
  extraClass,
}: {
  link: string;
  title: string;
  onClick?: () => void;
  extraClass?: string;
}) {
  const dispatch = useAppDispatch();
  const isResponsiveNavbarOpen = useAppSelector(selectNavbarIsOpen);
  function handleTitleClick(): void {
    const navElement = document.querySelector('nav');
    const headerHeight: number = navElement
      ? (navElement.getBoundingClientRect().height ?? 0)
      : 0;

    if (link === 'main-section') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const targetElement: HTMLElement | null = document.getElementById(
      `${link}-title`,
    );

    if (!targetElement) {
      return;
    }

    const rect = targetElement.getBoundingClientRect();
    const elementTop: number = rect.top + window.pageYOffset;
    const offsetPosition: number = Math.round(elementTop - 96);

    const maxScroll: number =
      document.documentElement.scrollHeight - window.innerHeight;
    let finalPosition: number = offsetPosition;
    if (finalPosition < 0) finalPosition = 0;
    if (finalPosition > maxScroll) finalPosition = maxScroll;

    window.scrollTo({
      top: finalPosition,
      behavior: 'smooth',
    });

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
  return (
    <button
      className={`font-semibold tracking-wider text-xl ${extraClass}`}
      onClick={handleClickEvents}
    >
      {title}
    </button>
  );
}
