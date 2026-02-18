import { useState } from 'react';
import { Individu, Famille } from './types';
import HomePage from './HomePage';
import ImportPage from './import/ImportPage';
import ParsePage from './import/ParsePage';

export type Page = 'home' | 'import' | 'parse';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [file, setFile] = useState<File | null>(null);
  const [individuals, setIndividuals] = useState<Individu[]>([]);
  const [families, setFamilies] = useState<Famille[]>([]);
  
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
          setFile={setFile}
        />
      )}
    </>
  );
}

export default App;