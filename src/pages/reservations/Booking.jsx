import React from 'react';
import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import styles from './booking.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Booking = ({ dispatch }) => {
  const location = useLocation();
  const navigate = new useNavigate();

  const formik = useFormik({
    initialValues: {
      fullname: '',
      phone: '',
      request: '',
    },

    validationSchema: Yup.object({
      fullname: Yup.string().required('Please enter your fullname'),
      phone: Yup.string().required('Please enter your phone number'),
      request: Yup.string().required('Please enter your additional request'),
    }),

    onSubmit: (values) => {
      navigate('/success', {
        state: {
          ...location.state,
          fullname: values.fullname,
          phone: values.phone,
          request: values.request,
        },
      });
    },
  });

  return (
    <>
      <Header />
      <section className={styles.booking}>
        <div className={styles.container}>
          <div className={styles.booking__cta}>
            <h2>Complete your reservation booking.</h2>
            <p>Confirm you booking details and reserve</p>
          </div>
          <div className={styles.booking__form}>
            <h3>Booking Details</h3>
            <div className={styles.details}>
              <div className={styles.details__wrapper}>
                <p>Time</p>
                <h4>{location.state.time}</h4>
              </div>
              <div className={styles.details__wrapper}>
                <p>Date</p>
                <h4>{location.state.date}</h4>
              </div>
              <div className={styles.details__wrapper}>
                <p>Guests</p>
                <h4>{location.state.guests}</h4>
              </div>
              <div className={styles.details__wrapper}>
                <p>Occasion</p>
                <h4>{location.state.occasion}</h4>
              </div>
            </div>
            <form
              className={styles.form_wrapper}
              onSubmit={formik.handleSubmit}
            >
              <div className={styles.form_control}>
                <label htmlFor='fullname'>Full name</label>
                <input
                  required
                  type='text'
                  name='fullname'
                  id='fullname'
                  className={styles.form_input}
                  value={formik.values.fullname}
                  {...formik.getFieldProps('fullname')}
                />
                {formik.errors.fullname && formik.touched.fullname && (
                  <p>{formik.errors.fullname}</p>
                )}
              </div>
              <div className={styles.form_control}>
                <label htmlFor='phone'>Phone number</label>
                <input
                  required
                  type='number'
                  placeholder='+234 70 1234 5678'
                  name='phone'
                  id='phone'
                  className={styles.form_input}
                  value={formik.values.phone}
                  {...formik.getFieldProps('phone')}
                />
                {formik.errors.phone && formik.touched.phone && (
                  <p>{formik.errors.phone}</p>
                )}
              </div>
              <div className={styles.form_control}>
                <label htmlFor='request'>Additional request</label>
                <textarea
                  required
                  name='request'
                  id='request'
                  className={styles.form_input}
                  value={formik.values.request}
                  {...formik.getFieldProps('request')}
                />
                {formik.errors.request && formik.touched.request && (
                  <p>{formik.errors.request}</p>
                )}
              </div>
              <div className={styles.form_control}>
                <input
                  type='submit'
                  value='Confirm Booking'
                  className={styles.form_input}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Booking;
