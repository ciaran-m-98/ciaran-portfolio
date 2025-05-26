"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { NavbarLink, NavbarDropdown } from "./NavbarItem";

export default function Navbar() {
  const cx = classNames;
  const [dropDownEnabled, setDropDownEnabled] = useState<boolean>(false);
  function handleClick() {
    setDropDownEnabled(!dropDownEnabled);
  }

  const [sideMenuEnabled, setSideMenuEnabled] = useState<boolean>(false);

  return (
    <div className="w-full h-[56px] flex flex-row justify-between p-3 items-center fixed top-0 font-[family-name:var(--font-roboto-sans)] border-b border-neutral-800 ">
      <div className="text-md font-[family-name:var(--font-orienta-sans)]">
        <Link href={"/"}>Ciarán O'Maoilearca</Link>
      </div>
      <div className="hidden md:flex flex-row gap-2 md:gap-4 lg:gap-6 ">
        <NavbarLink title="About" link="/about" />
        <NavbarLink title="Skills" link="/skills" />
        <NavbarDropdown
          handleClick={handleClick}
          dropDownEnabled={dropDownEnabled}
          setDropDownEnabled={setDropDownEnabled}
        />
        <div className="flex justify-center items-center">
          <Link href={"https://github.com/ciaran-m-98"} target="_blank">
            <Image
              className="dark:invert"
              src={"/github-mark.svg"}
              alt={"Github Link"}
              width={20}
              height={20}
              priority
            />
          </Link>
        </div>
      </div>
      <div className="md:hidden flex justify-center items-center">
        <button onClick={() => setSideMenuEnabled(!sideMenuEnabled)}>
        <Image
          className="dark:invert"
          src={sideMenuEnabled ? "/menu-open.svg" : "/menu.svg"}
          alt={"Github Link"}
          width={20}
          height={20}
          priority
        />
        </button>
      </div>
    </div>
  );
}
