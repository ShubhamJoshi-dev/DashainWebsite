import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/Sections.module.css';

const Gallery: React.FC = () => {
  const galleryItems = [
    {
      src: '/images/photo1.jpg',
      alt: 'Festival Celebration',
      title: 'Festival Joy',
      description: 'Celebrating with happiness and tradition'
    },
    {
      src: '/images/photo2.jpg',
      alt: 'Traditional Portrait',
      title: 'Traditional Spirit',
      description: 'Embracing our cultural heritage'
    },
    {
      src: '/images/photo3.jpeg',
      alt: 'Dashain Celebration',
      title: 'Festive Moments',
      description: 'Capturing the essence of Dashain'
    },
    {
      src: '/images/photo4.jpeg',
      alt: 'Cultural Heritage',
      title: 'Cultural Pride',
      description: 'Honoring our traditions'
    },
    {
      src: '/images/photo5.jpeg',
      alt: 'Dashain Memories',
      title: 'Precious Memories',
      description: 'Cherishing festival moments'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const handleTikaClick = () => {
    const tikaElement = document.querySelector(`.${styles.tikaPattern}`) as HTMLElement;
    if (tikaElement) {
      tikaElement.style.animation = 'pulse 0.5s ease-in-out';
      setTimeout(() => {
        tikaElement.style.animation = 'pulse 2s infinite';
      }, 500);
    }
  };

  return (
    <section id="gallery" className={`${styles.section} ${styles.gallery}`}>
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Festival Moments</h2>
          <div className={styles.titleUnderline}></div>
        </motion.div>
        <motion.div 
          className={styles.galleryGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryItems.map((item, index) => (
            <motion.div 
              key={index}
              className={styles.galleryItem}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Image 
                src={item.src} 
                alt={item.alt} 
                width={400}
                height={300}
                className={styles.galleryImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className={styles.galleryOverlay}>
                <div className={styles.galleryText}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            className={`${styles.galleryItem} ${styles.traditionVisual}`}
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <div className={styles.visualContent}>
              <div 
                className={styles.tikaPattern}
                onClick={handleTikaClick}
                style={{ cursor: 'pointer' }}
              ></div>
              <h3>Sacred Tika</h3>
              <p>The blessed mark of protection</p>
            </div>
          </motion.div>
          
          <motion.div 
            className={`${styles.galleryItem} ${styles.traditionVisual}`}
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <div className={styles.visualContent}>
              <div className={styles.jamaraVisual}>🌱🌱🌱</div>
              <h3>Holy Jamara</h3>
              <p>Symbol of prosperity and growth</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
