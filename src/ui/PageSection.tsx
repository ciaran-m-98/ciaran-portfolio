import { ReactNode } from 'react';
import cx from 'classnames';
export default function PageSection({
  children,
  extraClass,
}: {
  children: ReactNode;
  extraClass?: string;
}) {
  return (
    <div className={cx('', extraClass )}>
      {children}
    </div>
  );
}
