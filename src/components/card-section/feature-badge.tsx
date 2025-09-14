'use client';

import React from 'react';

interface FeatureBadgeProps {
  icon: React.ReactNode;
  label: string;
  variant: 'purple' | 'amber' | 'blue' | 'emerald' | 'red' | 'indigo';
  className?: string;
}

const variantStyles = {
  purple: 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300',
  amber: 'bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300',
  blue: 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300',
  emerald: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300',
  red: 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300',
  indigo: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300',
};

export function FeatureBadge({ icon, label, variant, className = '' }: FeatureBadgeProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium cursor-help ${variantStyles[variant]}`}>
        {icon}
        <span className="ml-1">{label}</span>
      </span>
    </div>
  );
}
