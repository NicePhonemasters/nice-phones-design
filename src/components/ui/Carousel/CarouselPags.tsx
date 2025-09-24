import { OneIconButton } from '../Buttons/OneIconButton';
import ArrowLeft from '../../../assets/icons/arrow-left.svg';
import ArrowRight from '../../../assets/icons/arrow-right.svg';
import styles from './carousel.module.scss';

export const CarouselPags = () => {
  return (
    <div className={styles.carouselTopPag}>
      <OneIconButton icon={ArrowLeft} styleName={'carouselButtonPrev'} />
      <OneIconButton icon={ArrowRight} styleName={'carouselButtonNext'} />
    </div>
  );
};
