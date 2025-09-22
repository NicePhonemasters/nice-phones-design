import './dropdown.scss';
import React from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { SelectItem } from './SelectItem';

export const DropdownSort: React.FC = () => {
  return (
    <Select.Root>
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
              <SelectItem value="new">Newest</SelectItem>
              <SelectItem value="old">Oldest</SelectItem>
              <SelectItem value="priceLow">Price: low to high</SelectItem>
              <SelectItem value="priceHigh">Price: high to low</SelectItem>
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
