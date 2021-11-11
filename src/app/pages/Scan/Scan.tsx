import React, { useState } from 'react';
import styles from './Scan.module.css';
import ImageInput from '../../components/ImageInput/ImageInput';
import { recognizeText } from '../../utils/ocr';
import Progressbar from '../../components/Progressbar/Progressbar';
import AddDocumentForm from '../../components/AddDocumentForm/AddDocumentForm';

function Scan() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [recognizedText, setRecognizedText] = useState<string | null>(null);
  const [loadingProgress, setLoadingProgress] = useState<number | null>(null);
  const [statusText, setStatusText] = useState<string | null>(null);

  let content;

  if (recognizedText) {
    content = (
      <>
        <p className={styles.recognizedText}>{recognizedText}</p>
        <AddDocumentForm text={recognizedText} />
      </>
    );
  } else if (loadingProgress && statusText) {
    content = (
      <>
        {loadingProgress * 100}%
        <Progressbar progress={loadingProgress} status={statusText} />
      </>
    );
  } else {
    content = (
      <>
        <ImageInput onUpload={setImageUrl} />
        <button
          className={styles.scanButton}
          onClick={() => {
            if (imageUrl) {
              recognizeText(imageUrl, ({ progress, status }) => {
                setLoadingProgress(progress);
                setStatusText(status);
                console.log(status);
              }).then(setRecognizedText);
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
