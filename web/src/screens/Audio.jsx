import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Pause, SkipBack, SkipForward } from 'lucide-react';

const Audio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="screen-container" style={{ backgroundColor: 'var(--bg-light)' }}>
      {/* Header */}
      <header className="home-header" style={{ paddingBottom: '16px', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '16px' }}>
        <button 
          onClick={() => navigate(-1)} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--text-primary)' }}
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="title" style={{ margin: 0, fontSize: '20px' }}>Mindful Walking</h1>
      </header>

      {/* Main Content */}
      <div className="flex-col flex-center" style={{ padding: '40px 24px', flex: 1 }}>
        <motion.div 
          className="flex-center"
          animate={{ scale: isPlaying ? [1, 1.05, 1] : 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ 
            width: '200px', 
            height: '200px', 
            borderRadius: '50%', 
            background: 'linear-gradient(135deg, var(--primary-teal), var(--primary-blue))',
            marginBottom: '40px',
            boxShadow: '0 8px 32px rgba(77, 181, 181, 0.3)'
          }}
        >
          <span style={{ fontSize: '64px' }}>🎧</span>
        </motion.div>

        <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>Evening Stroll</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>10 Min • Guided Audio</p>

        {/* Player Controls */}
        <div style={{ width: '100%', maxWidth: '300px' }}>
          {/* Progress Bar */}
          <div style={{ width: '100%', height: '4px', backgroundColor: '#e2e8f0', borderRadius: '2px', marginBottom: '8px', position: 'relative' }}>
             <motion.div 
                style={{ height: '100%', backgroundColor: 'var(--primary-teal)', borderRadius: '2px' }}
                initial={{ width: '0%' }}
                animate={{ width: isPlaying ? '100%' : '15%' }}
                transition={{ duration: 600, ease: "linear" }}
             />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '12px', marginBottom: '32px' }}>
             <span>1:30</span>
             <span>10:00</span>
          </div>

          <div className="flex-center" style={{ gap: '32px' }}>
             <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
               <SkipBack size={28} />
             </button>
             <button 
               onClick={() => setIsPlaying(!isPlaying)}
               style={{ 
                 width: '64px', height: '64px', borderRadius: '50%', 
                 backgroundColor: 'var(--primary-teal)', color: 'white', 
                 border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
                 cursor: 'pointer', boxShadow: '0 4px 12px rgba(77, 181, 181, 0.4)'
               }}
             >
               {isPlaying ? <Pause size={32} /> : <Play size={32} style={{ marginLeft: '4px' }} />}
             </button>
             <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
               <SkipForward size={28} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audio;
