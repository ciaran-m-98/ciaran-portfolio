"use client";
import { useAppSelector } from "@/service/hooks";
import { selectNavbarIsOpen } from "@/app/features/navbar/navbarSlide";
export default function ResponsiveNavbar() {
  const isResponsiveNavbarOpen = useAppSelector(selectNavbarIsOpen);
  return isResponsiveNavbarOpen ? <div className="size-full absolute pt-[56px] bg-neutral-950 md:hidden">is open</div> : <></>;
}
