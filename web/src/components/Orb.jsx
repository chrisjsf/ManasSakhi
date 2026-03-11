import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../App';

const Orb = () => {
  const { currentMood } = useContext(AppContext);

  const isCalm = currentMood === 'calm';
  const color = isCalm ? 'var(--primary-teal)' : 'var(--alert-orange)';
  
  // Base breathing animation
  const breathingVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: isCalm ? 4 : 2, // Faster breathing if stressed
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="orb-container">
      <motion.div
        className="orb-glow"
        style={{ backgroundColor: color }}
        variants={breathingVariants}
        animate="animate"
      />
      <motion.div
        className="orb-core"
        style={{ backgroundColor: color }}
        animate={{ 
          scale: isCalm ? 1 : 1.1,
          backgroundColor: color
        }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
};

export default Orb;
