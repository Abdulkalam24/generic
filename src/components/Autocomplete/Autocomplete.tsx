
import React, { useState, ChangeEvent, FocusEvent } from 'react';
import './Autocomplete.css';

interface AutocompleteProps {
  suggestions: string[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    const filtered = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInputValue(userInput);
    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setTimeout(() => setShowSuggestions(false), 100);
  };

  return (
    <div className="autocomplete">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onFocus={() => inputValue && setShowSuggestions(true)}
        className="autocomplete-input"
      />
      {showSuggestions && inputValue && (
        <ul className="autocomplete-suggestions">
          {filteredSuggestions.length ? (
            filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="autocomplete-suggestion"
              >
                {suggestion}
              </li>
            ))
          ) : (
            <li className="autocomplete-no-suggestions">
              No suggestions available
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
