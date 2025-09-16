import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link 
          href="/font/Prompt-Regular.ttf" 
          rel="preload" 
          as="font" 
          type="font/ttf" 
          crossOrigin="anonymous"
        />
        <style jsx global>{`
          @font-face {
            font-family: 'Prompt-Regular';
            src: url('/font/Prompt-Regular.ttf') format('truetype');
            font-display: swap;
          }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
