'use client';
import classNames from 'classnames';
import ArrowLeft from '../../../assets/icons/arrow-left.svg';
import styles from './backNav.module.scss';

export const BackNav = () => {
  return (
    <div className={styles.backNav}>
      <ArrowLeft className={styles.arrowLeftIcon} />
      <p className={classNames(styles.backNavText, 'small-text')}>Back</p>
    </div>
  );
};
