import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Heart } from 'lucide-react';
import Button from '../components/Button';

const Gratitude = () => {
  const [entries, setEntries] = useState(['', '', '']);
  const [isDone, setIsDone] = useState(false);
  const navigate = useNavigate();

  const handleTextChange = (index, value) => {
    const newEntries = [...entries];
    newEntries[index] = value;
    setEntries(newEntries);
  };

  const isComplete = entries.every(entry => entry.trim() !== '');

  const handleSubmit = () => {
    if (isComplete) {
      setIsDone(true);
      setTimeout(() => {
        navigate('/home');
      }, 2000);
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
        <h1 className="title" style={{ margin: 0, fontSize: '20px' }}>Gratitude</h1>
      </header>

      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <AnimatePresence mode="wait">
          {!isDone ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
            >
              <div className="flex-center" style={{ marginBottom: '16px' }}>
                <div style={{ backgroundColor: 'var(--primary-teal)', borderRadius: '50%', padding: '16px', color: 'white' }}>
                  <Heart size={32} />
                </div>
              </div>
              <h2 className="title text-center" style={{ fontSize: '22px', marginBottom: '8px' }}>Name 3 things</h2>
              <p className="text-center" style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
                What are three things you felt thankful for today?
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {entries.map((text, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ 
                      width: '32px', height: '32px', borderRadius: '50%', 
                      backgroundColor: text.trim() ? 'var(--primary-teal)' : '#e2e8f0',
                      color: text.trim() ? 'white' : 'var(--text-secondary)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 'bold', transition: 'all 0.3s'
                    }}>
                      {text.trim() ? <Check size={16} /> : index + 1}
                    </div>
                    <input 
                      type="text"
                      placeholder={`I am grateful for...`}
                      value={text}
                      onChange={(e) => handleTextChange(index, e.target.value)}
                      style={{ 
                        flex: 1, padding: '12px 16px', borderRadius: '12px',
                        border: '1px solid rgba(77, 181, 181, 0.3)',
                        outline: 'none', fontSize: '16px'
                      }}
                    />
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 'auto' }}>
                <Button 
                  onClick={handleSubmit} 
                  style={{ opacity: isComplete ? 1 : 0.5 }}
                >
                  Save Gratitude
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-col flex-center full-screen"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ backgroundColor: 'var(--primary-teal)', borderRadius: '50%', padding: '24px', color: 'white', marginBottom: '24px' }}
              >
                <Heart size={48} />
              </motion.div>
              <h2 className="title">Beautifully Done</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Carrying this positivity with you.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gratitude;
