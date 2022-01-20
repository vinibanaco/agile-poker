import type { VoteStatusTypes } from '../../enums';
import Avatar from '../avatar';
import HStack from '../h-stack';
import VoteStatus from '../vote-status';

import styles from './index.module.css';

type Props = {
  name: string;
  size?: 'medium' | 'small';
  voteStatus?: VoteStatusTypes | false;
};

export default function UserTag({ name, size = 'medium', voteStatus = false }: Props) {
  // TODO: increase size of everything
  const fontSize = size === 'medium' ? '14px' : '12px';

  return (
    <HStack align="center">
      <div
        className={styles.avatarWrapper}
        style={{ marginRight: size === 'medium' ? '12px' : '8px' }}
      >
        <Avatar userName={name} size={size} />
        {voteStatus ? (
          <div className={styles.voteStatusWrapper}>
            <VoteStatus status={voteStatus} size={size} />
          </div>
        ) : null}
      </div>

      <span style={{ fontSize }}>{name}</span>
    </HStack>
  );
}
