import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload critical CSS */}
        <link rel="preload" href="/fonts/poppins.woff2" as="font" type="font/woff2" crossOrigin="" />
        
        {/* Critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS - inline for performance */
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
              font-family: 'Poppins', sans-serif; 
              line-height: 1.6; 
              color: #333; 
              overflow-x: hidden; 
            }
            html { scroll-behavior: smooth; }
          `
        }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
