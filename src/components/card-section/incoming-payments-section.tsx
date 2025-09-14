'use client';

import React from 'react';
import { ProductCard } from './product-card';
import { ActionButton } from './action-button';
import { incomingPaymentsData } from './data';

export function IncomingPaymentsSection() {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6 text-center dark:text-gray-400">
        Incoming Payment Solutions
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {incomingPaymentsData.map((product, index) => (
          <ProductCard
            key={index}
            href={product.href}
            title={product.title}
            description={product.description}
            icon={product.icon}
            image={product.image}
            imageAlt={product.imageAlt}
            badge={product.badge}
            features={product.features}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <ActionButton href="/claims-wallet-max">
          View Incoming Payments Summary
        </ActionButton>
      </div>
    </div>
  );
}
