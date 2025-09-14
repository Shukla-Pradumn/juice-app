import '@/styles/globals.css';

import { ThemeProvider } from '@/providers/theme-providers';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
