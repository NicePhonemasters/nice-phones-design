'use client';

import { ToggleGroup } from 'radix-ui';
import { useSearchParams, useRouter } from 'next/navigation';
import PaginationStyles from './PaginationControl.module.scss';
import ArrowLeft from '@/assets/icons/arrow-left.svg';
import ArrowRight from '@/assets/icons/arrow-right.svg';
import { OneIconButton } from '@components/ui/Buttons/OneIconButton';

type Props = {
  pageCount: number;
  currentPage: number;
};

function getNaturalNumbers(count: number) {
  const numbers: string[] = [];

  for (let i = 1; i <= count; i++) {
    numbers.push(i + '');
  }

  return numbers;
}

export default function PaginationControl({ pageCount, currentPage }: Props) {
  const searchParamsHook = useSearchParams();
  const routerHook = useRouter();

  const pages = getNaturalNumbers(pageCount);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParamsHook.toString());
    params.set('currentPage', String(page));
    routerHook.push(`?${params.toString()}`, { scroll: false });
  };

  const handleLeftClick = () => {
    handlePageChange(currentPage - 1);
  };

  const handleRightClick = () => {
    handlePageChange(currentPage + 1);
  };

  const leftButtonDisabled = currentPage === 1;
  const rightButtonDisabled = currentPage === pageCount;

  return (
    <div className={PaginationStyles.paginationControl}>
      <div className={PaginationStyles.paginationButton}>
        <OneIconButton
          icon={ArrowLeft}
          disabled={leftButtonDisabled}
          handleClick={handleLeftClick}
        />
      </div>

      <ToggleGroup.Root
        className={PaginationStyles.toggleGroup}
        type="single"
        value={String(currentPage)}
      >
        {pages.map((page) => (
          <ToggleGroup.Item
            key={page}
            value={page}
            className={`${PaginationStyles.toggleButton} buttons-text`}
            onClick={() => handlePageChange(+page)}
          >
            {page}
          </ToggleGroup.Item>
        ))}
      </ToggleGroup.Root>

      <div className={PaginationStyles.paginationButton}>
        <OneIconButton
          icon={ArrowRight}
          disabled={rightButtonDisabled}
          handleClick={handleRightClick}
        />
      </div>
    </div>
  );
}
