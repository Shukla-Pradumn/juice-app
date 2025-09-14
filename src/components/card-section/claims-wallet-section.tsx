'use client';

import React from 'react';
import { ProductCard } from './product-card';
import { claimsWalletData } from './data';

export function ClaimsWalletSection() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-center dark:text-gray-400">
        Claims Wallet
      </h3>
      <div className="grid md:grid-cols-4 gap-6">
        {claimsWalletData.map((product, index) => (
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
    </div>
  );
}
