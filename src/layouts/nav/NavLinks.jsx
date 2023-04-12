import React from 'react';
import { motion } from 'framer-motion';

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -30 };
  const animateTo = { opacity: 1, y: 0 };
  const transition = { type: 'spring', stiffness: 300 };

  return (
    <motion.ul
      initial={animateFrom}
      animate={animateTo}
      transition={{ ...transition, delay: 0.05 }}
    >
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ ...transition, delay: 0.05 }}
        onClick={props.closeMenu}
      >
        <a href='#home'>Home</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ ...transition, delay: 0.1 }}
        onClick={props.closeMenu}
      >
        <a href='#about'>About</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ ...transition, delay: 0.15 }}
        onClick={props.closeMenu}
      >
        <a href='#menu'>Menu</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ ...transition, delay: 0.2 }}
        onClick={props.closeMenu}
      >
        <a href='#reservations'>Reservations</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ ...transition, delay: 0.25 }}
        onClick={props.closeMenu}
      >
        <a href='#order-online'>Order Online</a>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ ...transition, delay: 0.3 }}
        onClick={props.closeMenu}
      >
        <a href='#login'>Login</a>
      </motion.li>
    </motion.ul>
  );
};

export default NavLinks;
