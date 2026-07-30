import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

export const updateTimes = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }
  return state;
};

export const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <div className="App">
      <header style={{ textAlign: 'center', padding: '20px', background: '#495e57', color: 'white' }}>
        <h1>Little Lemon Restaurant</h1>
      </header>
      <main>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      </main>
      <footer style={{ textAlign: 'center', padding: '10px', background: '#333', color: 'white' }}>
        <p>© Little Lemon</p>
      </footer>
    </div>
  );
}

export default App;