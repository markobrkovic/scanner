import React, { useEffect, useState } from 'react';
import styles from './DocumentList.module.css';
import getDocuments from './getDocuments';

type Document = {
  id: number;
  text: string;
  title: string;
};

function DocumentList(): JSX.Element {
  const [documents, setDocuments] = useState<null | Document[]>(null);
  // async function handleLoad() {
  //   const documents = await getDocuments();
  //   const listDocuments = documents
  //     .slice(0, 5)
  //     .map((document: DocumentListProps) => {
  //       return document;
  //     });
  //   console.log(listDocuments);
  //   console.log({ title, text });
  //   return { title, text };
  // }
  console.log(documents);
  useEffect(() => {
    // getDocuments().then(setDocuments);
    async function load() {
      const newDocuments = await getDocuments();
      setDocuments(newDocuments);
    }
    load();
  }, []);

  return (
    <section>
      {documents &&
        documents.slice(0, 5).map((document) => (
          <article className={styles.documentContaier} key={document.id}>
            <h2 className={styles.documentName}>{document.title}</h2>
            <p>{document.text}</p>
          </article>
        ))}
    </section>
  );
}

export default DocumentList;
