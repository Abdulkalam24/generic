import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RadioButton from './RadioButton';

test('renders RadioButton component', () => {
  render(<RadioButton id="radio1" name="example" value="option1" label="Option 1" onChange={() => {}} />);
  
  const radioInput = screen.getByLabelText('Option 1');
  expect(radioInput).toBeInTheDocument();
  expect(radioInput).toHaveAttribute('type', 'radio');
});

test('checks the radio button when checked prop is true', () => {
  render(<RadioButton id="radio1" name="example" value="option1" checked={true} label="Option 1" onChange={() => {}} />);
  
  const radioInput = screen.getByLabelText('Option 1');
  expect(radioInput).toBeChecked();
});

test('calls onChange function when clicked', () => {
  const handleChange = jest.fn();
  render(<RadioButton id="radio1" name="example" value="option1" label="Option 1" onChange={handleChange} />);
  
  const radioInput = screen.getByLabelText('Option 1');
  fireEvent.click(radioInput);
  
  expect(handleChange).toHaveBeenCalledTimes(1);
});
