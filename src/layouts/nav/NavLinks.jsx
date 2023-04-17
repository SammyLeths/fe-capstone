import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

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
        <NavLink to='/'>Home</NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ ...transition, delay: 0.1 }}
        onClick={props.closeMenu}
      >
        <NavLink to='/about'>About</NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ ...transition, delay: 0.15 }}
        onClick={props.closeMenu}
      >
        <NavLink to='/menu'>Menu</NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ ...transition, delay: 0.2 }}
        onClick={props.closeMenu}
      >
        <NavLink to='/reservations'>Reservations</NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ ...transition, delay: 0.25 }}
        onClick={props.closeMenu}
      >
        <NavLink to='/order-online'>Order Online</NavLink>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ ...transition, delay: 0.3 }}
        onClick={props.closeMenu}
      >
        <NavLink to='/login'>Login</NavLink>
      </motion.li>
    </motion.ul>
  );
};

export default NavLinks;
