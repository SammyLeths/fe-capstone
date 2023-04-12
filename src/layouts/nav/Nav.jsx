import React, { useState } from 'react';
import styles from './nav.module.scss';
import NavLinks from './NavLinks';
import { GrMenu, GrClose } from 'react-icons/gr';
import { motion } from 'framer-motion';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsOpen((isOpen) => !isOpen);
    setOpen((open) => !open);
  };

  return (
    <nav>
      <div className={styles.desktop_nav}>
        <NavLinks />
      </div>
      <motion.div
        className={styles.mobile_nav}
        animate={isOpen ? 'open' : 'close'}
        variants={variants}
      >
        <div className={styles.hamburger}>
          {open ? (
            <GrClose className={styles.open_menu} onClick={handleMobileMenu} />
          ) : (
            <GrMenu className={styles.close_menu} onClick={handleMobileMenu} />
          )}
        </div>
        {open ? <NavLinks /> : ''}
      </motion.div>
    </nav>
  );
};

export default Nav;
