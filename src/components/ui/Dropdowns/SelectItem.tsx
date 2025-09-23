import { Select } from 'radix-ui';
import classNames from 'classnames';
import { CheckIcon } from '@radix-ui/react-icons';
import React from 'react';

export const SelectItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Select.Item>
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={classNames('SelectItem', className)}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

SelectItem.displayName = 'SelectItem';
