import React from 'react';
import styles from './Document.module.css';

type Document = {
  key: number;
  text: string;
  title: string;
};

function Document({ key, text, title }: Document): JSX.Element {
  return (
    <article className={styles.documentContaier} key={key}>
      <button
        className={styles.documentName}
        onClick={() => console.log('MRS')}
      >
        {title}
      </button>
      <p>{text ? `${text.substring(0, 10)}...` : ''}</p>
    </article>
  );
}

export default Document;
