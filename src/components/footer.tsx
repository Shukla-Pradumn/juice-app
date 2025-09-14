import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#F2F4F7] text-gray-700 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
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
                  className="lucide lucide-globe h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
                <span>English</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <p className="text-sm mb-4">
                Juice is not a bank. Banking services are provided by First
                Century Bank, N.A., Member FDIC, pursuant to a license from
                Mastercard International.
              </p>
              <p className="text-sm mb-4">
                For customer service please call Juice: (855)-687-2114.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm">
                <a href="/privacy" className="hover:text-blue-600">
                  Privacy Policy
                </a>
                <span className="text-gray-400">|</span>
                <a href="/legal" className="hover:text-blue-600">
                  Terms of Service
                </a>
                <span className="text-gray-400">|</span>
                <a href="/cookie-policy" className="hover:text-blue-600">
                  Cookie Policy
                </a>
                <span className="text-gray-400">|</span>
                <a href="/sitemap" className="hover:text-blue-600">
                  Sitemap
                </a>
              </div>
              <p className="text-sm mt-4">
                © 2025 Juice Financial. All rights reserved. Juice Insurance
                v1.3.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
