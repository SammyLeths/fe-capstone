import React from 'react';
import styles from './about.module.scss';
import chef_a from '../../../assets/img/chef-a.jpg';
import chef_b from '../../../assets/img/chef-b.jpg';

const About = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <div className={styles.heading}>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <div className={styles.text}>
            <p>
              Little Lemon is a charming neighbourhood bistro that serves simple
              food and classic cocktails in a lively but casual environment. The
              restaurant features a locally-sourced menu with daily specials.{' '}
            </p>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
          </div>
        </div>
        <div className={styles.image}>
          <img className={styles.chef_a} src={chef_b} alt='Chef Mario' />
          <img className={styles.chef_b} src={chef_a} alt='Chef Adrian' />
        </div>
      </div>
    </section>
  );
};

export default About;
