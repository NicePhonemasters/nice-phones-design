'use client';
import './dropdown.scss';
import React from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { useSearchParams, useRouter } from 'next/navigation';
import { SelectItem } from './SelectItem';
import { SortType } from '@/types/SortType';

export const DropdownSort: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sortValue = searchParams.get('sort');

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', value);
    // params.set('page', '1');
    router.push(`/catalog/phones?${params.toString()}`);
  };

  return (
    <Select.Root value={sortValue} onValueChange={handleChange}>
      <Select.Trigger className="SelectTrigger SelectSort" aria-label="sort">
        <Select.Value placeholder="Select sort" />
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
              {Object.values(SortType).map((sortItem) => {
                return (
                  <SelectItem key={sortItem} value={sortItem}>
                    {' '}
                    {sortItem}
                  </SelectItem>
                );
              })}
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
