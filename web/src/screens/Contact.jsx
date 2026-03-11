import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, ShieldAlert, HeartHandshake } from 'lucide-react';
import Button from '../components/Button';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="screen-container" style={{ backgroundColor: 'var(--bg-light)' }}>
      <header className="home-header" style={{ paddingBottom: '16px', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '16px' }}>
         <button 
           onClick={() => navigate(-1)} 
           style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}
         >
           <ArrowLeft size={24} />
         </button>
         <h1 className="title" style={{ margin: 0, fontSize: '20px' }}>Talk to Someone</h1>
      </header>

      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ backgroundColor: 'var(--white)', padding: '24px', borderRadius: '16px', boxShadow: 'var(--shadow)', border: '1px solid rgba(0,0,0,0.02)' }}
        >
          <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', alignItems: 'center' }}>
            <div style={{ backgroundColor: 'rgba(77, 181, 181, 0.1)', color: 'var(--primary-teal)', padding: '12px', borderRadius: '50%' }}>
              <HeartHandshake size={28} />
            </div>
            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>Trusted Friend</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Sarah Doe</p>
            </div>
          </div>
          <Button style={{ padding: '12px' }}>
             <Phone size={18} />
             Call Sarah
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ backgroundColor: 'var(--white)', padding: '24px', borderRadius: '16px', boxShadow: 'var(--shadow)', border: '1px solid rgba(0,0,0,0.02)' }}
        >
          <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', alignItems: 'center' }}>
            <div style={{ backgroundColor: 'rgba(255, 139, 120, 0.1)', color: 'var(--alert-coral)', padding: '12px', borderRadius: '50%' }}>
              <ShieldAlert size={28} />
            </div>
            <div>
              <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>Crisis Helpline</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Available 24/7, confidential</p>
            </div>
          </div>
          <Button 
            style={{ 
               backgroundColor: 'var(--alert-coral)', 
               padding: '12px',
               boxShadow: '0 4px 12px rgba(255, 139, 120, 0.3)'
            }}
          >
             <Phone size={18} />
             Call Helpline
          </Button>
        </motion.div>

        <div style={{ marginTop: 'auto', textAlign: 'center' }}>
           <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.5' }}>
             It takes courage to reach out. <br/>You don't have to carry this alone.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
