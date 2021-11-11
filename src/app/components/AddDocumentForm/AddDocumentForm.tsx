import React, { FormEvent, useState } from 'react';
import styles from './AddDocumentForm.module.css';

type AddDocumentFormProps = {
  text: string;
};

function AddDocumentForm({ text }: AddDocumentFormProps): JSX.Element {
  const [title, setTitle] = useState('');

  const document = {
    title,
    text,
  };

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log(text);
    console.log(title);

    fetch('https://json-server.machens.dev/docs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(document),
    });
  }

  return (
    <form className={styles.documentForm} onSubmit={handleSubmit}>
      <input
        className={styles.nameInput}
        type="text"
        id="docName"
        placeholder="Enter name"
        onChange={(event) => setTitle(event.target.value)}
      />
      <input className={styles.documentSave} type="submit" value="Save" />
    </form>
  );
}

export default AddDocumentForm;
