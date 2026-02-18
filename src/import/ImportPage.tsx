import { useState } from 'react';
import './ImportPage.css';
import type { Page } from '../App';

interface ImportPageProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

export default function ImportPage({ setCurrentPage, file, setFile }: ImportPageProps) {

  const [isDragging, setIsDragging] = useState(false);

  // Gestion du drag & drop
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) setFile(droppedFile);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] ?? null;
    if (selectedFile) setFile(selectedFile);
  };

  return (
    <div className="import-page">

      {/* Croix haut droite */}
      <button className="close-button" onClick={() => setCurrentPage('home')}>
        <svg
          className="close-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0000CD"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="6" y1="18" x2="18" y2="6" />
        </svg>
      </button>

      {/* Titre */}
      <h1 className="import-title">Import de fichier GEDCOM</h1>

      {/* Zone carrée drag & drop */}
      <div
        className={`file-dropzone ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('fileInput')?.click()}
      >
        {file ? (
          <p>{file.name} ({(file.size / 1024).toFixed(2)} Ko)</p>
        ) : (
          <p>Glissez un fichier ici ou cliquez pour sélectionner</p>
        )}
        <input
          id="fileInput"
          type="file"
          accept=".ged"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>

      {/* Bouton analyser si fichier chargé */}
      {file && (
        <button className="analyze-button" onClick={() => setCurrentPage('parse')}>
          Analyser le fichier
        </button>
      )}
    </div>
  );
}
