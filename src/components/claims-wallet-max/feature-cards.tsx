'use client';

import React from 'react';
import { Shield, Globe, Clock } from 'lucide-react';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function FeatureCards() {
  const features: Feature[] = [
    {
      icon: Shield,
      title: 'Secure Access',
      description: 'Bank-grade security protecting your virtual card details',
    },
    {
      icon: Globe,
      title: 'Global Acceptance',
      description: 'Use your virtual card anywhere Mastercard is accepted',
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Track transactions and balance updates instantly',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6">
            <div className="inline-flex p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
