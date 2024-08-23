import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = ({ id, name, value, checked, onChange, label }) => (
  <div className="radio-button">
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={id}>{label}</label>
  </div>
);

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

RadioButton.defaultProps = {
  checked: false,
};

export default RadioButton;
