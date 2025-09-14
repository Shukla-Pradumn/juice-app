import { 
  CreditCard, 
  FileText, 
  Link, 
  Building2, 
  UserCheck, 
  Wallet 
} from 'lucide-react';

// Icons for feature badges
export const FeatureIcons = {
  DropInUI: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-layout-grid h-3 w-3 mr-1"
    >
      <rect width="7" height="7" x="3" y="3" rx="1"></rect>
      <rect width="7" height="7" x="14" y="3" rx="1"></rect>
      <rect width="7" height="7" x="14" y="14" rx="1"></rect>
      <rect width="7" height="7" x="3" y="14" rx="1"></rect>
    </svg>
  ),
  CoBranded: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-pencil-ruler h-3 w-3 mr-1"
    >
      <path d="m15 5 4 4"></path>
      <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path>
      <path d="m8 6 2-2"></path>
      <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z"></path>
      <path d="m18 16 2-2"></path>
      <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path>
    </svg>
  ),
  Web: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-globe h-3 w-3 mr-1"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
      <path d="M2 12h20"></path>
    </svg>
  ),
  APIs: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-webhook h-3 w-3 mr-1"
    >
      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
      <path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
      <path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
    </svg>
  ),
  JuiceApp: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-app-window h-3 w-3 mr-1"
    >
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="M10 4v4"></path>
      <path d="M2 8h20"></path>
      <path d="M6 4v4"></path>
    </svg>
  ),
  Mobile: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-smartphone h-3 w-3 mr-1"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
      <path d="M12 18h.01"></path>
    </svg>
  ),
};

// Incoming Payment Solutions data
export const incomingPaymentsData = [
  {
    href: '/premium-pay-agent',
    title: 'Premium Pay - Agent',
    description: 'Process premium payments for insurance agents',
    icon: <CreditCard className="h-6 w-6" />,
    image: 'https://juiceclaims.com/Card-Image_Premium-Pay-Agent.png',
    imageAlt: 'Premium Pay - Agent',
    badge: { text: 'CLIENT', color: '#3662e3' },
    features: [
      { icon: FeatureIcons.DropInUI, label: 'Drop-In UI', variant: 'purple' as const },
      { icon: FeatureIcons.CoBranded, label: 'Co-Branded', variant: 'amber' as const },
      { icon: FeatureIcons.Web, label: 'Web', variant: 'blue' as const },
    ],
  },
  {
    href: '/premium-pay-client',
    title: 'Premium Pay - Client',
    description: 'Pay your insurance premium securely and conveniently',
    icon: <CreditCard className="h-6 w-6" />,
    image: 'https://juiceclaims.com/Card-Image_Premium-Pay-Client.png',
    imageAlt: 'Premium Pay - Client',
    badge: { text: 'JUICE', color: '#00adee' },
    features: [
      { icon: FeatureIcons.DropInUI, label: 'Drop-In UI', variant: 'purple' as const },
      { icon: FeatureIcons.CoBranded, label: 'Co-Branded', variant: 'amber' as const },
      { icon: FeatureIcons.Web, label: 'Web', variant: 'blue' as const },
    ],
  },
  {
    href: '/policy-hub',
    title: 'Policy Hub',
    description: 'Access and manage your policy details and documents',
    icon: <FileText className="h-6 w-6" />,
    image: 'https://juiceclaims.com/Card-Image_Policy-Hub.png',
    imageAlt: 'Policy Hub',
    badge: { text: 'CLIENT', color: '#3662e3' },
    features: [
      { icon: FeatureIcons.APIs, label: 'APIs', variant: 'emerald' as const },
      { icon: FeatureIcons.CoBranded, label: 'Co-Branded', variant: 'amber' as const },
      { icon: FeatureIcons.Web, label: 'Web', variant: 'blue' as const },
    ],
  },
];

// Outgoing Payment Solutions data
export const outgoingPaymentsData = [
  {
    href: '/pay-link',
    title: 'Pay Link',
    description: 'Create a one-time payment link with customizable options',
    icon: <Link className="h-6 w-6" />,
    image: 'https://juiceclaims.com/Card-Image_Pay-Link.png',
    imageAlt: 'Pay Link',
    badge: { text: 'JUICE', color: '#00adee' },
    features: [
      { icon: FeatureIcons.DropInUI, label: 'Drop-In UI', variant: 'purple' as const },
      { icon: FeatureIcons.APIs, label: 'APIs', variant: 'emerald' as const },
      { icon: FeatureIcons.JuiceApp, label: 'Juice App', variant: 'red' as const },
      { icon: FeatureIcons.CoBranded, label: 'Co-Branded', variant: 'amber' as const },
      { icon: FeatureIcons.Web, label: 'Web', variant: 'blue' as const },
    ],
  },
  {
    href: '/pay-partners',
    title: 'Pay Partners',
    description: 'Process payments to partners, agents, and service providers',
    icon: <Building2 className="h-6 w-6" />,
    image: 'https://juiceclaims.com/Card-Image_Pay-Partners.png',
    imageAlt: 'Pay Partners',
    badge: { text: 'JUICE', color: '#00adee' },
    features: [
      { icon: FeatureIcons.APIs, label: 'APIs', variant: 'emerald' as const },
      { icon: FeatureIcons.JuiceApp, label: 'Juice App', variant: 'red' as const },
      { icon: FeatureIcons.CoBranded, label: 'Co-Branded', variant: 'amber' as const },
      { icon: FeatureIcons.Web, label: 'Web', variant: 'blue' as const },
    ],
  },
  {
    href: 'https://app.juicefin.com',
    title: 'Pay Claims',
    description: 'Pay claims instantly with flexible payment methods',
    icon: <CreditCard className="h-6 w-6" />,
    image: 'https://juiceclaims.com/Card-Image_Pay-Claims.png',
    imageAlt: 'Pay Claims',
    badge: { text: 'JUICE', color: '#00adee' },
    features: [
      { icon: FeatureIcons.APIs, label: 'APIs', variant: 'emerald' as const },
      { icon: FeatureIcons.JuiceApp, label: 'Juice App', variant: 'red' as const },
      { icon: FeatureIcons.CoBranded, label: 'Co-Branded', variant: 'amber' as const },
      { icon: FeatureIcons.Web, label: 'Web', variant: 'blue' as const },
    ],
  },
];

