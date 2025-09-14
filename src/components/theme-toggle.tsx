'use client';

import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/providers/theme-providers';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [isChanging, setIsChanging] = useState(false);

  const handleThemeChange = () => {
    setIsChanging(true);
    toggleTheme();
    setTimeout(() => setIsChanging(false), 300);
  };

  return (
    <button
      onClick={handleThemeChange}
      className={cn(
        'relative w-6 h-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 transition-colors',
        isChanging && 'pointer-events-none',
        className
      )}
      aria-label="Toggle theme"
      disabled={isChanging}
    >
      <Sun className="absolute inset-0 h-full w-full transition-all duration-300 opacity-100 rotate-0 dark:opacity-0 dark:-rotate-90" />
      <Moon className="absolute inset-0 h-full w-full transition-all duration-300 opacity-0 rotate-90 dark:opacity-100 dark:rotate-0" />
    </button>
  );
}
