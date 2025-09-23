/* eslint-disable react/prop-types */
'use client';
import { useRouter } from 'next/navigation';
import styles from './selectColor.module.scss';

type Props = {
  color: string;
  productId?: number;
};

export const SelectColor: React.FC<Props> = ({ color, productId }) => {
  const router = useRouter();

  const chooseColor = () => {
    router.push(`/product/${productId}?color=${color}`);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={styles.colorRoundBorder} onClick={chooseColor}>
      <div
        className={styles.colorRoundInner}
        style={{ backgroundColor: color }}
      />
    </div>
  );
};
