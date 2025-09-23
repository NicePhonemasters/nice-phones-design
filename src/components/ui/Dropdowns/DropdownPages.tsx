'use client';

import './dropdown.scss';
import React from 'react';
import * as Select from '@radix-ui/react-select';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { SelectItem } from './SelectItem';

export const DropdownPages: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const perPageValue = searchParams.get('perPage') ?? '8';

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('perPage', value);
    params.set('currentPage', '1');

    router.push(`?${params.toString()}`);
  };

  return (
    <Select.Root value={perPageValue} onValueChange={handleChange}>
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
              <SelectItem value="8">8</SelectItem>
              <SelectItem value="16">16</SelectItem>
              <SelectItem value="24">24</SelectItem>
              <SelectItem value="48">48</SelectItem>
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
