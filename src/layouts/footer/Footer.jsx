import React from 'react';
import styles from './footer.module.scss';
import footer_logo from '../../assets/img/footer-logo.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.section}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to='/'>
            <img src={footer_logo} alt='Little Lemon Footer Logo' />
          </NavLink>
        </div>
        <div className={styles.navigation}>
          <h3>Navigation</h3>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='/menu'>Menu</NavLink>
            </li>
            <li>
              <NavLink to='/reservations'>Reservations</NavLink>
            </li>
            <li>
              <NavLink to='/order-online'>Order Online</NavLink>
            </li>
            <li>
              <NavLink to='/login'>Login</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3>Admin</h3>
          <ul>
            <li>
              <a href='tel:01234567890'>Phone Number</a>
            </li>
            <li>
              <a href='mailto:hello@littlelemon.com'>Email</a>
            </li>
          </ul>
        </div>
        <div className={styles.socials}>
          <ul>
            <h3>Socials</h3>
            <li>
              <a
                href='https://www.facebook.com'
                target='_blank'
                rel='noreferrer'
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com'
                target='_blank'
                rel='noreferrer'
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com'
                target='_blank'
                rel='noreferrer'
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href='https://www.twitter.com'
                target='_blank'
                rel='noreferrer'
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
