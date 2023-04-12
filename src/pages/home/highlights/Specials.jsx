import React from 'react';
import { specialsData } from './specialsData';
import styles from './highlights.module.scss';
import { MdDeliveryDining } from 'react-icons/md';

const Specials = () => {
  return (
    <>
      {specialsData.map((item, index) => {
        return (
          <article className={styles.specials__card} key={item.id}>
            <div className={styles.specials__image}>
              <img src={item.image} alt='specials' />
            </div>
            <div className={styles.specials__content}>
              <div className={styles.content_wrapper}>
                <div className={styles.specials__heading}>
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                </div>
                <div className={styles.specials__description}>
                  <p>{item.description}</p>
                </div>
              </div>
              <a href='#home' className={styles.specials__cta}>
                <span>Order a delivery </span>
                <MdDeliveryDining className={styles.delivery_icon} />
              </a>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Specials;
