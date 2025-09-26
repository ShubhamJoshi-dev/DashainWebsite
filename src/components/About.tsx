import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles/Sections.module.css';

const About: React.FC = () => {
  const factItems = [
    {
      icon: '📅',
      title: '15 Days',
      description: 'Duration of celebration'
    },
    {
      icon: '🏠',
      title: 'Family Reunion',
      description: 'Bringing loved ones together'
    },
    {
      icon: '🙏',
      title: 'Blessings',
      description: 'Tika and Jamara ceremony'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="about" className={`${styles.section} ${styles.about}`}>
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>About Dashain</h2>
          <div className={styles.titleUnderline}></div>
        </motion.div>
        <motion.div 
          className={styles.aboutContent}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className={styles.aboutText}>
            <p className={styles.aboutDescription}>
              Dashain is the most significant festival in Nepal, celebrating the victory of good over evil. 
              It&apos;s a time when families reunite, traditions are honored, and blessings are shared across generations.
            </p>
            <motion.div 
              className={styles.festivalFacts}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {factItems.map((fact, index) => (
                <motion.div 
                  key={index}
                  className={styles.factItem}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={styles.factIcon}>{fact.icon}</div>
                  <div className={styles.factContent}>
                    <h3>{fact.title}</h3>
                    <p>{fact.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
