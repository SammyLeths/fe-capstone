import React from 'react';
import styles from './highlights.module.scss';
import Button from '../../../components/button/Button';
import Specials from './Specials';
import { NavLink } from 'react-router-dom';

const Highlights = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>This weeks specials!</h1>
          <NavLink to='/menu'>
            <Button>Online Menu</Button>
          </NavLink>
        </div>
        <div className={styles.specials}>
          <Specials />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
