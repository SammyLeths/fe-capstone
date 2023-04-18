import React from 'react';
import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import styles from './booking.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const Booking = ({ dispatch }) => {
  const location = useLocation();
  const navigate = new useNavigate();
  const time = location.state.time;

  // const [fullname, setFullname] = useState('');
  // const [phone, setPhone] = useState('');
  // const [request, setRequest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ value: time });
    navigate('/success');
  };

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
            <form className={styles.form_wrapper} onSubmit={handleSubmit}>
              <div className={styles.form_control}>
                <label htmlFor='fullname'>Full name</label>
                <input
                  type='text'
                  id='fullname'
                  className={styles.form_input}
                  //onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div className={styles.form_control}>
                <label htmlFor='phone'>Phone number</label>
                <input
                  type='number'
                  placeholder='+234 70 1234 5678'
                  min='1'
                  max='18'
                  id='phone'
                  className={styles.form_input}
                  //onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className={styles.form_control}>
                <label htmlFor='request'>Additional request</label>
                <input
                  type='text'
                  id='request'
                  className={styles.form_input}
                  //onChange={(e) => setRequest(e.target.value)}
                />
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
