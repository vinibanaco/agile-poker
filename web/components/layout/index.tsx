import type { ReactNode } from 'react';

import styles from './index.module.css';

type Props = {
  header: ReactNode;
  children: ReactNode;
};

export default function Layout({ header, children }: Props) {
  return (
    <div className={styles.container}>
      {header}

      <div className={styles.wrapper}>{children}</div>
    </div>
  );
}
