import styles from './index.module.css';

function getInitials(userName: string) {
  const userNameInitials = userName.split(' ').map((namePart) => namePart.at(0));
  const firstInitial = userNameInitials[0];
  const lastInitial =
    userNameInitials.length > 1 ? userNameInitials[userNameInitials.length - 1] : '';

  return `${firstInitial}${lastInitial}`.toUpperCase();
}

type Props = {
  userName: string;
  size?: 'small' | 'medium';
};

export default function Avatar({ userName, size = 'medium' }: Props) {
  const initials = getInitials(userName);
  const width = size === 'medium' ? '26px' : '20px';
  const fontSize = size === 'medium' ? '14px' : '10px';

  return (
    <div className={styles.container} style={{ width, height: width, fontSize }}>
      {initials}
    </div>
  );
}
