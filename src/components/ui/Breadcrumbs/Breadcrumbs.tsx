'use client';
import classNames from 'classnames';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from '../../../assets/icons/home.svg';
import ArrowRight from '../../../assets/icons/arrow-right.svg';
import styles from './breadCrumbs.module.scss';

export const Breadcrumbs = () => {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  return (
    <>
      <div className={styles.breadCrumbs}>
        <Link href={'/'}>
          <HomeIcon className={styles.homeIcon} />
        </Link>

        {segments.map((segment, i) => {
          const hrefNew = '/' + segments.slice(0, i + 1).join('/');
          const lastLink = i === segments.length - 1;
          const clearString = segment
            .split('-')
            .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
            .join(' ');

          return (
            <React.Fragment key={hrefNew}>
              <ArrowRight className={styles.arrowRight} />
              {lastLink ? (
                <span
                  className={classNames(
                    styles.breadcrumbLinkActive,
                    'small-text',
                  )}
                >
                  {clearString}
                </span>
              ) : (
                <Link
                  href={hrefNew}
                  key={segment}
                  className={classNames(styles.breadcrumbLink, 'small-text')}
                >
                  {clearString}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};
