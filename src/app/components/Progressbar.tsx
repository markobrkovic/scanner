import React from 'react';
import styles from './Progressbar.module.css';
import { RecognizeProgress } from '../utils/ocr';

function Progressbar({ progress, status }: RecognizeProgress): JSX.Element {
  return (
    <aside className={styles.container}>
      <span className={styles.text}>{status}...</span>
      <progress value={progress} max="1"></progress>
    </aside>
  );
}

export default Progressbar;
