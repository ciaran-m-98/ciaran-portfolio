import { useAppDispatch, useAppSelector } from '@/service/hooks';
import {
  closeNavbar,
  selectNavbarIsOpen,
} from '@/app/features/navbar/navbarSlide';
import classNames from 'classnames';
export function NavLink({
  link,
  title,
  onClick,
  extraClass
}: {
  link: string;
  title: string;
  onClick?: () => void;
  extraClass?: string
}) {
  const dispatch = useAppDispatch();
  const cx = classNames;
  const isResponsiveNavbarOpen = useAppSelector(selectNavbarIsOpen);
  function handleTitleClick(): void {
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
  return <button className={cx(extraClass)} onClick={handleClickEvents}>{title}</button>;
}
