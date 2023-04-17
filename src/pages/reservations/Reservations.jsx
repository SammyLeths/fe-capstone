import React from 'react';
import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import styles from './reservations.module.scss';

const Reservations = () => {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.page_header}>
            <h1>Reservations</h1>
          </div>
          <div className={styles.reserve}>Reserve</div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Reservations;
