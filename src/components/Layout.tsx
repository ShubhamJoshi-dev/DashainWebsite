import React, { useEffect } from 'react';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'Dashain Festival - The Greatest Festival of Nepal',
  description = 'Celebrate Dashain 2081, Nepal\'s greatest festival of victory and family reunion. Experience the rich traditions, culture, and heritage of this sacred festival.',
  keywords = 'Dashain, Nepal, Festival, Culture, Tradition, Tika, Jamara, Durga, Victory, Family, Celebration'
}) => {
  useEffect(() => {
    // Create floating elements periodically
    const createFloatingElement = () => {
      const elements = ['🌼', '🏵️', '🌺', '🪔', '✨'];
      const element = document.createElement('div');
      element.innerHTML = elements[Math.floor(Math.random() * elements.length)];
      element.style.position = 'fixed';
      element.style.fontSize = '2rem';
      element.style.pointerEvents = 'none';
      element.style.zIndex = '999';
      element.style.left = Math.random() * window.innerWidth + 'px';
      element.style.top = window.innerHeight + 'px';
      element.style.opacity = '0.7';
      
      document.body.appendChild(element);
      
      let position = window.innerHeight;
      const speed = 1 + Math.random() * 2;
      
      const animate = () => {
        position -= speed;
        element.style.top = position + 'px';
        element.style.transform = `rotate(${position * 0.5}deg)`;
        
        if (position < -100) {
          element.remove();
        } else {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    };

    const interval = setInterval(createFloatingElement, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dashain Festival Website" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dashain Festival" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="/images/photo1.jpg" />
        <meta property="og:image:alt" content="Dashain Festival Celebration" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/images/photo1.jpg" />
        <meta name="twitter:image:alt" content="Dashain Festival Celebration" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#DC143C" />
        <meta name="msapplication-TileColor" content="#DC143C" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Google Fonts */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Dashain Festival',
              description: description,
              url: typeof window !== 'undefined' ? window.location.origin : '',
              publisher: {
                '@type': 'Organization',
                name: 'Dashain Festival Website'
              },
              potentialAction: {
                '@type': 'SearchAction',
                target: typeof window !== 'undefined' ? `${window.location.origin}/?q={search_term_string}` : '',
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
