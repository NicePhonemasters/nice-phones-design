import styles from '@styles/SliderButton.module.scss';

type Props = {
  icon: React.ElementType;
  disabled: boolean;
  handleClick: () => void;
};

export default function ButtonArrow({
  icon: Icon,
  disabled,
  handleClick,
}: Props) {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={styles.SliderButton}
    >
      <Icon alt="icon" className={styles.SliderButton__icon} />
    </button>
  );
}
