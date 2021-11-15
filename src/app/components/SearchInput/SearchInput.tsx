import React from 'react';
import styles from './SearchInput.module.css';

type OnSearchProps = {
  onSearch: (title: string) => void;
};

function SearchInput({ onSearch }: OnSearchProps): JSX.Element {
  return (
    <input
      type="text"
      className={styles.searchInput}
      placeholder="Search"
      onChange={(event) => {
        event.preventDefault();
        onSearch(event.target.value);
      }}
    ></input>
  );
}

export default SearchInput;
