export default function ContactLink({ href, label }: { href: string; label: string }) {
  return (
  <a href={href} target="#" className="mx-4 text-xl p-2 justify-center text-center text-stone-300 hover:text-[#ffffff]"> {label}</a>
  );
}
