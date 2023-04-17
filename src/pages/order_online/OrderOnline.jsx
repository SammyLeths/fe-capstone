import React from 'react';
import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import styles from './order_online.module.scss';

const OrderOnline = () => {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <div className={styles.container}>
          <h1>Order Online</h1>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OrderOnline;
