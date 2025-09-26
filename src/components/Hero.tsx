import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/Hero.module.css';

const Hero: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector(`.${styles.hero}`) as HTMLElement;
      if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTraditions = () => {
    const section = document.getElementById('traditions');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const createCelebrationBurst = (photoElement: HTMLElement) => {
    const celebrationElements = ['🎉', '✨', '🌟', '🎊', '💫'];
    const rect = photoElement.getBoundingClientRect();
    
    for (let i = 0; i < 8; i++) {
      const element = document.createElement('div');
      element.innerHTML = celebrationElements[Math.floor(Math.random() * celebrationElements.length)];
      element.style.position = 'fixed';
      element.style.fontSize = '1.5rem';
      element.style.pointerEvents = 'none';
      element.style.zIndex = '1000';
      element.style.left = (rect.left + rect.width / 2) + 'px';
      element.style.top = (rect.top + rect.height / 2) + 'px';
      
      document.body.appendChild(element);
      
      const angle = (i / 8) * 2 * Math.PI;
      const distance = 100 + Math.random() * 100;
      const finalX = rect.left + rect.width / 2 + Math.cos(angle) * distance;
      const finalY = rect.top + rect.height / 2 + Math.sin(angle) * distance;
      
      element.animate([
        { 
          left: (rect.left + rect.width / 2) + 'px',
          top: (rect.top + rect.height / 2) + 'px',
          opacity: 1,
          transform: 'scale(0) rotate(0deg)'
        },
        { 
          left: finalX + 'px',
          top: finalY + 'px',
          opacity: 0,
          transform: 'scale(1.5) rotate(360deg)'
        }
      ], {
        duration: 1000 + Math.random() * 500,
        easing: 'ease-out'
      }).onfinish = () => element.remove();
    }
  };

  const handlePhotoClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const photoElement = event.currentTarget;
    
    // Create ripple effect
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.width = '50px';
    ripple.style.height = '50px';
    ripple.style.background = 'rgba(255, 215, 0, 0.6)';
    ripple.style.borderRadius = '50%';
    ripple.style.top = '50%';
    ripple.style.left = '50%';
    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '15';
    
    photoElement.appendChild(ripple);
    
    ripple.animate([
      { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
      { transform: 'translate(-50%, -50%) scale(4)', opacity: 0 }
    ], {
      duration: 600,
      easing: 'ease-out'
    }).onfinish = () => ripple.remove();
    
    createCelebrationBurst(photoElement);
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.floatingElements}>
          <div className={`${styles.flower} ${styles.flower1}`}>🌼</div>
          <div className={`${styles.flower} ${styles.flower2}`}>🏵️</div>
          <div className={`${styles.flower} ${styles.flower3}`}>🌺</div>
          <div className={`${styles.diyo} ${styles.diyo1}`}>🪔</div>
          <div className={`${styles.diyo} ${styles.diyo2}`}>🪔</div>
        </div>
        <div className={styles.heroPhotos}>
          <motion.div 
            className={`${styles.heroPhoto} ${styles.heroPhoto1}`}
            onClick={handlePhotoClick}
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: -15 }}
            transition={{ delay: 1.5, duration: 1, type: "spring", stiffness: 100 }}
          >
            <Image 
              src="/images/photo1.jpg" 
              alt="Festival Celebration" 
              fill
              className={styles.heroImg}
              sizes="200px"
              priority
            />
            <div className={styles.photoFrame}></div>
          </motion.div>
          <motion.div 
            className={`${styles.heroPhoto} ${styles.heroPhoto2}`}
            onClick={handlePhotoClick}
            initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
            animate={{ opacity: 1, scale: 1, rotate: 12 }}
            transition={{ delay: 2, duration: 1, type: "spring", stiffness: 100 }}
          >
            <Image 
              src="/images/photo2.jpg" 
              alt="Traditional Portrait" 
              fill
              className={styles.heroImg}
              sizes="200px"
              priority
            />
            <div className={styles.photoFrame}></div>
          </motion.div>
          <motion.div 
            className={`${styles.heroPhoto} ${styles.heroPhoto3}`}
            onClick={handlePhotoClick}
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ delay: 2.5, duration: 1, type: "spring", stiffness: 100 }}
          >
            <Image 
              src="/images/photo3.jpeg" 
              alt="Dashain Celebration" 
              fill
              className={styles.heroImg}
              sizes="180px"
              priority
            />
            <div className={styles.photoFrame}></div>
          </motion.div>
          <motion.div 
            className={`${styles.heroPhoto} ${styles.heroPhoto4}`}
            onClick={handlePhotoClick}
            initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
            animate={{ opacity: 1, scale: 1, rotate: 18 }}
            transition={{ delay: 3, duration: 1, type: "spring", stiffness: 100 }}
          >
            <Image 
              src="/images/photo4.jpeg" 
              alt="Cultural Heritage" 
              fill
              className={styles.heroImg}
              sizes="180px"
              priority
            />
            <div className={styles.photoFrame}></div>
          </motion.div>
          <motion.div 
            className={`${styles.heroPhoto} ${styles.heroPhoto5}`}
            onClick={handlePhotoClick}
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: -20 }}
            transition={{ delay: 3.5, duration: 1, type: "spring", stiffness: 100 }}
          >
            <Image 
              src="/images/photo5.jpeg" 
              alt="Dashain Memories" 
              fill
              className={styles.heroImg}
              sizes="160px"
              priority
            />
            <div className={styles.photoFrame}></div>
          </motion.div>
        </div>
      </div>
      <motion.div 
        className={styles.heroContent}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.heroTitle}>
          <motion.span 
            className={styles.titleLine}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            शुभ
          </motion.span>
          <motion.span 
            className={styles.titleLine}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            दशैं
          </motion.span>
          <motion.span 
            className={styles.titleLineEn}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Happy Dashain
          </motion.span>
        </h1>
        <motion.p 
          className={styles.heroSubtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Nepal&apos;s Greatest Festival of Victory and Family Reunion
        </motion.p>
        <motion.div 
          className={styles.heroDate}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className={styles.dateText}>Ghatasthapana 2081 - Coming Soon</span>
        </motion.div>
        <motion.button 
          className={styles.ctaButton}
          onClick={scrollToTraditions}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Traditions
        </motion.button>
      </motion.div>
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollArrow}></div>
      </div>
    </section>
  );
};

export default Hero;
