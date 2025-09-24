'use client';

import './dropdown.scss';
import React from 'react';
import * as Select from '@radix-ui/react-select';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { SelectItem } from './SelectItem';
import { PerPagePagination, isPerPagePagination } from '@/types/enums';

export const DropdownPages: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const rawPerPage = searchParams.get('perPage');
  const perPageValue = isPerPagePagination(rawPerPage)
    ? rawPerPage
    : PerPagePagination.Eight;

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('perPage', value);
    params.set('currentPage', '1');

    router.push(`?${params.toString()}`);
  };

  return (
    <Select.Root value={String(perPageValue)} onValueChange={handleChange}>
      <Select.Trigger
        className="SelectTrigger SelectPages"
        aria-label="perPage"
      >
        <Select.Value />
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            <Select.Group>
              {Object.values(PerPagePagination).map((perPage) => (
                <SelectItem key={perPage} value={perPage}>
                  {' '}
                  {perPage}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
