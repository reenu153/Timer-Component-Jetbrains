import React from 'react';
import Button from './Button'; 

export default {
  title: 'Components/Button',
  component: Button,
  parameters:{
    backgrounds: {
      // 👇 Set default background value for all component stories
      default: 'dark',
    },
  },
  argTypes: {
    handleClick: { action: 'clicked' },
    isDisabled: { control: 'boolean' },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonTitle: 'Click Me',
  isDisabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  buttonTitle: 'Disabled',
  isDisabled: true,
};


