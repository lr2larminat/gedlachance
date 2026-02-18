import { useState } from 'react';
import './ImportPage.css';
import type { Page } from '../App';

interface ImportPageProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

export default function ImportPage({ setCurrentPage, file, setFile }: ImportPageProps) {

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] ?? null;
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="import-page">

      {/* ========== CROIX EN HAUT À DROITE ========== */}
      <button
        className="close-button"
        onClick={() => setCurrentPage('home')}
        title="Retour à l'accueil" >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </svg>
      </button>

      <h1>Importer un fichier GEDCOM</h1>
      <input type="file" accept=".ged" onChange={handleFileChange} />
      {file && (
        <>
          <p>Fichier sélectionné : {file.name} ({(file.size / 1024).toFixed(2)} Ko)</p>
          <button onClick={() => setCurrentPage('parse')}>
            Analyser le fichier
          </button>
        </>
      )}
      <button onClick={() => setCurrentPage('home')}>
        Retour à l'accueil
      </button>
    </div>
  );
}
