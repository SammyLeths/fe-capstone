import React from 'react';
import styles from './hero.module.scss';
import Button from '../../../components/button/Button';

const Hero = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.hero_content}>
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button>Reserve a Table</Button>
        </div>
        <div className={styles.hero_img_wrapper}>
          <div className={styles.hero_img}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
