import { FiArrowRight as ArrowRightIcon, FiLoader as LoadingIcon } from 'react-icons/fi';

import styles from './submit-button.module.css';
import colors from '../../colors';

type Props = {
  disabled: boolean;
  loading: boolean;
};

export default function SubmitButton({ disabled, loading }: Props) {
  return (
    <div className={styles.container}>
      <button type="submit" className={styles.button} disabled={disabled || loading}>
        {!loading ? (
          <ArrowRightIcon
            color={disabled ? colors.grey1 : colors.tertiary}
            className={styles.icon}
          />
        ) : (
          <LoadingIcon color={colors.white} className={`${styles.icon} ${styles.animated}`} />
        )}
      </button>
    </div>
  );
}
