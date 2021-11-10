import React from 'react';
import styles from './Progressbar.module.css';

function Progressbar(): JSX.Element {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Initializing...</span>
      <progress value="0.5" max="1"></progress>
    </div>
  );
}

export default Progressbar;
