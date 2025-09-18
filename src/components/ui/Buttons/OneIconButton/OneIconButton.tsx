import styles from '@styles/OneIconButton.module.scss';

type Props = {
  icon: React.ElementType;
  disabled: boolean;
  handleClick: () => void;
};

export default function OneIconButton({
  icon: Icon,
  disabled,
  handleClick,
}: Props) {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={styles.oneIconButton}
    >
      <Icon alt="icon" className={styles.oneIconButton__icon} />
    </button>
  );
}
