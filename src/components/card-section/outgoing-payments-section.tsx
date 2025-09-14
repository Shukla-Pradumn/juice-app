'use client';

import React from 'react';
import { ProductCard } from './product-card';
import { ActionButton } from './action-button';
import { outgoingPaymentsData } from './data';

export function OutgoingPaymentsSection() {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6 text-center dark:text-gray-400">
        Outgoing Payment Solutions
      </h3>
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {outgoingPaymentsData.map((product, index) => (
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
      <div className="flex flex-wrap justify-center gap-4">
        <ActionButton href="/claims-wallet-max">
          View Outgoing Payments
        </ActionButton>
        <ActionButton href="/claims-wallet-max">
          View International Payments
        </ActionButton>
        <ActionButton href="/claims-wallet-max">
          View Domestic Payments
        </ActionButton>
      </div>
    </div>
  );
}
