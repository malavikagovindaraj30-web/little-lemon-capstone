import { render, screen } from '@testing-library/react';
import App, { initializeTimes, updateTimes } from './App';

test('Renders the BookingForm heading', () => {
  render(<App />);
  const headingElement = screen.getByText("Little Lemon Reservation");
  expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns expected array', () => {
  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
});

test('updateTimes returns updated array', () => {
  const state = ['17:00'];
  const action = { type: 'UPDATE_TIMES', payload: '2026-08-01' };
  const newState = updateTimes(state, action);
  expect(newState.length).toBeGreaterThan(0);
});