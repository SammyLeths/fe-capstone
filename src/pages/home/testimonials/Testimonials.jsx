import React from 'react';
import styles from './testimonials.module.scss';
import Reviews from './Reviews';

const Testimonials = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Testimonials</h1>
        </div>
        <div className={styles.reviews}>
          <Reviews />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
