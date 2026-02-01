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
    const elementHeight: number = rect.height ?? 0;
    const viewportHeight: number = window.innerHeight;

    let offsetPosition: number = Math.round(
      elementTop - viewportHeight / 2 + elementHeight / 2,
    );

    const maxScroll: number =
      document.documentElement.scrollHeight - window.innerHeight;
    if (offsetPosition < 0) offsetPosition = 0;
    if (offsetPosition > maxScroll) offsetPosition = maxScroll;

    window.scrollTo({
      top: offsetPosition,
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
