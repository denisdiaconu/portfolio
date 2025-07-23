import { motion } from 'framer-motion';
import React from 'react';

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.div
      initial={{ opacity: 0, x: 50, y: -50 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        &lt;/&gt; Portfolio
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
