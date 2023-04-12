import React, { useState } from 'react';
import styles from './nav.module.scss';
import NavLinks from './NavLinks';
import { GrMenu, GrClose } from 'react-icons/gr';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleMobileMenu = () => {
    setOpen((open) => !open);
  };

  const closeMobileMenu = () => {
    setOpen(false);
  };

  return (
    <nav>
      <div className={styles.desktop_nav}>
        <NavLinks />
      </div>
      <div className={styles.mobile_nav}>
        <div className={styles.hamburger}>
          {open ? (
            <GrClose className={styles.open_menu} onClick={handleMobileMenu} />
          ) : (
            <GrMenu className={styles.close_menu} onClick={handleMobileMenu} />
          )}
        </div>
        {open ? <NavLinks closeMenu={closeMobileMenu} /> : ''}
      </div>
    </nav>
  );
};

export default Nav;
