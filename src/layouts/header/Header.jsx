import React from 'react';
import Logo from '../../assets/img/Logo.svg';
import Nav from '../nav/Nav';
import styles from './header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <NavLink to='/'>
          <img className='logo' src={Logo} alt='logo' />
        </NavLink>
        <Nav></Nav>
      </div>
    </header>
  );
};

export default Header;
