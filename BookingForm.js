import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleDateChange = (e) => {
    setDate(e.target.value);
    if (dispatch) dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Table booked for ${guests} guests on ${date} at ${time}!`);
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form" style={{ display: 'grid', maxWidth: '300px', gap: '20px', margin: '20px auto' }}>
      <h2>Little Lemon Reservation</h2>
      
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} required aria-required="true" />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
        {availableTimes && availableTimes.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" aria-label="On Click" style={{ padding: '10px', background: '#f4ce14', cursor: 'pointer' }} />
    </form>
  );
}

export default BookingForm;