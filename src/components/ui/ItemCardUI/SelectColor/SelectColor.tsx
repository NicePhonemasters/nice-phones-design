import Link from 'next/link';
import classNames from 'classnames';
import styles from './selectColor.module.scss';
import { Colors } from '@/types/enums';

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

  const enumedColor = Colors[color];
  console.log(enumedColor);

  return (
    <Link href={newColorLink}>
      <div
        className={classNames(`${styles.colorRoundBorder}`, {
          [`${styles.colorRoundSelected}`]: isSelected,
        })}
      >
        <div
          className={styles.colorRoundInner}
          style={{ backgroundColor: enumedColor }}
        />
      </div>
    </Link>
  );
}
