import { FiArrowRight as ArrowRightIcon, FiLoader as LoadingIcon } from 'react-icons/fi';

import styles from './index.module.css';
import colors from '../../colors';
import type { VotingStatusTypes } from '../../enums';

type Props = {
  votingStatus: VotingStatusTypes;
  onClick: () => void;
};

export default function VotingControlButton({ votingStatus, onClick }: Props) {
  const loading = votingStatus === 2;

  return (
    <div className={`${styles.container} ${loading ? styles.loading : ''}`}>
      <button
        type="button"
        aria-label={loading ? 'Loading...' : undefined}
        className={styles.button}
        onClick={onClick}
        disabled={loading}
      >
        {votingStatus !== 3 ? 'Finish voting' : 'Next voting'}
      </button>

      <div className={styles.iconContainer}>
        {!loading ? (
          <ArrowRightIcon color={colors.white} className={styles.icon} />
        ) : (
          // TODO: create an Spinner component
          <LoadingIcon color={colors.white} className={`${styles.icon} ${styles.animated}`} />
        )}
      </div>
    </div>
  );
}
