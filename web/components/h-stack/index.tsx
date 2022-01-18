import type { CSSProperties, ReactNode } from 'react';

import styles from './index.module.css';

type Props = {
  align?: 'center';
  justify?: 'space-between' | 'center';
  style?: CSSProperties;
  children?: ReactNode;
};

export default function HStack({ align, justify, style, children }: Props) {
  return (
    <div
      className={styles.container}
      style={{
        ...style,
        justifyContent: justify,
        alignItems: align,
      }}
    >
      {children}
    </div>
  );
}
