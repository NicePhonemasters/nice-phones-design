import './dropdown.scss';
import React from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

type Props = {
  SelectItem: React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<typeof Select.Item> &
      React.RefAttributes<HTMLDivElement>
  >;
};
export const DropdownPages: React.FC<Props> = ({ SelectItem }) => {
  return (
    <Select.Root>
      <Select.Trigger className="SelectTrigger SelectPages" aria-label="sort">
        <Select.Value placeholder="Select items" />
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
