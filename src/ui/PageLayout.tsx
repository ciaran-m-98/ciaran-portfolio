export default function PageLayout({ extraClass = "", children }: { extraClass?: string, children: React.ReactNode }) {
  return <div className={`${extraClass} pt-[56px] h-screen`}>{children}</div>;
}
