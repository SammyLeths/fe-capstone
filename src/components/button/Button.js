import React from 'react';
import styles from './button.module.scss';

const Button = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};

export default Button;
