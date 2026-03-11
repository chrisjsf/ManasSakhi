import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Button from '../components/Button';

const Breathing = () => {
  const [phase, setPhase] = useState('start'); // start, inhale, hold, exhale, done
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (phase === 'start') {
      timer = setTimeout(() => setPhase('inhale'), 1000);
    } else if (phase === 'inhale') {
      timer = setTimeout(() => setPhase('hold'), 4000); // 4s inhale
    } else if (phase === 'hold') {
      timer = setTimeout(() => setPhase('exhale'), 7000); // 7s hold
    } else if (phase === 'exhale') {
      timer = setTimeout(() => setPhase('done'), 8000); // 8s exhale
    }
    return () => clearTimeout(timer);
  }, [phase]);

  const getCircleState = () => {
    switch(phase) {
      case 'inhale': return { scale: 2, opacity: 0.8 };
      case 'hold': return { scale: 2, opacity: 1 };
      case 'exhale': return { scale: 1, opacity: 0.5 };
      default: return { scale: 1, opacity: 0.5 };
    }
  };

  const getTransitionDuration = () => {
    switch(phase) {
      case 'inhale': return 4;
      case 'hold': return 7;
      case 'exhale': return 8;
      default: return 1;
    }
  };

  const getText = () => {
    switch(phase) {
      case 'inhale': return "Inhale...";
      case 'hold': return "Hold...";
      case 'exhale': return "Exhale...";
      case 'done': return "How do you feel?";
      default: return "Ready?";
    }
  };

  return (
    <div className="full-screen" style={{ backgroundColor: 'var(--bg-light)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Skip Button */}
      {phase !== 'done' && (
        <button 
          onClick={() => setPhase('done')}
          style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '16px', zIndex: 10 }}
        >
          Skip
        </button>
      )}

      {/* Main Content */}
      <div className="flex-col flex-center" style={{ height: '100vh', justifyContent: 'center' }}>
        
        {phase !== 'done' ? (
          <>
            <div style={{ position: 'relative', width: '300px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
               {/* Animated Breathing Circle */}
               <motion.div
                 animate={getCircleState()}
                 transition={{ duration: getTransitionDuration(), ease: "easeInOut" }}
                 style={{
                   width: '100px',
                   height: '100px',
                   borderRadius: '50%',
                   backgroundColor: 'var(--primary-blue)',
                   position: 'absolute'
                 }}
               />
               
               {/* Center Guide Ring */}
               <div style={{
                   width: '200px',
                   height: '200px',
                   borderRadius: '50%',
                   border: '2px dashed rgba(107, 154, 196, 0.3)',
                   position: 'absolute'
                 }}
               />
               
               {/* Instruction Text */}
               <motion.h2 
                 key={phase}
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0 }}
                 style={{ 
                   position: 'absolute', 
                   color: 'var(--text-primary)',
                   fontSize: '24px',
                   fontWeight: '700',
                   zIndex: 2,
                   textShadow: '0 2px 4px rgba(255,255,255,0.8)'
                 }}
               >
                 {getText()}
               </motion.h2>
            </div>
            
            <p style={{ marginTop: '40px', color: 'var(--text-secondary)' }}>
              4-7-8 Breathing Technique
            </p>
          </>
        ) : (
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="flex-col flex-center"
             style={{ gap: '24px' }}
          >
             <h2>{getText()}</h2>
             <div style={{ display: 'flex', gap: '16px' }}>
               {['😓', '😐', '😌'].map((emoji, i) => (
                 <motion.button
                   key={i}
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.9 }}
                   onClick={() => navigate('/home')}
                   style={{ fontSize: '48px', background: 'none', border: 'none', cursor: 'pointer' }}
                 >
                   {emoji}
                 </motion.button>
               ))}
             </div>
             <Button variant="text" onClick={() => navigate('/home')} style={{ marginTop: '16px' }}>
               Return to Home
             </Button>
          </motion.div>
        )}

      </div>
      
      {/* Do not show NavBar during core exercise to avoid distraction, only on done optionally, or omit */}
      {phase === 'done' && <NavBar />}
    </div>
  );
};

export default Breathing;
