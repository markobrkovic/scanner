import React, { useState } from 'react';
import styles from './Scan.module.css';
import ImageInput from '../../components/ImageInput/ImageInput';
import Progressbar from '../../components/Progressbar/Progressbar';
import AddDocumentForm from '../../components/AddDocumentForm/AddDocumentForm';
import useRecognizeText from '../../utils/useRecognizeText';
import ViewDocuments from '../../components/ViewDocuments/ViewDocuments';

function Scan() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { text, progress, recognize } = useRecognizeText();

  let content;

  if (text) {
    content = (
      <>
        <p className={styles.recognizedText}>{text}</p>
        <AddDocumentForm text={text} />
      </>
    );
  } else if (progress) {
    content = (
      <>
        <Progressbar progress={progress.progress} status={progress.status} />
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
              recognize(imageUrl);
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
      <ViewDocuments />
    </div>
  );
}

export default Scan;
