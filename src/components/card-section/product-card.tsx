'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FeatureBadge } from './feature-badge';

interface Feature {
  icon: React.ReactNode;
  label: string;
  variant: 'purple' | 'amber' | 'blue' | 'emerald' | 'red' | 'indigo';
}

interface ProductCardProps {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  imageAlt: string;
  badge?: {
    text: string;
    color: string;
  };
  features: Feature[];
  className?: string;
}

export function ProductCard({
  href,
  title,
  description,
  icon,
  image,
  imageAlt,
  badge,
  features,
  className = '',
}: ProductCardProps) {
  return (
    <a
      href={href}
      className={`animate-on-scroll bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col relative overflow-hidden ${className}`}
    >
      {badge && (
        <div
          className="absolute top-0 right-0 w-32 text-white text-center py-1 text-xs font-semibold shadow-md"
          style={{ 
            backgroundColor: badge.color,
            transform: 'rotate(30deg) translate(22%, -20%)' 
          }}
        >
          {badge.text}
        </div>
      )}

      <div className="flex items-center gap-4 mb-3">
        <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
          {icon}
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {description}
      </p>

      <div className="mb-4">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto object-contain rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm max-h-[300px]"
        />
      </div>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, index) => (
            <FeatureBadge
              key={index}
              icon={feature.icon}
              label={feature.label}
              variant={feature.variant}
            />
          ))}
        </div>

        <div className="flex justify-end">
          <button className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <span>Explore</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </a>
  );
}
