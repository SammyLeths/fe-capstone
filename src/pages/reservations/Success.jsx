import React from 'react';
import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import styles from './success.module.scss';
import Button from '../../components/button/Button';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const Success = () => {
  return (
    <>
      <Header />
      <section className={styles.success}>
        <div className={styles.container}>
          <div className={styles.success__card}>
            <IoCheckmarkCircle className={styles.success__icon} />
            <h3>Congratulations!</h3>
            <p>
              Your booking has been confirmed, check your email for a
              confirmation. We'll see you soon!
            </p>
            <NavLink to='/'>
              <Button>Back to Home Page</Button>
            </NavLink>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Success;
