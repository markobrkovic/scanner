import React, { ChangeEvent, useState } from 'react';
import styles from './Scan.module.css';
import ImageInput from '../../components/ImageInput';

function Scan() {
  const [imageUrl, setImageUrl] = useState('');
  return (
    <div className={styles.container}>
      <ImageInput onUpload={setImageUrl} />
    </div>
  );
}

export default Scan;
