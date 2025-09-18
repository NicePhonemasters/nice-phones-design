/* eslint-disable react/prop-types */
'use client';
import { useRouter } from 'next/navigation';
import './selectColor.scss';

type Props = {
  color: string;
  productId: number | null;
};

export const SelectColor: React.FC<Props> = ({ color, productId }) => {
  const router = useRouter();

  const chooseColor = () => {
    router.push(`/product/${productId}?color=${color}`);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="color__round-border" onClick={chooseColor}>
      <div className="color__round-inner" style={{ backgroundColor: color }} />
    </div>
  );
};
