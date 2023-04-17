import React from 'react';
import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import styles from './login.module.scss';

const Login = () => {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <div className={styles.container}>
          <h1>Login</h1>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
