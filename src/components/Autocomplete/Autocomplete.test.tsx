import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Autocomplete from './Autocomplete';

describe('Autocomplete Component', () => {
  const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  it('renders without crashing', () => {
    render(<Autocomplete suggestions={suggestions} />);
  });

  it('filters suggestions based on input', () => {
    const { getByRole, getByText } = render(<Autocomplete suggestions={suggestions} />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'a' } });
    expect(getByText('Apple')).toBeInTheDocument();
    expect(getByText('Banana')).toBeInTheDocument();
  });

  it('displays no suggestions message when no matches found', () => {
    const { getByRole, getByText } = render(<Autocomplete suggestions={suggestions} />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'z' } });
    expect(getByText('No suggestions available')).toBeInTheDocument();
  });

  it('selects a suggestion on click', () => {
    const { getByRole, getByText } = render(<Autocomplete suggestions={suggestions} />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'a' } });
    const suggestion = getByText('Apple');
    fireEvent.click(suggestion);
    expect(input).toHaveValue('Apple');
  });
});
