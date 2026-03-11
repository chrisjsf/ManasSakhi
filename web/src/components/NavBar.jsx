import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Wind, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-content">
        <NavItem to="/home" icon={<Home size={24} />} label="Home" />
        <NavItem to="/breathing" icon={<Wind size={24} />} label="Breathe" />
        <NavItem to="/settings" icon={<Settings size={24} />} label="Settings" />
      </div>
    </nav>
  );
};

const NavItem = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
    >
      {({ isActive }) => (
        <motion.div
           whileTap={{ scale: 0.9 }}
           className="flex-col flex-center"
           style={{ gap: '4px' }}
        >
          <div style={{ color: isActive ? 'var(--primary-teal)' : 'var(--text-secondary)' }}>
            {icon}
          </div>
          <span style={{ 
            fontSize: '12px', 
            fontWeight: isActive ? '700' : '400',
            color: isActive ? 'var(--primary-teal)' : 'var(--text-secondary)' 
          }}>
            {label}
          </span>
        </motion.div>
      )}
    </NavLink>
  );
};

export default NavBar;
