'use client';

import React, { useState } from 'react';
import { Header } from '@/components/header';
import Footer from '@/components/footer';
import { BerryChat } from '@/components/claims-wallet-max/chat';
import { ClaimsWalletCardPlus } from '@/components/claims-wallet-card-plus';
import {
  HeroSection,
  PaymentMethodsGrid,
  RecentTransactions,
  FeatureCards,
  OTPModal,
  TransferModal,
} from '@/components/claims-wallet-max';

export default function ClaimsWalletMaxPage() {
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [activePaymentMethod, setActivePaymentMethod] = useState<string | null>(
    null
  );
  const [transferAmount, setTransferAmount] = useState('');
  const [transferInProgress, setTransferInProgress] = useState(false);
  const [transferSuccess, setTransferSuccess] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [modalPaymentMethod, setModalPaymentMethod] = useState('');
  const [isRefresh, setIsRefresh] = useState('');

  // Wallet data
  const walletData = {
    balance: 4750.0,
  };

  const handleVerifyOTP = () => {
    if (otp.length !== 6) {
      setOtpError('Please enter a 6-digit code');
      return;
    }

    // Mock verification
    if (otp === '123456') {
      setShowOTPModal(false);
      setOtp('');
      setOtpError('');
    } else {
      setOtpError('Invalid verification code');
    }
  };

  const handleSelectPaymentMethod = (methodId: string) => {
    setActivePaymentMethod(methodId);

    const paymentMethods = [
      { id: 'virtual-card', name: 'Virtual Card' },
      { id: 'direct-card', name: 'Direct to Visa/Mastercard' },
      { id: 'ach', name: 'ACH to Bank' },
      { id: 'check', name: 'eCheck' },
    ];

    const method = paymentMethods.find((m) => m.id === methodId);
    if (method) {
      setModalPaymentMethod(method.name);
      setShowTransferModal(true);
      setIsRefresh(method.id);
    }
  };

  const handleTransfer = () => {
    const amount = parseFloat(transferAmount);
    if (isNaN(amount) || amount <= 0 || amount > walletData.balance) {
      return;
    }

    setTransferInProgress(true);

    // Simulate transfer process
    setTimeout(() => {
      setTransferInProgress(false);
      setTransferSuccess(true);

      // Reset after showing success
      setTimeout(() => {
        setShowTransferModal(false);
        setTransferSuccess(false);
        setTransferAmount('');
      }, 2000);
    }, 1500);
  };

  const handleRefreshWallet = () => {
    setShowTransferModal(true);
    setIsRefresh('refresh');
  };

  const handleCloseOTPModal = () => {
    setShowOTPModal(false);
    setOtp('');
    setOtpError('');
  };

  const handleCloseTransferModal = () => {
    setShowTransferModal(false);
    setTransferAmount('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FF] dark:bg-gray-950">
      <Header />

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <HeroSection />

          {/* Wallet Display */}
          <div className="max-w-5xl mx-auto mb-10">
            <ClaimsWalletCardPlus
              balance={walletData.balance}
              onRefresh={handleRefreshWallet}
            />
          </div>

          <PaymentMethodsGrid
            onSelectPaymentMethod={handleSelectPaymentMethod}
          />

          <RecentTransactions />

          <FeatureCards />
        </div>
      </main>
      <div className="fixed top-20 right-4 z-40">
        <button
          className="help-toggle-button flex items-center justify-center h-[90px] w-[40px] 
      bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700
      shadow-md hover:shadow-lg overflow-hidden relative z-50
       "
          aria-label="Toggle help sidebar"
          style={{
            width: '40px',
            height: '90px',
            opacity: 1,
            transformOrigin: '50% 50% 0px',
          }}
        >
          <span
            className="font-medium tracking-wider text-lg transform -rotate-90 text-gray-600 dark:text-gray-400"
            style={{ opacity: 1 }}
          >
            INFO
          </span>
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity: 0 }}
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
              className="lucide lucide-x h-5 w-5 text-gray-600 dark:text-gray-400"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </div>
        </button>
      </div>
      <BerryChat />
      <Footer />
      <OTPModal
        isOpen={showOTPModal}
        onClose={handleCloseOTPModal}
        otp={otp}
        setOtp={setOtp}
        otpError={otpError}
        acceptedTerms={acceptedTerms}
        setAcceptedTerms={setAcceptedTerms}
        onVerify={handleVerifyOTP}
      />

      <TransferModal
        isOpen={showTransferModal}
        isRefresh={isRefresh}
        onClose={handleCloseTransferModal}
        transferAmount={transferAmount}
        setTransferAmount={setTransferAmount}
        transferInProgress={transferInProgress}
        transferSuccess={transferSuccess}
        modalPaymentMethod={modalPaymentMethod}
        walletBalance={walletData.balance}
        onTransfer={handleTransfer}
      />
    </div>
  );
}
