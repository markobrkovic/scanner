import React from 'react';
import AddDocumentForm from './AddDocumentForm';

export default {
  component: AddDocumentForm,
  title: 'Components/AddDocumentForm',
};

export const Default = () => (
  <AddDocumentForm text={'Како сам глуп у пичку материну'} />
);
