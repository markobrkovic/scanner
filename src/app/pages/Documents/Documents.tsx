import React from 'react';
import DocumentList from '../../components/DocumentList/DocumentList';
import SearchInput from '../../components/SearchInput/SearchInput';
import styles from './Documents.module.css';

function Documents(): JSX.Element {
  return (
    <div className={styles.container}>
      <SearchInput />
      <DocumentList />
    </div>
  );
}

export default Documents;
