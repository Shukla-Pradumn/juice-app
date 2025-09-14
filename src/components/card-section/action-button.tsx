'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ActionButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function ActionButton({ 
  href, 
  children, 
  variant = 'primary', 
  className = '' 
}: ActionButtonProps) {
  const baseStyles = 'inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors';
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700',
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="h-5 w-5" />
    </a>
  );
}
