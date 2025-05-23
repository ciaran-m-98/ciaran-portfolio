import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/skills"}>Skills</Link>
    </>
  );
}
