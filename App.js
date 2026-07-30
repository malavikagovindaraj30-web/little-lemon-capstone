import React from 'react';
import BookingForm from './BookingForm';

function App() {
  return (
    <div className="App">
      <header style={{ textAlign: 'center', padding: '20px', background: '#495e57', color: 'white' }}>
        <h1>Little Lemon Restaurant</h1>
      </header>
      <main>
        <BookingForm />
      </main>
    </div>
  );
}

export default App;