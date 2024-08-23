import React, { useState } from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
};

const Template = (args) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <RadioButton
        {...args}
        checked={args.value === selectedValue}
        onChange={handleChange}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: 'radio1',
  name: 'example',
  value: 'option1',
  label: 'Option 1',
};

export const Checked = Template.bind({});
Checked.args = {
  id: 'radio2',
  name: 'example',
  value: 'option2',
  label: 'Option 2',
};
