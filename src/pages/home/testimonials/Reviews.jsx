import React from 'react';
import styles from './testimonials.module.scss';
import { reviewsData } from './reviewsData';
import { RiStarSFill, RiStarSLine } from 'react-icons/ri';

const Reviews = () => {
  return (
    <>
      {reviewsData.map((item, index) => {
        return (
          <article className={styles.reviews__card} key={item.id}>
            <div className={styles.review_wrapper}>
              <div className={styles.reviews__heading}>
                <h4>{item.name}</h4>
                <div className={styles.reviews__stars}>
                  {[...Array(item.rating)].map((e, i) => (
                    <RiStarSFill key={i} />
                  ))}
                  {item.rating < 5
                    ? [...Array(5 - item.rating)].map((e, i) => (
                        <RiStarSLine key={i} />
                      ))
                    : ''}
                </div>
              </div>
              <div className={styles.reviews__content}>
                <div className={styles.content_wrapper}>
                  <img src={item.image} alt={item.name} />
                  <p>{item.review}</p>
                </div>
              </div>
            </div>
            <div className={styles.reviews__location}>
              <p>{item.location}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Reviews;
