import { useContext } from 'react';
import Image from 'next/image';

import HStack from '../h-stack';

import styles from './index.module.css';
import logoFull from '../../public/logos/logo-full.svg';
import UserTag from '../user-tag';
import { UserContext } from '../../contexts/user';

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <HStack justify="space-between" align="center" style={{ height: '100%' }}>
          <Image src={logoFull} width="175" height="48" alt="Scrum Voting logo" />

          <div>{user.name ? <UserTag name={user.name} /> : null}</div>
        </HStack>
      </div>
    </div>
  );
}
