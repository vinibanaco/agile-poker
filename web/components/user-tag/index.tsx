import type { VoteStatusTypes } from '../../enums';
import Avatar from '../avatar';
import HStack from '../h-stack';
import VoteStatus from '../vote-status';

import styles from './index.module.css';

type Props = {
  name: string;
  size?: 'normal' | 'small';
  voteStatus?: VoteStatusTypes | false;
};

export default function UserTag({ name, size = 'normal', voteStatus = false }: Props) {
  return (
    <HStack align="center">
      <div
        className={styles.avatarWrapper}
        style={{ marginRight: size === 'normal' ? '12px' : '8px' }}
      >
        <Avatar userName={name} />
        {voteStatus ? (
          <div className={styles.voteStatusWrapper}>
            <VoteStatus status={voteStatus} />
          </div>
        ) : null}
      </div>

      <span>{name}</span>
    </HStack>
  );
}
