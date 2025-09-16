import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, X, HelpCircle } from 'lucide-react';

const InfoDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="fixed top-20 right-4 z-40">
        <button
          onClick={toggleDrawer}
          className="help-toggle-button flex items-center justify-center h-[90px] w-[40px] 
            bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700
            shadow-md hover:shadow-lg overflow-hidden relative z-50 transition-all duration-200
            hover:bg-gray-50 dark:hover:bg-gray-700"
          aria-label="Toggle help sidebar"
        >
          <span
            className={`font-medium tracking-wider text-lg transform -rotate-90 text-gray-600 dark:text-gray-400 transition-opacity duration-200 ${
              isDrawerOpen ? 'opacity-0' : 'opacity-100'
            }`}
          >
            INFO
          </span>
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
              isDrawerOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <X className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </div>
        </button>
      </div>
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={closeDrawer}
        />
      )}

      <div
        className={`fixed top-20 right-5 bottom-5 rounded-lg bg-white dark:bg-gray-900 shadow-xl flex flex-col overflow-hidden origin-top-right z-50 transition-all duration-300 ease-in-out ${
          isDrawerOpen
            ? 'opacity-100 transform scale-100 translate-x-0'
            : 'opacity-0 transform scale-95 translate-x-full pointer-events-none'
        }`}
        style={{ width: '400px' }}
      >
        <div className="absolute left-0 top-0 bottom-0 w-1 cursor-ew-resize hover:bg-blue-500/50 group z-10">
          <div className="absolute inset-y-0 left-0 w-1 bg-transparent group-hover:bg-blue-500/50"></div>
        </div>

        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-blue-600" />
            <h2 className="text-lg font-semibold dark:text-white">
              Help & Information
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <ChevronRight className="h-5 w-5" />
            </button>
            <button className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={closeDrawer}
              className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto px-6 py-4">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2 dark:text-white">
              Claims Wallet Plus Help
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Claims Wallet Plus offers enhanced features including a virtual
              Mastercard and mobile wallet integration for your claim funds.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
              Enhanced Features
            </h4>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h5 className="font-medium mb-2 dark:text-white">
                  Virtual Mastercard
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Access a virtual Mastercard that can be used for online and
                  in-store purchases wherever Mastercard is accepted.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h5 className="font-medium mb-2 dark:text-white">
                  Mobile Wallet Integration
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Add your virtual card to Apple Pay, Google Pay, or Samsung Pay
                  for contactless payments.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h5 className="font-medium mb-2 dark:text-white">
                  Transaction History
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  View detailed history of all transactions made with your
                  virtual card.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h5 className="font-medium mb-2 dark:text-white">
                  Security Controls
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Manage card security settings including locking your card and
                  setting purchase limits.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
              Activation & Setup
            </h4>
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h5 className="font-medium mb-2 dark:text-white">
                  Card Activation
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Your card requires verification via a secure one-time password
                  (OTP) sent to your registered phone number.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h5 className="font-medium mb-2 dark:text-white">
                  Adding to Mobile Wallet
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  After activation, use the 'Add to Mobile Wallet' options to
                  add your card to your preferred mobile payment app.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h5 className="font-medium mb-2 dark:text-white">
                  Terms & Conditions
                </h5>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Review and accept the cardholder terms and conditions before
                  using your virtual card.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Need more help? Contact support at{' '}
            <a
              href="mailto:support@juicefin.com"
              className="text-blue-600 hover:underline"
            >
              support@juicefin.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default InfoDrawer;
