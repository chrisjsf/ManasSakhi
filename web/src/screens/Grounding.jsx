import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Eye, Ear, Hand, Wind, Coffee } from 'lucide-react';
import Button from '../components/Button';

const steps = [
  { icon: <Eye size={32} />, title: "5 Things you can see", text: "Look around you." },
  { icon: <Hand size={32} />, title: "4 Things you can touch", text: "Feel the texture." },
  { icon: <Ear size={32} />, title: "3 Things you can hear", text: "Listen closely." },
  { icon: <Wind size={32} />, title: "2 Things you can smell", text: "Breathe in." },
  { icon: <Coffee size={32} />, title: "1 Thing you can taste", text: "Notice the flavor." }
];

const Grounding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsDone(true);
      setTimeout(() => {
        navigate('/home');
      }, 2500);
    }
  };

  return (
    <div className="screen-container" style={{ backgroundColor: 'var(--bg-light)' }}>
      <header className="home-header" style={{ paddingBottom: '16px', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '16px' }}>
        <button
          onClick={() => navigate(-1)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="title" style={{ margin: 0, fontSize: '20px' }}>Grounding</h1>
      </header>

      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <AnimatePresence mode="wait">
          {!isDone ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'center' }}
            >

              <div style={{ marginBottom: '32px', color: 'var(--primary-teal)', backgroundColor: 'rgba(77, 181, 181, 0.1)', padding: '32px', borderRadius: '50%' }}>
                {steps[currentStep].icon}
              </div>

              <h2 className="title text-center" style={{ fontSize: '28px', marginBottom: '16px' }}>
                {steps[currentStep].title}
              </h2>
              <p className="subtitle text-center" style={{ marginBottom: '48px', fontSize: '18px' }}>
                {steps[currentStep].text}
              </p>

              <div style={{ width: '100%', marginTop: 'auto' }}>
                <div className="flex-center" style={{ gap: '8px', marginBottom: '32px' }}>
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      style={{
                        width: currentStep === index ? '24px' : '8px',
                        height: '8px',
                        borderRadius: '4px',
                        backgroundColor: currentStep === index ? 'var(--primary-teal)' : 'var(--text-secondary)',
                        opacity: currentStep === index ? 1 : 0.3,
                        transition: 'all 0.3s ease'
                      }}
                    />
                  ))}
                </div>

                <Button onClick={handleNext}>
                  {currentStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>

            </motion.div>
          ) : (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-col flex-center full-screen"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ backgroundColor: 'var(--primary-teal)', borderRadius: '50%', padding: '24px', color: 'white', marginBottom: '24px' }}
              >
                <Check size={48} />
              </motion.div>
              <h2 className="title">You are safe.</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Welcome back to the present.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Grounding;
