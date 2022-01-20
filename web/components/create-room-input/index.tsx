import type { ChangeEvent } from 'react';

import styles from './index.module.css';
import SubmitButton from './submit-button';

type Props = {
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  buttonDisabled: boolean;
  loading: boolean;
};

export default function CreateRoomInput({ id, value, onChange, loading, buttonDisabled }: Props) {
  const disabled = !value || buttonDisabled;

  return (
    <div className={`${styles.container} ${loading ? styles.loading : ''}`}>
      <input
        id={id}
        placeholder="Your name..."
        value={value}
        onChange={onChange}
        className={styles.input}
        disabled={loading}
      />

      <div className={styles.submitButtonWrapper}>
        <SubmitButton loading={loading} disabled={disabled} />
      </div>
    </div>
  );
}