// Claims Wallet data
export const claimsWalletData = [
  {
    href: '/claimant-verification',
    title: 'Claimant Verification',
    description: 'Verify your identity to access claims and payments',
    icon: <UserCheck className="h-6 w-6" />,
    image: 'https://juiceclaims.com/Card-Image_Claimant-Verification.png',
    imageAlt: 'Claimant Verification',
    badge: { text: 'JUICE', color: '#00adee' },
    features: [
      { icon: FeatureIcons.DropInUI, label: 'Drop-In UI', variant: 'purple' as const },
      { icon: FeatureIcons.APIs, label: 'APIs', variant: 'emerald' as const },
      { icon: FeatureIcons.JuiceApp, label: 'Juice App', variant: 'red' as const },
      { icon: FeatureIcons.CoBranded, label: 'Co-Branded', variant: 'amber' as const },
      { icon: FeatureIcons.Web, label: 'Web', variant: 'blue' as const },
      { icon: FeatureIcons.Mobile, label: 'Mobile', variant: 'indigo' as const },
    ],
  },
  {
    href: '/virtual-claims-card',
    title: 'Virtual Claims Card',
    description: 'Issue instant virtual cards for claims payments',
    icon: <CreditCard className="h-6 w-6" />,
    image: 'https://juiceclaims.com/Card-Image_Virtual-Claims-Card.png',
    imageAlt: 'Virtual Claims Card',
    badge: { text: 'JUICE', color: '#00adee' },
    features: [
      { icon: FeatureIcons.APIs, label: 'APIs', variant: 'emerald' as const },
      { icon: FeatureIcons.JuiceApp, label: 'Juice App', variant: 'red' as const },
      { icon: FeatureIcons.CoBranded, label: 'Co-Branded', variant: 'amber' as const },
      { icon: FeatureIcons.Web, label: 'Web', variant: 'blue' as const },
      { icon: FeatureIcons.Mobile, label: 'Mobile', variant: 'indigo' as const },
    ],
  },
  {
    href: '/claims-wallet-pro',
    title: 'Claims Wallet Pro',
    description: 'Advanced claims wallet with enhanced fund management',
    icon: <Wallet className="h-6 w-6" />,
    image: 'https://juiceclaims.com/Card-Image-Claims-Wallet-Pro.png',
    imageAlt: 'Claims Wallet Pro',
    badge: { text: 'JUICE', color: '#00adee' },
    features: [
      { icon: FeatureIcons.APIs, label: 'APIs', variant: 'emerald' as const },
      { icon: FeatureIcons.JuiceApp, label: 'Juice App', variant: 'red' as const },
      { icon: FeatureIcons.CoBranded, label: 'Co-Branded', variant: 'amber' as const },
      { icon: FeatureIcons.Web, label: 'Web', variant: 'blue' as const },
      { icon: FeatureIcons.Mobile, label: 'Mobile', variant: 'indigo' as const },
    ],
  },
  {
    href: '/claims-wallet-max',
    title: 'Claims Wallet Max',
    description: 'Premium wallet interface with optimized payment distribution',
    icon: <Wallet className="h-6 w-6" />,
    image: 'https://juiceclaims.com/Card-Image-Claims-Wallet-Max.png',
    imageAlt: 'Claims Wallet Max',
    badge: { text: 'JUICE', color: '#00adee' },
    features: [
      { icon: FeatureIcons.APIs, label: 'APIs', variant: 'emerald' as const },
      { icon: FeatureIcons.JuiceApp, label: 'Juice App', variant: 'red' as const },
      { icon: FeatureIcons.CoBranded, label: 'Co-Branded', variant: 'amber' as const },
      { icon: FeatureIcons.Web, label: 'Web', variant: 'blue' as const },
      { icon: FeatureIcons.Mobile, label: 'Mobile', variant: 'indigo' as const },
    ],
  },
];
