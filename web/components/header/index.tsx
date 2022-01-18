import Image from 'next/image';

import HStack from '../h-stack';

import styles from './index.module.css';
import logoFull from '../../public/logos/logo-full.svg';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <HStack justify="space-between" align="center" style={{ height: '100%' }}>
          <Image src={logoFull} width="175" height="48" alt="Scrum Voting logo" />

          <div />
        </HStack>
      </div>
    </div>
  );
}
