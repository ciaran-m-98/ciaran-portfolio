import Link from "next/link";

export default function Navbar() {
  const navBarClass: string = "font-bold";
  return (
    <div className="w-full h-16 flex flex-row justify-between p-4 items-center border-b-2 border-indigo-500 sticky top-0 bg-slate-950">
      <div className={navBarClass}>
          <Link href={"/"}>Ciarán Melarkey</Link>
      </div>
      <div className="flex flex-row gap-6">
        <div className={navBarClass}>
          {" "}
          <Link href={"/about"}>About</Link>
        </div>
        <div className={navBarClass}>
          <Link href={"/skills"}>Skills</Link>
        </div>
      </div>
    </div>
  );
}
