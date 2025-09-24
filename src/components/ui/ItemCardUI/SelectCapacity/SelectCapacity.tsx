import Link from 'next/link';
import classNames from 'classnames';
import styles from './selectCapacity.module.scss';

type Props = {
  capacity: string;
  productNamespace: string;
  currentColor: string;
  currentCapacity: string;
};

export const SelectCapacity = ({
  capacity,
  productNamespace,
  currentColor,
  currentCapacity,
}: Props) => {
  //Todo: Add SelectCapacityActive in classname witр condition//
  const newCapacityLink = `${productNamespace}-${capacity.toLocaleLowerCase()}-${currentColor}`;
  const isSelected = currentCapacity === capacity.toLocaleLowerCase();

  return (
    <Link className={styles.link} href={newCapacityLink}>
      <div
        className={styles.capacityBlock}
        data-state={classNames({
          on: isSelected,
          off: !isSelected,
        })}
      >
        {capacity}
      </div>
    </Link>
  );
};
