import React from 'react';
import Logo from '../../assets/img/Logo.svg';
import Nav from '../nav/Nav';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <img className='logo' src={Logo} alt='logo' />
        <Nav></Nav>
      </div>
    </header>
  );
};

export default Header;
