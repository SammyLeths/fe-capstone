import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import styles from './reservations.module.scss';

const Reservations = ({ initialTimes, dispatch }) => {
  const navigate = new useNavigate();

  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      guests: '',
      occasion: '',
    },

    validationSchema: Yup.object({
      date: Yup.date().required('Please select a reservation date'),
      time: Yup.string().required('Please select a reservation time'),
      guests: Yup.number().required('Please enter number of guests'),
      occasion: Yup.string().required('Please select an occasion'),
    }),

    onSubmit: (values) => {
      navigate('/booking', {
        state: {
          date: values.date,
          time: values.time,
          guests: values.guests,
          occasion: values.occasion,
        },
      });
    },
  });

  return (
    <>
      <Header />
      {/* <section className={styles.page_header}>
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <h1>Reserve a Table</h1>
        </div>
      </section> */}
      <section className={styles.reserve}>
        <div className={styles.container}>
          <div className={styles.reserve__cta}>
            <h2>Experience the perfect balance of tradition and luxury.</h2>
            <p>
              At Little Lemon, we take great pride in providing our customers
              with the greatest luxurious experience with a touch of tradition.
            </p>
            <p>Book a table with us to share in this experience.</p>
          </div>
          <div className={styles.reserve__form}>
            <p>
              Please fill in and submit form to book your reservation at Little
              Lemon.
            </p>
            <form
              className={styles.form_wrapper}
              onSubmit={formik.handleSubmit}
            >
              <div className={styles.form_control}>
                <label htmlFor='date'>Choose Date</label>
                <input
                  required
                  name='date'
                  type='date'
                  id='date'
                  className={styles.form_input}
                  value={formik.values.date}
                  {...formik.getFieldProps('date')}
                />
                {formik.errors.date && formik.touched.date && (
                  <p>{formik.errors.date}</p>
                )}
              </div>
              <div className={styles.form_control}>
                <label htmlFor='time'>Choose time</label>
                <select
                  required
                  name='time'
                  id='time'
                  className={styles.form_input}
                  value={formik.values.time}
                  {...formik.getFieldProps('time')}
                >
                  <option value=''>--:--</option>
                  {initialTimes.times.map((time) => (
                    <option key={time}>{time}</option>
                  ))}
                </select>
                {formik.errors.time && formik.touched.time && (
                  <p>{formik.errors.time}</p>
                )}
              </div>
              <div className={styles.form_control}>
                <label htmlFor='guests'>Number of guests</label>
                <input
                  required
                  name='guests'
                  id='guests'
                  type='number'
                  placeholder='Enter number of guests'
                  min='1'
                  max='10'
                  className={styles.form_input}
                  //onChange={(e) => setGuests(e.target.value)}
                  value={formik.values.guests}
                  {...formik.getFieldProps('guests')}
                />
                {formik.errors.guests && formik.touched.guests && (
                  <p>{formik.errors.guests}</p>
                )}
              </div>
              <div className={styles.form_control}>
                <label htmlFor='occasion'>Occasion</label>
                <select
                  required
                  name='occasion'
                  id='occasion'
                  className={styles.form_input}
                  //onChange={(e) => setOccasion(e.target.value)}
                  value={formik.values.occasion}
                  {...formik.getFieldProps('occasion')}
                >
                  <option value=''>-- Select Occasion --</option>
                  <option value='birthday'>Birthday</option>
                  <option value='engagement'>Engagment</option>
                  <option value='anniversary'>Anniversary</option>
                  <option value='graduation'>Graduation</option>
                  <option value='other'>Other</option>
                </select>
                {formik.errors.occasion && formik.touched.occasion && (
                  <p>{formik.errors.occasion}</p>
                )}
              </div>
              <div className={styles.form_control}>
                <input
                  type='submit'
                  value='Make Your Reservation'
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

export default Reservations;
