'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './theme-toggle';
import {
  ChevronDown,
  CreditCard,
  FileText,
  Link as LinkIcon,
  Menu,
  X,
  Building2,
  DollarSign,
  Wallet,
  Home,
  Globe,
} from 'lucide-react';

export function Header() {
  const [isPaymentSolutionsOpen, setIsPaymentSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Payment Solutions mega menu categories
  const paymentSolutionsCategories = [
    {
      title: 'Incoming Payments',
      description:
        'Solutions for processing premium payments and policy purchases',
      items: [
        {
          title: 'Incoming Payments Summary',
          description: 'Overview of our incoming payment solutions',
          icon: DollarSign,
          href: '/incoming-payments',
          divider: true,
          isSummary: true,
        },
        {
          title: 'Premium Pay - Agent',
          description: 'Process premium payments for insurance agents',
          icon: CreditCard,
          href: '/premium-pay-agent',
        },
        {
          title: 'Premium Pay - Client',
          description: 'Pay your insurance premium securely and conveniently',
          icon: CreditCard,
          href: '/premium-pay-client',
        },
        {
          title: 'Policy Hub',
          description: 'Access and manage your policy details and documents',
          icon: FileText,
          href: '/policy-hub',
        },
      ],
    },
    {
      title: 'Outgoing Payments',
      description: 'Solutions for processing claims and beneficiary payments',
      items: [
        {
          title: 'Outgoing Payments Summary',
          description: 'Overview of our outgoing payment solutions',
          icon: DollarSign,
          href: '/outgoing-payments',
          divider: true,
          isSummary: true,
        },
        {
          title: 'Pay Link',
          description:
            'Create a one-time payment link with customizable options',
          icon: LinkIcon,
          href: '/pay-link',
        },
        {
          title: 'Pay Partners',
          description:
            'Process payments to partners, agents, and service providers',
          icon: Building2,
          href: '/pay-partners',
        },
        {
          title: 'Pay Claims',
          description: 'Pay claims instantly with flexible payment methods',
          icon: CreditCard,
          href: '/claim-payment-lander',
        },
      ],
    },
    {
      title: 'Domestic & International',
      description:
        'Solutions for processing payments domestically and globally',
      items: [
        {
          title: 'Domestic Payments Summary',
          description: 'Payment solutions for the United States',
          icon: Home,
          href: '/domestic-payments',
          isSummary: true,
        },
        {
          title: 'International Payments Summary',
          description: 'Global payment solutions for cross-border transactions',
          icon: Globe,
          href: '/international-payments',
          divider: true,
          isSummary: true,
        },
        {
          title: 'Virtual Claims Card',
          description: 'Issue instant virtual cards for claims payments',
          icon: CreditCard,
          href: '/virtual-claims-card',
        },
        {
          title: 'Claims Wallet Solutions',
          description: 'Digital wallet solutions for managing claim funds',
          icon: Wallet,
          href: '/claims-wallet',
        },
      ],
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-[#f9fafb]/80 dark:bg-gray-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex-none">
          <Link href="/" className="block">
            <img
              src="https://juiceclaims.com/Juice-2024-Logo-2000x800.png"
              alt="Juice"
              className="h-8"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center justify-center flex-grow gap-8">
          <div className="flex items-center gap-8">
            <div className="relative">
              <button
                onClick={() =>
                  setIsPaymentSolutionsOpen(!isPaymentSolutionsOpen)
                }
                onBlur={() =>
                  setTimeout(() => setIsPaymentSolutionsOpen(false), 200)
                }
                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 flex items-center gap-1"
              >
                PAYMENT SOLUTIONS
                <ChevronDown className="h-4 w-4" />
              </button>

              {isPaymentSolutionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] max-w-[90vw] bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 p-6 max-h-[80vh] overflow-y-auto">
                  <div className="grid grid-cols-3 gap-8">
                    {paymentSolutionsCategories.map((category, idx) => (
                      <div key={idx} className="space-y-4">
                        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            {category.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {category.description}
                          </p>
                        </div>
                        <div className="grid gap-3">
                          {category.items.map((item, itemIdx) => {
                            const Icon = item.icon;
                            return (
                              <React.Fragment key={itemIdx}>
                                <Link
                                  href={item.href}
                                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                >
                                  <div className="flex-none">
                                    <div
                                      className={`p-2 rounded-lg ${
                                        item.isSummary
                                          ? 'bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400'
                                          : 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400'
                                      }`}
                                    >
                                      <Icon className="h-5 w-5" />
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                                      {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                                {item.divider && (
                                  <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                                )}
                              </React.Fragment>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <Link
                href="https://juiceclaims.com/rfp"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                FAQs
              </Link>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        {/* <div className="flex items-center gap-4">
          <button
            className="relative w-6 h-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            aria-label="Toggle theme"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-sun absolute inset-0 h-full w-full transition-all duration-300 opacity-100 rotate-0 dark:opacity-0 dark:-rotate-90"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-moon absolute inset-0 h-full w-full transition-all duration-300 opacity-0 rotate-90 dark:opacity-100 dark:rotate-0"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          </button>
          <div className="relative hidden md:block">
            <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-globe h-5 w-5"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
            </button>
          </div>
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-menu h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div> */}
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-[#f9fafb] dark:bg-gray-950"
          >
            <div className="p-4 space-y-6">
              <div className="space-y-2">
                <div className="font-medium text-sm text-gray-600 dark:text-gray-400">
                  PAYMENT SOLUTIONS
                </div>
                {paymentSolutionsCategories.map((category, idx) => (
                  <div key={idx} className="mb-3">
                    <div className="font-medium text-gray-900 dark:text-white mb-2">
                      {category.title}
                    </div>
                    <div className="ml-4 space-y-2">
                      {category.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          href={item.href}
                          className="block px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`p-1.5 rounded-md ${
                                item.isSummary
                                  ? 'bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400'
                                  : 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400'
                              }`}
                            >
                              <item.icon className="h-4 w-4" />
                            </div>
                            <div className="font-medium">{item.title}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                <Link
                  href="/faq"
                  className="block px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <div className="font-medium">FAQs</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Frequently Asked Questions
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
