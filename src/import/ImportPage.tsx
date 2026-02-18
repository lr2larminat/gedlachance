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
  const [error, setError] = useState<string | null>(null);

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
    if (selectedFile) {
      // Vérifie l'extension .ged (insensible à la casse)
      if (!selectedFile.name.toLowerCase().endsWith('.ged')) {
        setError("⚠️ Veuillez sélectionner un fichier .ged valide");
        setFile(null); // on ne garde pas le fichier invalide
      } else {
        setError(null);  // pas d'erreur
        setFile(selectedFile);
      }
    }
  };
  
  return (
    <div className="import-page">

      {/* Croix haut droite */}
      <button className="close-button" onClick={() => 
        {
          setFile(null);
          setCurrentPage('home');
        }}>
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
          <p>
            <b>Fichier sélectionné :<br />
            {file.name}</b> <br /><br />
            Vous pouvez importer un autre fichier en le glissant ou en le sélectionnant...
          </p>
        ) : (
          <div className="dropzone-default">
          {/* Icône import */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="#0000CD"
            viewBox="0 0 24 24"
          >
            <path d="M5 20h14v-2H5v2zm7-18l-7 7h4v6h6v-6h4l-7-7z"/>
          </svg>
          <p>
          <br />Glissez un fichier ici, <br />
            ou cliquez ici pour en sélectionner un
          </p>
        </div>
        )}
        <input
          id="fileInput"
          type="file"
          accept=".ged"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>

      {error && <p className="error-message">{error}</p>}

      {/* Bouton analyser si fichier chargé */}
      {file && (
        <button className="analyze-button" onClick={() => setCurrentPage('parse')}>
          Importer le fichier
        </button>
      )}
    </div>
  );
}
