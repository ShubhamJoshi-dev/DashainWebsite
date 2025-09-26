import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <motion.div 
          className={styles.footerContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.footerText}>
            <p>&copy; 2081 Dashain Festival Website. Celebrating Nepal&apos;s Rich Culture.</p>
          </div>
          <div className={styles.footerDecoration}>
            <span>🪔 🌼 🪔</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
