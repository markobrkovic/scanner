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

  alert(search);

  // let content;

  // if(!documents) {
  //   content = <p>No documents</p>
  // } else if(documents && search) {
  //   document = documents.filter(() => document.title === search ( <Document
  //     id={document.id}
  //     title={document.title}
  //     text={document.text}
  //   />))
  //   content =
  // }

  return (
    <div className={styles.container}>
      <SearchInput onSearch={setSearch} />
      {documents?.map((document) => (
        <Document
          id={document.id}
          title={document.title}
          text={document.text}
        />
      ))}
    </div>
  );
}

export default DocumentList;
