import React, { useState } from 'react';
import styles from './Scan.module.css';
import ImageInput from '../../components/ImageInput';
import Tesseract from 'tesseract.js';

function Scan() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [recognizedText, setRecoginzedText] = useState<string | null>(null);
  const [loadingProgress, setLoadingProgress] = useState<number | null>(null);

  let content;

  if (recognizedText) {
    content = <p className={styles.recognizedText}>{recognizedText}</p>;
  } else if (loadingProgress) {
    content = `${loadingProgress * 100} %`;
    // content = <p>{loadingProgress}</p>;
  } else {
    content = (
      <>
        <ImageInput onUpload={setImageUrl} />
        <button
          className={styles.scanButton}
          onClick={() => {
            if (imageUrl) {
              Tesseract.recognize(imageUrl, 'eng', {
                logger: (m) => {
                  if (m.status === 'recognizing text') {
                    setLoadingProgress(m.progress.toFixed(2));
                  }
                  console.log(m.progress);
                },
              }).then(({ data: { text } }) => {
                setRecoginzedText(text);
              });
            }
          }}
        >
          Scan
        </button>
      </>
    );
  }

  return (
    <div className={styles.container}>
      {content}
      <button className={styles.viewDocuments}>View Documents</button>
    </div>
  );
}

export default Scan;
