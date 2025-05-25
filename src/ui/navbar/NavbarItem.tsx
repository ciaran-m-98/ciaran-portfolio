"use client";
import Link from "next/link";
import { useRef, Dispatch } from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Image from "next/image";
import { useOnClickOutside } from "@/service/hooks";
const cx = classNames;
const navBarClass: string =
  "text-stone-600 dark:text-stone-400 hover:text-black dark:hover:text-white font-semibold text-sm";
const navBarActiveClass: string =
  "!text-sky-600 hover:!text-sky-00 dark:hover:!text-sky-400";

export function NavbarLink({
  link,
  title,
  setDropDownEnabled,
}: {
  link: string;
  title: string;
  setDropDownEnabled?: Dispatch<boolean>;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={cx(
        { [`${navBarActiveClass}`]: pathname == link },
        navBarClass
      )}
      onClick={() => {
        if (!setDropDownEnabled) {
          return;
        }
        setDropDownEnabled(false);
      }}
    >
      {title}
    </Link>
  );
}

export function NavbarDropdown({
  handleClick,
  dropDownEnabled,
  setDropDownEnabled,
}: {
  handleClick: () => void;
  dropDownEnabled: boolean;
  setDropDownEnabled: Dispatch<boolean>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref as React.RefObject<HTMLElement>, () =>
    setDropDownEnabled(false)
  );
  return (
    <div ref={ref}>
      <button
        className={cx(
          { "dark:!text-white !text-black": dropDownEnabled },
          `${navBarClass} flex flex-row gap-1`
        )}
        onClick={handleClick}
      >
        Projects
        <Image
          className={cx(
            { "rotate-180": dropDownEnabled },
            "dark:invert transition duration-300 ease-in-out"
          )}
          src={"/chevron-down.svg"}
          alt={"Dropdown"}
          width={20}
          height={20}
          priority
        />
      </button>
      {dropDownEnabled ? (
        <div
          className="absolute text-right w-32 h-max right-14 top-[3.8rem] rounded-md p-4 flex flex-col gap-4 bg-neutral-900"
        >
          <NavbarLink title="Vinyle" link="/vinyle" setDropDownEnabled={setDropDownEnabled} />
          <NavbarLink title="Portfolio" link="/portfolio" setDropDownEnabled={setDropDownEnabled} />
        </div>
      ) : null}
    </div>
  );
}
