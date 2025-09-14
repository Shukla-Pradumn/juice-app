'use client';

import React from 'react';
import { SectionHeader } from './section-header';
import { IncomingPaymentsSection } from './incoming-payments-section';
import { OutgoingPaymentsSection } from './outgoing-payments-section';
import { ClaimsWalletSection } from './claims-wallet-section';

export default function CardSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Demo Pages"
          subtitle="Explore Juice's range of incoming and outgoing payment solutions for Insurance."
        />
        
        <IncomingPaymentsSection />
        <OutgoingPaymentsSection />
        <ClaimsWalletSection />
      </div>
    </section>
  );
}
