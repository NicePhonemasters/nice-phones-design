import classNames from 'classnames';
import styles from './TwoIconButton.module.scss';

type Props = {
  iconSelected: React.ElementType;
  iconUnselected: React.ElementType;
  disabled?: boolean;
  toggled: boolean;
  handleClick: (event?) => void;
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
      data-state={classNames({
        on: toggled === true,
        off: toggled === false,
      })}
    >
      {toggled ? (
        <IconSelected alt="icon off" />
      ) : (
        <IconUnselected alt="icon on" />
      )}
    </button>
  );
}
