import styles from './index.module.css';

type Props = {
  size?: 'small' | 'medium';
};

export default function Avatar({ size = 'medium' }: Props) {
  const width = size === 'medium' ? '26px' : '20px';
  const fontSize = size === 'medium' ? '14px' : '10px';

  return (
    <div className={styles.container} style={{ width, height: width, fontSize }}>
      JB
    </div>
  );
}
