import { useState } from 'react';
import HomePage from './HomePage';
import ImportPage from './import/ImportPage';
import ParsePage from './import/ParsePage';

export type Page = 'home' | 'import' | 'parse';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [file, setFile] = useState<File | null>(null);

  return (
    <>
      {currentPage === 'home' && (
        <HomePage setCurrentPage={setCurrentPage} />
      )}
      {currentPage === 'import' && (
        <ImportPage
          setCurrentPage={setCurrentPage}
          file={file}
          setFile={setFile}
        />
      )}
      {currentPage === 'parse' && (
        <ParsePage
          setCurrentPage={setCurrentPage}
          file={file}
        />
      )}
    </>
  );
}

export default App;