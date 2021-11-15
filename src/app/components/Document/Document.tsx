import React from 'react';
import styles from './Document.module.css';

type Document = {
  id: number;
  text: string;
  title: string;
};

function Document({ id, text, title }: Document): JSX.Element {
  return (
    <article className={styles.documentContaier} key={id}>
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
