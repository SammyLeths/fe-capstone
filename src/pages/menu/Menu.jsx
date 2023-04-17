import React from 'react';
import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import styles from './menu.module.scss';

const Menu = () => {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <div className={styles.container}>
          <h1>Menu</h1>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Menu;
