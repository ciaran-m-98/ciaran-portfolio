import './contact.css'
export default function ContactLink({
  href,
  label,
}: {
  href: string
  label: string
}) {
  return (
    <a
      href={href}
      target="#"
      className="mx-4 text-xl p-2 text-center dark:text-[#ffffff]"
    >
      {label}
    </a>
  )
}
