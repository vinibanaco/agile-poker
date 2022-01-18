import { VOTE_STATUS } from '../../enums';
import type { VoteStatusTypes } from '../../enums';
import styles from './index.module.css';
import colors from '../../colors';

type Props = {
  status: VoteStatusTypes;
  size?: 'small' | 'medium';
};

export default function VoteStatus({ status, size = 'medium' }: Props) {
  const width = size === 'medium' ? '6px' : '5px';
  const backgroundColor = status === VOTE_STATUS.COMPUTED ? colors.success : colors.white;
  const helpText = status === VOTE_STATUS.VOTED ? 'Voted' : 'Computed';

  return (
    <div
      title={helpText}
      aria-label={helpText}
      className={styles.container}
      style={{ width, height: width, backgroundColor }}
    />
  );
}
