import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Sparkles, CheckCircle } from 'lucide-react';
import Button from '../components/Button';

const slides = [
  {
    icon: <Sparkles size={64} color="var(--primary-teal)" />,
    title: "Welcome to ManaSakhi",
    text: "Your personal companion for mental wellness. Track your mood, try exercises, and find peace.",
    buttonText: "Next"
  },
  {
    icon: <Shield size={64} color="var(--primary-blue)" />,
    title: "Privacy First",
    text: "Your data is safe with us. All interactions and analytics happen entirely on your device.",
    buttonText: "I Understand"
  },
  {
    icon: <CheckCircle size={64} color="var(--primary-teal)" />,
    title: "Ready to Begin?",
    text: "Join us in prioritizing your mental health every single day.",
    buttonText: "Start Journey"
  }
];

const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      navigate('/home');
    }
  };

  return (
    <div className="full-screen flex-col flex-center padding-box" style={{ padding: '24px', backgroundColor: 'var(--bg-light)' }}>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="flex-center" style={{ marginBottom: '32px' }}>
              {slides[currentSlide].icon}
            </div>
            <h2 className="title" style={{ marginBottom: '16px' }}>{slides[currentSlide].title}</h2>
            <p className="subtitle" style={{ lineHeight: '1.5' }}>{slides[currentSlide].text}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div style={{ width: '100%', paddingBottom: '32px' }}>
        <div className="flex-center" style={{ gap: '8px', marginBottom: '32px' }}>
          {slides.map((_, index) => (
            <div
              key={index}
              style={{
                width: currentSlide === index ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: currentSlide === index ? 'var(--primary-teal)' : 'var(--text-secondary)',
                opacity: currentSlide === index ? 1 : 0.3,
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>

        <Button onClick={handleNext}>
          {slides[currentSlide].buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
