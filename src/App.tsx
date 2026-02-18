import React, { useState } from 'react';
import HomePage from './HomePage';
import ImportPage from './import/ImportPage';
import ParsePage from './import/ParsePage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'import' | 'parse'>('home');
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="app">
      {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === 'import' && <ImportPage setCurrentPage={setCurrentPage} file={file} setFile={setFile} />}
      {currentPage === 'parse' && <ParsePage setCurrentPage={setCurrentPage} file={file} />}
    </div>
  );
}

export default App;
