'use client';

import React from 'react';

interface Transaction {
  date: string;
  description: string;
  amount: string;
  status: string;
  method: string;
}

export function RecentTransactions() {
  const transactions: Transaction[] = [
    {
      date: '2024-03-15',
      description: 'Home Depot Purchase',
      amount: '$250.00',
      status: 'Completed',
      method: 'Virtual Card',
    },
    {
      date: '2024-03-14',
      description: 'Lowes Hardware',
      amount: '$175.50',
      status: 'Completed',
      method: 'Virtual Card',
    },
    {
      date: '2024-03-13',
      description: 'Claim Payment',
      amount: '$5,000.00',
      status: 'Completed',
      method: 'Deposit',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mb-16">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Recent Transactions
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-4  dark:text-white">Date</th>
                <th className="text-left py-4 px-4  dark:text-white">
                  Description
                </th>
                <th className="text-left py-4 px-4  dark:text-white">Amount</th>
                <th className="text-left py-4 px-4  dark:text-white">Status</th>
                <th className="text-left py-4 px-4  dark:text-white">Method</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <td className="py-4 px-4 dark:text-white">
                    {transaction.date}
                  </td>
                  <td className="py-4 px-4 dark:text-white">
                    {transaction.description}
                  </td>
                  <td className="py-4 px-4 dark:text-white">
                    {transaction.amount}
                  </td>
                  <td className="py-4 px-4 dark:text-white">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 dark:text-white">
                    {transaction.method}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
