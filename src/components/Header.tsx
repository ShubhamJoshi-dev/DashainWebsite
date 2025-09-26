import React, { useState, useEffect } from 'react';
import styles from '@/styles/Header.module.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={styles.header}
      style={{
        background: isScrolled 
          ? 'rgba(220, 20, 60, 0.98)' 
          : 'rgba(220, 20, 60, 0.95)'
      }}
    >
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <h1 className={styles.logoText}>दशैं</h1>
            <span className={styles.logoSubtitle}>Dashain 2081</span>
          </div>
          <ul className={styles.navMenu}>
            <li>
              <a 
                href="#home" 
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#traditions" 
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('traditions');
                }}
              >
                Traditions
              </a>
            </li>
            <li>
              <a 
                href="#gallery" 
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('gallery');
                }}
              >
                Gallery
              </a>
            </li>
            <li>
              <a 
                href="#wishes" 
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('wishes');
                }}
              >
                Wishes
              </a>
            </li>
          </ul>
          <div className={styles.mobileMenuToggle}>☰</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
