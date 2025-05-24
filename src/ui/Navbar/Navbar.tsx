"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import classNames from "classnames";
export default function Navbar() {
  const router = useRouter();
  const cx = classNames;
  const pathname = usePathname();
  const navBarClass: string =
    "text-stone-600 dark:text-stone-400 hover:text-black dark:hover:text-white font-semibold text-md";
  const navBarActiveClass: string =
    "!text-sky-600 hover:!text-sky-00 dark:hover:!text-sky-400";
  const [dropDownEnabled, setDropDownEnabled] = useState<boolean>(false);
  function handleClick() {
    setDropDownEnabled(!dropDownEnabled)
  }

  useEffect(() => {
    if(dropDownEnabled){
      setDropDownEnabled(false)
    }
    console.log("test")
  }, [router])
  return (
    <div className="w-full h-20 flex flex-row justify-between p-4 items-center sticky top-0 font-[family-name:var(--font-roboto-sans)] border-b border-stone-600">
      <div className="text-md md:text-xl lg:text-2xl font-[family-name:var(--font-orienta-sans)]">
        <Link href={"/"}>Ciarán Melarkey</Link>
      </div>
      <div className="flex flex-row gap-6">
        <div
          className={cx(
            { [`${navBarActiveClass}`]: pathname == "/about" },
            navBarClass
          )}
        >
          <Link href={"/about"}>About</Link>
        </div>
        <div
          className={cx(
            { [`${navBarActiveClass}`]: pathname == "/skills" },
            navBarClass
          )}
        >
          <Link href={"/skills"}>Skills</Link>
        </div>
        <div className={navBarClass}>
          <button className="flex flex-row gap-2" onClick={handleClick}>
            Projects
            <Image
              className={cx(
                {"rotate-180" : dropDownEnabled}, "dark:invert transition duration-300 ease-in-out"
              )} 
              src={"/chevron-down.svg"}
              alt={"Dropdown"}
              width={20}
              height={20}
              priority
            />
          </button>
          {
            dropDownEnabled ? <div></div> : null
          }
        </div>
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
    </div>
  );
}
