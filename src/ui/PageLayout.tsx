export default function PageLayout({ extraClass, children }: { extraClass?: string, children: React.ReactNode }) {
  return <div className={`${extraClass} pl-8 pr-8`}>{children}</div>;
}
