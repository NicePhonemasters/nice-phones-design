'use client';

import { ToggleGroup } from 'radix-ui';
import { useState } from 'react';

import styles from '@styles/ToggleGroup.module.scss';

type Props = {
  pageCount: number;
};

function getNaturalNumbers(count: number) {
  const numbers: string[] = [];

  for (let i = 1; i <= count; i++) {
    numbers.push(i + '');
  }

  return numbers;
}

export default function ButtonPagination({ pageCount }: Props) {
  const pages = getNaturalNumbers(pageCount);
  const [pageValue, setPageValue] = useState(pages[0]);

  return (
    <ToggleGroup.Root
      className={styles.ToggleGroup}
      type="single"
      value={pageValue}
    >
      {pages.map((page) => (
        <ToggleGroup.Item
          key={page}
          value={page}
          className={`${styles.ToggleGroup__item} buttons-text`}
          onClick={() => setPageValue(page)}
        >
          {page}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
}
