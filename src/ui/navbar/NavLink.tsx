import Link from 'next/link';

export function NavLink({
  link,
  title,
  onClick,
}: {
  link: string;
  title: string;
  onClick?: () => void;
}) {
  function handleClickEvents() {
    if (onClick) {
      onClick();
    }
  }
  return (
    <Link href={link} onClick={handleClickEvents}>
      {title}
    </Link>
  );
}
