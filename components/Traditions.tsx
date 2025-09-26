import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/Sections.module.css';

const Traditions: React.FC = () => {
  const traditions = [
    {
      icon: '🌱',
      title: 'Ghatasthapana',
      description: 'The first day when barley and maize seeds are sown to grow Jamara'
    },
    {
      icon: '🐐',
      title: 'Asthami & Navami',
      description: 'Animal sacrifices offered to Goddess Durga for prosperity and protection'
    },
    {
      icon: '🎋',
      title: 'Tika & Jamara',
      description: 'Elders apply sacred tika and give jamara with blessings on Dashami'
    },
    {
      icon: '🪁',
      title: 'Kite Flying',
      description: 'Traditional kite flying competition celebrating the festive spirit'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget;
    card.style.transform = 'translateY(-15px) scale(1.05)';
    setTimeout(() => {
      card.style.transform = 'translateY(-15px) scale(1.02)';
    }, 200);
  };

  return (
    <section id="traditions" className={`${styles.section} ${styles.traditions}`}>
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Sacred Traditions</h2>
          <div className={styles.titleUnderline}></div>
        </motion.div>
        <motion.div 
          className={styles.traditionsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {traditions.map((tradition, index) => (
            <motion.div 
              key={index}
              className={styles.traditionCard}
              variants={cardVariants}
              onClick={handleCardClick}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={styles.traditionIcon}>{tradition.icon}</div>
              <h3>{tradition.title}</h3>
              <p>{tradition.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Traditions;
