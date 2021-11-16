import React, { useEffect, useState } from 'react';
import Document from '../../components/Document/Document';
import getDocuments from '../../components/Document/getDocuments';
import SearchInput from '../../components/SearchInput/SearchInput';
import styles from './DocumentList.module.css';

function DocumentList(): JSX.Element {
  const [documents, setDocuments] = useState<null | Document[]>(null);
  const [search, setSearch] = useState<null | string>(null);

  useEffect(() => {
    // getDocuments().then(setDocuments);
    async function load() {
      const newDocuments = await getDocuments();
      setDocuments(newDocuments);
    }
    load();
  }, []);

  let content;

  if (!documents) {
    content = <p>No documents</p>;
  } else if (search) {
    const filteredDocuments = documents?.filter((document) =>
      document.title.toLowerCase().includes(search.toLowerCase())
    );
    content = filteredDocuments?.map((document) => (
      <Document
        key={document.key}
        title={document.title}
        text={document.text}
      />
    ));
  } else {
    content = documents?.map((document) => (
      <Document
        key={document.key}
        title={document.title}
        text={document.text}
      />
    ));
  }

  return (
    <div className={styles.container}>
      <SearchInput onSearch={setSearch} />
      {content}
    </div>
  );
}

export default DocumentList;
