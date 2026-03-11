import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LeafIcon } from 'lucide-react';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 3000); // 3 seconds delay
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="full-screen flex-col flex-center" style={{ backgroundColor: 'white', color: 'var(--text-primary)' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: 1, ease: "easeInOut" }}
          style={{ width: '100px', height: '100px', borderRadius: '50%', margin: '0 auto 24px auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <span style={{ fontSize: '48px' }}> <LeafIcon size={70} color='var(--primary-teal)' /> </span>
        </motion.div>
        <h1 style={{ color: 'var(--primary-teal)', marginBottom: '8px', fontSize: '32px' }}>ManaSakhi</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '18px', letterSpacing: '2px' }}>മനസ്സഖി</p>
      </motion.div>
    </div>
  );
};

export default Splash;
