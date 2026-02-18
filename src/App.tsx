import { useState, useEffect } from 'react';
import { Individu, Famille } from './types';
import { loadIndividuals, loadFamilies, saveData } from './storage';
import HomePage from './HomePage';
import ImportPage from './import/ImportPage';
import ParsePage from './import/ParsePage';

export type Page = 'home' | 'import' | 'parse';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [file, setFile] = useState<File | null>(null);
  const [individuals, setIndividuals] = useState<Individu[]>([]);
  const [families, setFamilies] = useState<Famille[]>([]);
  
  // Sauvegarde automatique à chaque changement
  useEffect(() => {
    saveData(individuals, families);
  }, [individuals, families]);

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
          individuals={individuals}
          setIndividuals={setIndividuals}
          families={families}
          setFamilies={setFamilies}        />
      )}
    </>
  );
}

export default App;