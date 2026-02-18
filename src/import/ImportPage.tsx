import React from 'react';
import './ImportPage.css';

interface ImportPageProps {
  setCurrentPage: (page: string) => void;
  file: File | null;
  setFile: (file: File | null) => void;
}

function ImportPage({ setCurrentPage, file, setFile }: ImportPageProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    setFile(f);
  };

  return (
    <div className="import-page">
      <h1>Importer un fichier GEDCOM</h1>
      <input type="file" onChange={handleFileChange} />
      {file && (
        <div>
          <p>Fichier sélectionné : {file.name}</p>
          <button onClick={() => setCurrentPage('parse')}>Analyser le fichier</button>
        </div>
      )}
      <button onClick={() => setCurrentPage('home')}>Retour à l'accueil</button>
    </div>
  );
}

export default ImportPage;
