/* eslint-disable jsx-a11y/no-static-element-interactions */
'use client';
import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import ArrowLeft from '../../../assets/icons/arrow-left.svg';
import styles from './backNav.module.scss';

export const BackNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const previousPath = pathname.split('/').slice(0, -1).join('/') || '/';

  const handleBack = () => {
    router.push(previousPath);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className={styles.backNav} onClick={handleBack}>
      <div className={styles.backNavContent}>
        <ArrowLeft className={styles.arrowLeftIcon} />
        <p className={classNames(styles.backNavText, 'small-text')}>Back</p>
      </div>
    </div>
  );
};
