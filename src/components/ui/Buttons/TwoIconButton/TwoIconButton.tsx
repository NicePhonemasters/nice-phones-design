import styles from '@styles/TwoIconButton.module.scss';

type Props = {
  iconSelected: React.ElementType;
  iconUnselected: React.ElementType;
  disabled?: boolean;
  toggled: boolean;
  handleClick: () => void;
};

export default function TwoIconButton({
  iconUnselected: IconUnselected,
  iconSelected: IconSelected,
  disabled = false,
  toggled,
  handleClick,
}: Props) {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={styles.twoIconButton}
    >
      {toggled ? (
        <IconUnselected alt="icon on" />
      ) : (
        <IconSelected alt="icon off" />
      )}
    </button>
  );
}
