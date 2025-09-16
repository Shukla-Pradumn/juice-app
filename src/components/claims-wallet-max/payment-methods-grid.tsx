'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Landmark, MailCheck } from 'lucide-react';
import { PaymentMethodCard } from './payment-method-card';

interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  timeframe: string;
  priority: number;
  color: string;
}

interface PaymentMethodsGridProps {
  onSelectPaymentMethod: (methodId: string) => void;
}

export function PaymentMethodsGrid({
  onSelectPaymentMethod,
}: PaymentMethodsGridProps) {
  const paymentMethods: PaymentMethod[] = [
    {
      id: 'virtual-card',
      name: 'Virtual Card',
      description: 'Instant access to funds with Mastercard',
      icon: CreditCard,
      timeframe: 'Instant',
      priority: 1,
      color: 'from-blue-600 to-indigo-600',
    },
    {
      id: 'direct-card',
      name: 'Direct to Visa/Mastercard',
      description: 'Send money to your existing credit or debit card',
      icon: CreditCard,
      timeframe: '10-30 minutes',
      priority: 2,
      color: 'from-green-600 to-emerald-600',
    },
    {
      id: 'ach',
      name: 'ACH to Bank',
      description: 'Transfer directly to your bank account',
      icon: Landmark,
      timeframe: '1-3 business days',
      priority: 3,
      color: 'from-purple-600 to-violet-600',
    },
    {
      id: 'check',
      name: 'eCheck',
      description: 'Traditional check sent to your mailing address',
      icon: MailCheck,
      timeframe: '5-7 business days',
      priority: 4,
      color: 'from-amber-600 to-orange-600',
    },
  ];

  const cardContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto mb-16"
      variants={cardContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-2xl font-bold mb-8 text-center">
        Select Payment Method
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <PaymentMethodCard
          method={paymentMethods[0]}
          isPrimary={true}
          onSelect={onSelectPaymentMethod}
          variants={cardVariants}
        />

        {paymentMethods.slice(1).map((method) => (
          <PaymentMethodCard
            key={method.id}
            method={method}
            onSelect={onSelectPaymentMethod}
            variants={cardVariants}
          />
        ))}
      </div>
    </motion.div>
  );
}
