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

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.name.toLowerCase().endsWith('.ged')) {
      setFile(droppedFile);
      setError(null);
    } else {
      setFile(null);
      setError('Veuillez importer un fichier GEDCOM valide (.ged)');
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.name.toLowerCase().endsWith('.ged')) {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError('Veuillez importer un fichier GEDCOM valide (.ged)');
    }
  };

  const handleRemoveFile = () => setFile(null);

  return (
    <div className="import-page">
      <button className="close-button" onClick={() => setCurrentPage('home')}>
        Retour
      </button>

      <div className="container">
        <h1>Importer un fichier GEDCOM</h1>

        <div
          className={`dropzone ${isDragging ? 'dragging' : ''} ${file ? 'has-file' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {!file ? (
            <>
              <p>Glissez votre fichier GEDCOM ici ou</p>
              <label>
                <input type="file" accept=".ged" onChange={handleFileSelect} style={{ display: 'none' }} />
                <button>Parcourir les fichiers</button>
              </label>
            </>
          ) : (
            <div className="file-info">
              <p>Fichier chargé : {file.name} ({(file.size / 1024).toFixed(2)} Ko)</p>
              <button onClick={handleRemoveFile}>Supprimer le fichier</button>
            </div>
          )}
        </div>

        {error && <p className="error">{error}</p>}

        {file && (
          <button className="analyze-button" onClick={() => setCurrentPage('parse')}>
            Analyser le fichier
          </button>
        )}
      </div>
    </div>
  );
}
