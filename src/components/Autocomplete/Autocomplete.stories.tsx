import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Autocomplete from './Autocomplete';
import  { AutocompleteProps } from './Autocomplete.test'  
export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
} as Meta;

const Template: StoryFn<AutocompleteProps> = (args: AutocompleteProps) => <Autocomplete {...args} />;

export const Default = Template.bind({});
Default.args = {
  suggestions: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry','Fig','Guava','Hazelnuts','Imbu','Jackfruit','Kiwi','Lemon','Mango','Neem','Olive' ]
};

export const Empty = Template.bind({});
Empty.args = {
  suggestions: [],
};

export const CustomSuggestions = Template.bind({});
CustomSuggestions.args = {
  suggestions: ['JavaScript', 'TypeScript', 'React', 'Angular', 'Vue'],
};
