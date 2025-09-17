import { ToggleGroup } from 'radix-ui';

//import ButtonStyles from '@styles/ToggleButton.module.scss';
import ToggleStyles from '@styles/ToggleGroup.module.scss';

type Props = {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

function getNaturalNumbers(count: number) {
  const numbers: string[] = [];

  for (let i = 1; i <= count; i++) {
    numbers.push(i + '');
  }

  return numbers;
}

export default function PaginationControl({
  pageCount,
  currentPage,
  onPageChange,
}: Props) {
  const pages = getNaturalNumbers(pageCount);

  return (
    <ToggleGroup.Root
      className={ToggleStyles.ToggleGroup}
      type="single"
      value={String(currentPage)}
    >
      {pages.map((page) => (
        <ToggleGroup.Item
          key={page}
          value={page}
          className={`${ToggleStyles.ToggleGroup} buttons-text`}
          onClick={() => onPageChange(+page)}
        >
          {page}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
}
