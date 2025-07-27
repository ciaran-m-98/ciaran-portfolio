import { useAppDispatch, useAppSelector } from '@/service/hooks';
import {
  closeNavbar,
  selectNavbarIsOpen,
} from '@/app/features/navbar/navbarSlide';
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
    const targetElement: HTMLElement | null = document.getElementById(link);
    if (!targetElement) {
      return;
    }

    targetElement.scrollIntoView({ behavior: 'smooth' });
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
    <button className={extraClass} onClick={handleClickEvents}>
      {title}
    </button>
  );
}
