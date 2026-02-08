export default function Footer() {
  return (
    <div className="flex flex-row h-16 justify-between flex-wrap items-center p-4">
      <span className="font-extralight text-sm font-[family-name:var(--font-jetbrains-mono)]">
        {`© ${new Date().getFullYear()} Ciarán Melarkey`}{' '}
      </span>
    </div>
  );
}
