import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/Sections.module.css';

const Wishes: React.FC = () => {
  const [isTyped, setIsTyped] = useState(false);
  const blessingRef = useRef<HTMLSpanElement>(null);
  const originalText = 'माँ दुर्गाको आशीर्वाद सधैं तपाईंसँग रहोस्';

  const typeWriter = (element: HTMLElement, text: string, speed: number = 150) => {
    let i = 0;
    element.innerHTML = '';
    
    const type = () => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    };
    
    type();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isTyped && blessingRef.current) {
            setIsTyped(true);
            typeWriter(blessingRef.current, originalText, 150);
          }
        });
      },
      { threshold: 0.5 }
    );

    const wishesSection = document.getElementById('wishes');
    if (wishesSection) {
      observer.observe(wishesSection);
    }

    return () => observer.disconnect();
  }, [isTyped, originalText]);

  return (
    <section id="wishes" className={`${styles.section} ${styles.wishes}`}>
      <div className="container">
        <motion.div 
          className={styles.wishesContent}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className={styles.wishesTitle}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            दशैंको हार्दिक शुभकामना
          </motion.h2>
          <motion.p 
            className={styles.wishesText}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            May this Dashain bring joy, prosperity, and happiness to you and your family.
            May the blessings of Goddess Durga be with you always.
          </motion.p>
          <motion.div 
            className={styles.blessingText}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <span ref={blessingRef} className="nepali-blessing">
              {!isTyped ? originalText : ''}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Wishes;
