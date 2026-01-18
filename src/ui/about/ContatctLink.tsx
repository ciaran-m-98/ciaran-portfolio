export default function ContactLink({ href, label }: { href: string; label: string }) {
  return (
  <a href={href} target="#" className="mx-4 text-xl p-4 rounded-xl">{label}</a>
  );
}
