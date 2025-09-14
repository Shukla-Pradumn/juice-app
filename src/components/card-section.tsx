import React from 'react';

export default function CardSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Demo Pages</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Explore Juice's range of incoming and outgoing payment solutions for
            Insurance.
          </p>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Incoming Payment Solutions
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="/premium-pay-agent"
              className="animate-on-scroll bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 bg-[#3662e3] text-white text-center py-1 text-xs font-semibold shadow-md">
                CLIENT
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
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
                    className="lucide lucide-credit-card h-6 w-6"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
                <h3 className="font-semibold">Premium Pay - Agent</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Process premium payments for insurance agents
              </p>
              <div className="mb-4">
                <img
                  src="https://juiceclaims.com/Card-Image_Premium-Pay-Agent.png"
                  alt="Premium Pay - Agent"
                  className="w-full h-auto object-contain rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm max-h-[300px]"
                />
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 cursor-help">
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
                        className="lucide lucide-layout-grid h-3 w-3 mr-1"
                      >
                        <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                        <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                      </svg>
                      Drop-In UI
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 cursor-help">
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
                        className="lucide lucide-pencil-ruler h-3 w-3 mr-1"
                      >
                        <path d="m15 5 4 4"></path>
                        <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path>
                        <path d="m8 6 2-2"></path>
                        <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"></path>
                        <path d="m18 16 2-2"></path>
                        <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path>
                      </svg>
                      Co-Branded
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 cursor-help">
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
                        className="lucide lucide-globe h-3 w-3 mr-1"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      Web
                    </span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <span>Explore</span>
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </a>
            <a
              href="/premium-pay-client"
              className="animate-on-scroll bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 bg-[#00adee] text-white text-center py-1 text-xs font-semibold shadow-md">
                JUICE
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
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
                    className="lucide lucide-credit-card h-6 w-6"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
                <h3 className="font-semibold">Premium Pay - Client</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Pay your insurance premium securely and conveniently
              </p>
              <div className="mb-4">
                <img
                  src="https://juiceclaims.com/Card-Image_Premium-Pay-Client.png"
                  alt="Premium Pay - Client"
                  className="w-full h-auto object-contain rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm max-h-[300px]"
                />
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 cursor-help">
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
                        className="lucide lucide-layout-grid h-3 w-3 mr-1"
                      >
                        <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                        <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                      </svg>
                      Drop-In UI
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 cursor-help">
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
                        className="lucide lucide-pencil-ruler h-3 w-3 mr-1"
                      >
                        <path d="m15 5 4 4"></path>
                        <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path>
                        <path d="m8 6 2-2"></path>
                        <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"></path>
                        <path d="m18 16 2-2"></path>
                        <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path>
                      </svg>
                      Co-Branded
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 cursor-help">
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
                        className="lucide lucide-globe h-3 w-3 mr-1"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      Web
                    </span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <span>Explore</span>
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </a>
            <a
              href="/policy-hub"
              className="animate-on-scroll bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 bg-[#3662e3] text-white text-center py-1 text-xs font-semibold shadow-md">
                CLIENT
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
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
                    className="lucide lucide-file-text h-6 w-6"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
                <h3 className="font-semibold">Policy Hub</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Access and manage your policy details and documents
              </p>
              <div className="mb-4">
                <img
                  src="https://juiceclaims.com/Card-Image_Policy-Hub.png"
                  alt="Policy Hub"
                  className="w-full h-auto object-contain rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm max-h-[300px]"
                />
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300 cursor-help">
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
                        className="lucide lucide-webhook h-3 w-3 mr-1"
                      >
                        <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                        <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                        <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                      </svg>
                      APIs
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 cursor-help">
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
                        className="lucide lucide-pencil-ruler h-3 w-3 mr-1"
                      >
                        <path d="m15 5 4 4"></path>
                        <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path>
                        <path d="m8 6 2-2"></path>
                        <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"></path>
                        <path d="m18 16 2-2"></path>
                        <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path>
                      </svg>
                      Co-Branded
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 cursor-help">
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
                        className="lucide lucide-globe h-3 w-3 mr-1"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      Web
                    </span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <span>Explore</span>
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </a>
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="/claims-wallet-max"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <span>View Incoming Payments Summary</span>
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
                className="lucide lucide-arrow-right h-5 w-5"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Outgoing Payment Solutions
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <a
              href="/pay-link"
              className="animate-on-scroll bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 bg-[#00adee] text-white text-center py-1 text-xs font-semibold shadow-md">
                JUICE
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
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
                    className="lucide lucide-link h-6 w-6"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </div>
                <h3 className="font-semibold">Pay Link</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Create a one-time payment link with customizable options
              </p>
              <div className="mb-4">
                <img
                  src="	https://juiceclaims.com/Card-Image_Pay-Link.png"
                  alt="Pay Link"
                  className="w-full h-auto object-contain rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm max-h-[300px]"
                />
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 cursor-help">
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
                        className="lucide lucide-layout-grid h-3 w-3 mr-1"
                      >
                        <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                        <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                      </svg>
                      Drop-In UI
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300 cursor-help">
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
                        className="lucide lucide-webhook h-3 w-3 mr-1"
                      >
                        <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                        <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                        <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                      </svg>
                      APIs
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300 cursor-help">
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
                        className="lucide lucide-app-window h-3 w-3 mr-1"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="M10 4v4"></path>
                        <path d="M2 8h20"></path>
                        <path d="M6 4v4"></path>
                      </svg>
                      Juice App
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 cursor-help">
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
                        className="lucide lucide-pencil-ruler h-3 w-3 mr-1"
                      >
                        <path d="m15 5 4 4"></path>
                        <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path>
                        <path d="m8 6 2-2"></path>
                        <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"></path>
                        <path d="m18 16 2-2"></path>
                        <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path>
                      </svg>
                      Co-Branded
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 cursor-help">
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
                        className="lucide lucide-globe h-3 w-3 mr-1"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      Web
                    </span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <span>Explore</span>
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </a>
            <a
              href="/pay-partners"
              className="animate-on-scroll bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 bg-[#00adee] text-white text-center py-1 text-xs font-semibold shadow-md">
                JUICE
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
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
                    className="lucide lucide-building2 h-6 w-6"
                  >
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                    <path d="M10 6h4"></path>
                    <path d="M10 10h4"></path>
                    <path d="M10 14h4"></path>
                    <path d="M10 18h4"></path>
                  </svg>
                </div>
                <h3 className="font-semibold">Pay Partners</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Process payments to partners, agents, and service providers
              </p>
              <div className="mb-4">
                <img
                  src="https://juiceclaims.com/Card-Image_Pay-Partners.png"
                  alt="Pay Partners"
                  className="w-full h-auto object-contain rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm max-h-[300px]"
                />
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300 cursor-help">
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
                        className="lucide lucide-webhook h-3 w-3 mr-1"
                      >
                        <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                        <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                        <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                      </svg>
                      APIs
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300 cursor-help">
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
                        className="lucide lucide-app-window h-3 w-3 mr-1"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="M10 4v4"></path>
                        <path d="M2 8h20"></path>
                        <path d="M6 4v4"></path>
                      </svg>
                      Juice App
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 cursor-help">
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
                        className="lucide lucide-pencil-ruler h-3 w-3 mr-1"
                      >
                        <path d="m15 5 4 4"></path>
                        <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path>
                        <path d="m8 6 2-2"></path>
                        <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"></path>
                        <path d="m18 16 2-2"></path>
                        <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path>
                      </svg>
                      Co-Branded
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 cursor-help">
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
                        className="lucide lucide-globe h-3 w-3 mr-1"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      Web
                    </span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <span>Explore</span>
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </a>
            <a
              href="https://app.juicefin.com"
              className="animate-on-scroll bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 bg-[#00adee] text-white text-center py-1 text-xs font-semibold shadow-md">
                JUICE
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
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
                    className="lucide lucide-credit-card h-6 w-6"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
                <h3 className="font-semibold">Pay Claims</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Pay claims instantly with flexible payment methods
              </p>
              <div className="mb-4">
                <img
                  src="https://juiceclaims.com/Card-Image_Pay-Claims.png"
                  alt="Pay Claims"
                  className="w-full h-auto object-contain rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm max-h-[300px]"
                />
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300 cursor-help">
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
                        className="lucide lucide-webhook h-3 w-3 mr-1"
                      >
                        <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                        <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                        <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                      </svg>
                      APIs
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300 cursor-help">
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
                        className="lucide lucide-app-window h-3 w-3 mr-1"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="M10 4v4"></path>
                        <path d="M2 8h20"></path>
                        <path d="M6 4v4"></path>
                      </svg>
                      Juice App
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 cursor-help">
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
                        className="lucide lucide-pencil-ruler h-3 w-3 mr-1"
                      >
                        <path d="m15 5 4 4"></path>
                        <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path>
                        <path d="m8 6 2-2"></path>
                        <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"></path>
                        <path d="m18 16 2-2"></path>
                        <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path>
                      </svg>
                      Co-Branded
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 cursor-help">
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
                        className="lucide lucide-globe h-3 w-3 mr-1"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      Web
                    </span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <span>Explore</span>
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/claims-wallet-max"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <span>View Outgoing Payments</span>
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
                className="lucide lucide-arrow-right h-5 w-5"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <a
              href="/claims-wallet-max"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <span>View International Payments</span>
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
                className="lucide lucide-arrow-right h-5 w-5"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
            <a
              href="/claims-wallet-max"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <span>View Domestic Payments</span>
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
                className="lucide lucide-arrow-right h-5 w-5"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Claims Wallet</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <a
              href="/claimant-verification"
              className="animate-on-scroll bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 bg-[#00adee] text-white text-center py-1 text-xs font-semibold shadow-md">
                JUICE
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
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
                    className="lucide lucide-user-check h-6 w-6"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <polyline points="16 11 18 13 22 9"></polyline>
                  </svg>
                </div>
                <h3 className="font-semibold">Claimant Verification</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Verify your identity to access claims and payments
              </p>
              <div className="mb-4">
                <img
                  src="https://juiceclaims.com/Card-Image_Claimant-Verification.png"
                  alt="Claimant Verification"
                  className="w-full h-auto object-contain rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm max-h-[300px]"
                />
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300 cursor-help">
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
                        className="lucide lucide-layout-grid h-3 w-3 mr-1"
                      >
                        <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                        <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                      </svg>
                      Drop-In UI
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300 cursor-help">
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
                        className="lucide lucide-webhook h-3 w-3 mr-1"
                      >
                        <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                        <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                        <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                      </svg>
                      APIs
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300 cursor-help">
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
                        className="lucide lucide-app-window h-3 w-3 mr-1"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="M10 4v4"></path>
                        <path d="M2 8h20"></path>
                        <path d="M6 4v4"></path>
                      </svg>
                      Juice App
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 cursor-help">
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
                        className="lucide lucide-pencil-ruler h-3 w-3 mr-1"
                      >
                        <path d="m15 5 4 4"></path>
                        <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path>
                        <path d="m8 6 2-2"></path>
                        <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"></path>
                        <path d="m18 16 2-2"></path>
                        <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path>
                      </svg>
                      Co-Branded
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 cursor-help">
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
                        className="lucide lucide-globe h-3 w-3 mr-1"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      Web
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300 cursor-help">
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
                        className="lucide lucide-smartphone h-3 w-3 mr-1"
                      >
                        <rect
                          width="14"
                          height="20"
                          x="5"
                          y="2"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M12 18h.01"></path>
                      </svg>
                      Mobile
                    </span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <span>Explore</span>
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </a>
            <a
              href="/virtual-claims-card"
              className="animate-on-scroll bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 bg-[#00adee] text-white text-center py-1 text-xs font-semibold shadow-md">
                JUICE
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
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
                    className="lucide lucide-credit-card h-6 w-6"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                </div>
                <h3 className="font-semibold">Virtual Claims Card</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Issue instant virtual cards for claims payments
              </p>
              <div className="mb-4">
                <img
                  src="https://juiceclaims.com/Card-Image_Virtual-Claims-Card.png"
                  alt="Virtual Claims Card"
                  className="w-full h-auto object-contain rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm max-h-[300px]"
                />
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300 cursor-help">
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
                        className="lucide lucide-webhook h-3 w-3 mr-1"
                      >
                        <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                        <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                        <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                      </svg>
                      APIs
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300 cursor-help">
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
                        className="lucide lucide-app-window h-3 w-3 mr-1"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="M10 4v4"></path>
                        <path d="M2 8h20"></path>
                        <path d="M6 4v4"></path>
                      </svg>
                      Juice App
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 cursor-help">
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
                        className="lucide lucide-pencil-ruler h-3 w-3 mr-1"
                      >
                        <path d="m15 5 4 4"></path>
                        <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path>
                        <path d="m8 6 2-2"></path>
                        <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"></path>
                        <path d="m18 16 2-2"></path>
                        <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path>
                      </svg>
                      Co-Branded
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 cursor-help">
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
                        className="lucide lucide-globe h-3 w-3 mr-1"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      Web
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300 cursor-help">
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
                        className="lucide lucide-smartphone h-3 w-3 mr-1"
                      >
                        <rect
                          width="14"
                          height="20"
                          x="5"
                          y="2"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M12 18h.01"></path>
                      </svg>
                      Mobile
                    </span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <span>Explore</span>
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </a>
            <a
              href="/claims-wallet-pro"
              className="animate-on-scroll bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 bg-[#00adee] text-white text-center py-1 text-xs font-semibold shadow-md">
                JUICE
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
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
                    className="lucide lucide-wallet h-6 w-6"
                  >
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold">Claims Wallet Pro</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Advanced claims wallet with enhanced fund management
              </p>
              <div className="mb-4">
                <img
                  src="https://juiceclaims.com/Card-Image-Claims-Wallet-Pro.png"
                  alt="Claims Wallet Pro"
                  className="w-full h-auto object-contain rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm max-h-[300px]"
                />
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300 cursor-help">
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
                        className="lucide lucide-webhook h-3 w-3 mr-1"
                      >
                        <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                        <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                        <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                      </svg>
                      APIs
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300 cursor-help">
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
                        className="lucide lucide-app-window h-3 w-3 mr-1"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="M10 4v4"></path>
                        <path d="M2 8h20"></path>
                        <path d="M6 4v4"></path>
                      </svg>
                      Juice App
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 cursor-help">
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
                        className="lucide lucide-pencil-ruler h-3 w-3 mr-1"
                      >
                        <path d="m15 5 4 4"></path>
                        <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path>
                        <path d="m8 6 2-2"></path>
                        <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"></path>
                        <path d="m18 16 2-2"></path>
                        <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path>
                      </svg>
                      Co-Branded
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 cursor-help">
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
                        className="lucide lucide-globe h-3 w-3 mr-1"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      Web
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300 cursor-help">
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
                        className="lucide lucide-smartphone h-3 w-3 mr-1"
                      >
                        <rect
                          width="14"
                          height="20"
                          x="5"
                          y="2"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M12 18h.01"></path>
                      </svg>
                      Mobile
                    </span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <span>Explore</span>
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </a>
            <a
              href="/claims-wallet-max"
              className="animate-on-scroll bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 bg-[#00adee] text-white text-center py-1 text-xs font-semibold shadow-md">
                JUICE
              </div>
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
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
                    className="lucide lucide-wallet h-6 w-6"
                  >
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold">Claims Wallet Max</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Premium wallet interface with optimized payment distribution
              </p>
              <div className="mb-4">
                <img
                  src="	https://juiceclaims.com/Card-Image-Claims-Wallet-Max.png"
                  alt="Claims Wallet Max"
                  className="w-full h-auto object-contain rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm max-h-[300px]"
                />
              </div>
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300 cursor-help">
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
                        className="lucide lucide-webhook h-3 w-3 mr-1"
                      >
                        <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                        <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                        <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                      </svg>
                      APIs
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300 cursor-help">
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
                        className="lucide lucide-app-window h-3 w-3 mr-1"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="M10 4v4"></path>
                        <path d="M2 8h20"></path>
                        <path d="M6 4v4"></path>
                      </svg>
                      Juice App
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-300 cursor-help">
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
                        className="lucide lucide-pencil-ruler h-3 w-3 mr-1"
                      >
                        <path d="m15 5 4 4"></path>
                        <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path>
                        <path d="m8 6 2-2"></path>
                        <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"></path>
                        <path d="m18 16 2-2"></path>
                        <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path>
                      </svg>
                      Co-Branded
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 cursor-help">
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
                        className="lucide lucide-globe h-3 w-3 mr-1"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                      Web
                    </span>
                  </div>
                  <div className="relative inline-block">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300 cursor-help">
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
                        className="lucide lucide-smartphone h-3 w-3 mr-1"
                      >
                        <rect
                          width="14"
                          height="20"
                          x="5"
                          y="2"
                          rx="2"
                          ry="2"
                        ></rect>
                        <path d="M12 18h.01"></path>
                      </svg>
                      Mobile
                    </span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <span>Explore</span>
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
                      className="lucide lucide-arrow-right h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
