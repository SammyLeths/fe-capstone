import React from 'react';
import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import styles from './about_us.module.scss';

const AboutUs = () => {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <div className={styles.container}>
          <h1>About Us</h1>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
