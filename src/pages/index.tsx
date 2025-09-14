'use client';

import Link from 'next/link';
import { Header } from '@/components/header';
import { ArrowRight } from 'lucide-react';
import CardSection from '@/components/card-section';
import Footer from '@/components/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FF] dark:bg-gray-950">
      <Header />

      <main className="flex-grow">
        <div className="">
          {/* Hero Section */}
          <div className="mx-auto text-center mb-16">
            <section className="relative h-[400px] flex items-center">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://juiceclaims.com/Citizens-BG-Image1.jpg"
                  alt="Senior couples walking hand in hand on the beach"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/25"></div>
              </div>
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl text-white">
                  <h1 className="text-5xl font-bold mb-6 pl-[70px] pt-[30px] flex items-center">
                    PAYMENT SOLUTIONS FOR INSURANCE
                  </h1>
                </div>
              </div>
            </section>
          </div>
          <CardSection />
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Insurance Payments?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Experience the future of claims processing with our comprehensive
              payment solutions.
            </p>
            <Link
              href="/claims-wallet-max"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Get Started with Claims Wallet Max
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
