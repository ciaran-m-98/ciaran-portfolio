import { ReactNode } from 'react';
import cx from 'classnames';
export default function PageSection({
  sectionId,
  children,
  extraClass,
}: {
  sectionId: string;
  children: ReactNode;
  extraClass?: string;
}) {
  return (
    <div id={sectionId} className={cx(' w-screen', extraClass )}>
      {children}
    </div>
  );
}
