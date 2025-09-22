'use client';

import * as Select from '@radix-ui/react-select';
import React from 'react';
import classNames from 'classnames';

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
      <Select.ItemIndicator className="SelectItemIndicator" />
    </Select.Item>
  );
});

SelectItem.displayName = 'SelectItem';
