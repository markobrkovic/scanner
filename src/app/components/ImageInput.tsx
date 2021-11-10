import React, { ChangeEvent, useState } from 'react';
import styles from './ImageInput.module.css';

type OnUploadProps = {
  onUpload: (url: string) => void;
};

function ImageInput({ onUpload }: OnUploadProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    const newImageURL = URL.createObjectURL(file);
    setImageUrl(newImageURL);
    onUpload(newImageURL);
  };

  return (
    <div className={styles.container}>
      {imageUrl && <img src={imageUrl} />}
      <div className={styles.scanButton}>
        <span className={styles.uploadText}>Scan</span>
      </div>
      <label>
        <input
          className={styles.inputFile}
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
        <div className={styles.uploadButton}>
          <span className={styles.uploadText}>Upload</span>
        </div>
      </label>
      OR
      <div className={styles.viewDocuments}>
        <span className={styles.uploadText}>View Documents</span>
      </div>
    </div>
  );
}

export default ImageInput;
