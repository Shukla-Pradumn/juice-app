# Claims Wallet Max Components

This directory contains the refactored components for the Claims Wallet Max page, broken down from a single large component into smaller, more manageable pieces.

## Components

### HeroSection
- Displays the main hero section with logo, title, and description
- Simple presentational component with no state

### PaymentMethodCard
- Individual payment method card component
- Handles both primary (virtual card) and secondary payment methods
- Includes hover effects and animations

### PaymentMethodsGrid
- Grid layout for all payment method options
- Manages the payment methods data
- Handles animation variants for staggered loading

### RecentTransactions
- Displays transaction history in a table format
- Static data component (can be made dynamic later)

### FeatureCards
- Shows additional features in a grid layout
- Displays security, global acceptance, and real-time updates

### OTPModal
- Modal for OTP verification
- Handles form validation and user input
- Includes terms and conditions checkbox

### TransferModal
- Modal for payment transfer process
- Handles amount input, validation, and transfer states
- Includes loading animation and success states

## Usage

```tsx
import {
  HeroSection,
  PaymentMethodsGrid,
  RecentTransactions,
  FeatureCards,
  OTPModal,
  TransferModal,
} from '@/components/claims-wallet-max';
```

## Benefits of Refactoring

1. **Maintainability**: Each component has a single responsibility
2. **Reusability**: Components can be reused in other parts of the app
3. **Testability**: Smaller components are easier to test
4. **Readability**: Code is more organized and easier to understand
5. **Performance**: Better code splitting and lazy loading opportunities
6. **Collaboration**: Multiple developers can work on different components

## File Structure

```
claims-wallet-max/
├── index.ts                 # Barrel exports
├── hero-section.tsx         # Hero section component
├── payment-method-card.tsx  # Individual payment method card
├── payment-methods-grid.tsx # Grid of payment methods
├── recent-transactions.tsx  # Transaction history table
├── feature-cards.tsx        # Additional features grid
├── otp-modal.tsx           # OTP verification modal
├── transfer-modal.tsx      # Payment transfer modal
└── README.md               # This documentation
```
