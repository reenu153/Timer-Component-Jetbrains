import React from 'react';
import Timer from './Timer'; // Adjust the path according to your project structure

export default {
  title: 'Components/Timer',
  component: Timer,
  parameters:{
    backgrounds: {
      // 👇 Set default background value for all component stories
      default: 'dark',
    },
},
  argTypes: {
    timeEnded: { control: 'boolean' },
  },
};

// Default Timer story
const Template = (args) => <Timer {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'My Timer',
  elapsedTime: { minutes: 30, seconds: 30 },
  timeRemaining: { minutes: 29, seconds: 29 },
  progressPercentage: 50, // Example: 50% progress
  timeEnded: false,
};

// Timer Ended story
export const Ended = Template.bind({});
Ended.args = {
  title: 'My Timer',
  elapsedTime: { minutes: 59, seconds: 59 },
  timeRemaining: { minutes: 0, seconds: 0 },
  progressPercentage: 100, // Example: 100% progress when ended
  timeEnded: true,
};
