import { ReactNode } from 'react';

export default function PageSection({
  sectionId,
  children,
}: {
  sectionId: string;
  children: ReactNode;
}) {
  return (
    <div
      id={sectionId}
      className="h-[calc(100vh-80px)] w-screen snap-start"
    >
      {children}
    </div>
  );
}
