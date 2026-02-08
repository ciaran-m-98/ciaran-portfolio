'use client';
export default function NavLink({
  link,
  title,
  extraClass,
}: {
  link: string;
  title: string;
  extraClass?: string;
}) {
  function handleTitleClick(): void {
    const targetElement: HTMLElement | null = document.getElementById(
      `${link}-title`,
    );

    if (!targetElement) {
      return;
    }

    const rect = targetElement.getBoundingClientRect();
    const elementTop: number = rect.top + window.pageYOffset;
    const offsetPosition: number = Math.round(elementTop - 12);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
  return (
    <button
      className={`font-semibold tracking-wider text-xl ${extraClass}`}
      onClick={() => handleTitleClick()}
    >
      {title}
    </button>
  );
}
