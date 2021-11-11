import React from 'react';
import Progressbar from './Progressbar';

export default {
  component: Progressbar,
  title: 'Components/Progressbar',
};

export const Default = () => (
  <Progressbar progress={0.5} status={'Initializing...'} />
);
