"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { NavbarLink, NavbarDropdown } from "./NavbarItem";
import { useAppDispatch, useAppSelector } from "@/service/hooks";
import {
  openNavbar,
  closeNavbar,
  selectNavbarIsOpen,
} from "@/app/features/navbar/navbarSlide";
export default function Navbar() {
  const cx = classNames;
  const [dropDownEnabled, setDropDownEnabled] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  function handleClick() {
    setDropDownEnabled(!dropDownEnabled);
  }
  const isResponsiveNavbarOpen = useAppSelector(selectNavbarIsOpen);
  const handleNavbarState = () => {
    if(isResponsiveNavbarOpen) {
      dispatch(closeNavbar())
    }
    else{
      dispatch(openNavbar())
    }
  };
  return (
    <div className="w-full h-[56px] flex flex-row justify-between p-3 items-center fixed top-0 font-[family-name:var(--font-roboto-sans)] border-b border-neutral-800 z-50">
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
        <button onClick={() => handleNavbarState()}>
          <Image
            className="dark:invert"
            src={isResponsiveNavbarOpen ? "/menu-open.svg" : "/menu.svg"}
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
