'use client';
import { useEffect, useState } from 'react';
import { ToggleGroup } from 'radix-ui';
import { useSearchParams, useRouter } from 'next/navigation';
import { getVisiblePages } from './getVisiblePage';
import PaginationStyles from './PaginationControl.module.scss';
import ArrowLeft from '@/assets/icons/arrow-left.svg';
import ArrowRight from '@/assets/icons/arrow-right.svg';
import { OneIconButton } from '@components/ui/Buttons/OneIconButton';

type Props = {
  pageCount: number;
  currentPage: number;
};

export default function PaginationControl({ pageCount, currentPage }: Props) {
  const searchParamsHook = useSearchParams();
  const routerHook = useRouter();
  const [screenWidth, setScreenWidth] = useState(1200);

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', updateWidth);
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, [searchParamsHook]);

  const handlePageChange = (page: number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  let maxVisiblePages = 7;
  if (screenWidth < 768) maxVisiblePages = 3;
  else if (screenWidth < 1024) maxVisiblePages = 5;

  const visiblePages = getVisiblePages(pageCount, currentPage, maxVisiblePages);

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
        {visiblePages.map((page, i) =>
          page === '...' ? (
            <span key={i} className={PaginationStyles.ellipsis}>
              ...
            </span>
          ) : (
            <ToggleGroup.Item
              key={`${page}page`}
              value={String(page)}
              className={`${PaginationStyles.toggleButton} buttons-text`}
              onClick={() => handlePageChange(+page)}
            >
              {page}
            </ToggleGroup.Item>
          ),
        )}
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
