import Link from 'next/link';
import classNames from 'classnames';
import styles from './selectColor.module.scss';

type Props = {
  color: string;
  productNamespace: string;
  currentCapacity: string;
  currentColor: string;
};

export function SelectColor({
  color,
  productNamespace,
  currentCapacity,
  currentColor,
}: Props) {
  const newColorLink = `${productNamespace}-${currentCapacity}-${color}`;

  const isSelected = currentColor === color;

  return (
    <Link href={newColorLink}>
      <div
        className={classNames(`${styles.colorRoundBorder}`, {
          [`${styles.colorRoundSelected}`]: isSelected,
        })}
      >
        <div
          className={styles.colorRoundInner}
          style={{ backgroundColor: color }}
        />
      </div>
    </Link>
  );
}
