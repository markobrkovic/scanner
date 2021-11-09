import React, { ChangeEvent, useState } from 'react';
import styles from './ImageInput.module.css';

function ImageInput() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    const newImageURL = URL.createObjectURL(file);
    setImageUrl(newImageURL);
  };

  return (
    <>
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
      {imageUrl && <img src={imageUrl} />}
    </>
  );
}

export default ImageInput;
