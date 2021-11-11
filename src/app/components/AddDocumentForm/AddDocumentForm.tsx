import React, { FormEvent, useState } from 'react';
import styles from './AddDocumentForm.module.css';
import usePostDocument from './postDocument';

type AddDocumentFormProps = {
  text: string;
};

function AddDocumentForm({ text }: AddDocumentFormProps): JSX.Element {
  const [title, setTitle] = useState('');
  const { isLoading, postDocument } = usePostDocument();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const document = {
      title,
      text,
    };
    await postDocument(document);
    setTitle('');
  }

  return (
    <form className={styles.documentForm} onSubmit={handleSubmit}>
      <input
        className={styles.nameInput}
        type="text"
        id="docName"
        placeholder="Enter name"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className={styles.documentSave}
        type="submit"
        value="Save"
        disabled={!title || isLoading}
      />
    </form>
  );
}

export default AddDocumentForm;
