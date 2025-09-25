'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import { selectTheme } from '@/slices/themeSlice';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSelector(selectTheme);

  useEffect(() => {
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(
      theme === 'dark' ? 'dark-theme' : 'light-theme',
    );
  }, [theme]);

  return (
    <div
      className={classNames({
        'dark-theme': theme === 'dark',
        'light-theme': theme === 'light',
      })}
    >
      {children}
    </div>
  );
}
