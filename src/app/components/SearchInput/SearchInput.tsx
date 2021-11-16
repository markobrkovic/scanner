import React, { useEffect, useState } from 'react';
import styles from './SearchInput.module.css';

type OnSearchProps = {
  onSearch: (title: string) => void;
};

function SearchInput({ onSearch }: OnSearchProps): JSX.Element {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(value);
    }, 300);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return (
    <input
      type="text"
      className={styles.searchInput}
      placeholder="Search"
      onChange={(event) => {
        setValue(event.target.value);
      }}
    ></input>
  );
}

export default SearchInput;
