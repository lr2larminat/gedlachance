import React from 'react';
import './ParsePage.css';

interface ParsePageProps {
  setCurrentPage: (page: string) => void;
  file: File | null;
}

function ParsePage({ setCurrentPage, file }: ParsePageProps) {
  return (
    <div className="parse-page">
      <h1>Résultat du parsing GEDCOM</h1>
      {file ? (
        <>
          <p>Nom du fichier : {file.name}</p>
          <p>Taille du fichier : {(file.size / 1024).toFixed(2)} Ko</p>
        </>
      ) : (
        <p>⚠️ Aucun fichier sélectionné !</p>
      )}
      <button onClick={() => setCurrentPage('import')}>🔙 Retour à l'import</button>
    </div>
  );
}

export default ParsePage;
