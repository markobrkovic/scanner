import React from 'react';
import styles from './SearchInput.module.css';

function SearchInput(): JSX.Element {
  return <input className={styles.searchInput} placeholder="Search"></input>;
}

export default SearchInput;
