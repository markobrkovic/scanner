import React from 'react';
import Document from './Document';

export default {
  component: Document,
  title: 'Components/Document',
};

export const Default = () => (
  <Document id={1} title={'Dentist'} text={'U owe me 200 bucks'} />
);
