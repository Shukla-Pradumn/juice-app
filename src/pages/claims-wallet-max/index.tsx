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
import InfoDrawer from '@/components/claims-wallet-max/info-drawer';

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
        <InfoDrawer />
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
