import React from 'react';
import styles from './footer.module.scss';
import footer_logo from '../../assets/img/footer-logo.png';

const Footer = () => {
  return (
    <footer className={styles.section}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={footer_logo} alt='Little Lemon Footer Logo' />
        </div>
        <div className={styles.navigation}>
          <h3>Navigation</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3>Admin</h3>
          <ul>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div className={styles.socials}>
          <ul>
            <h3>Socials</h3>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Linkedin</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
