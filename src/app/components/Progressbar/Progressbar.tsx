import React from 'react';
import styles from './Progressbar.module.css';
import { RecognizeProgress } from '../../utils/ocr';

function Progressbar({ progress, status }: RecognizeProgress): JSX.Element {
  return (
    <aside className={styles.container}>
      <p>{progress * 100}%</p>
      <span className={styles.text}>{status}...</span>
      <progress
        className={styles.progressBar}
        value={progress}
        max="1"
      ></progress>
    </aside>
  );
}

export default Progressbar;
