import { useState } from 'react';
import { Page } from '../App';

interface ImportPageProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

export default function ImportPage({ setCurrentPage, file, setFile }: ImportPageProps) {
  const [localFile, setLocalFile] = useState<File | null>(file);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setLocalFile(selectedFile);
      setFile(selectedFile);
    }
  };

  return (
    <div>
      <h1>Importer un fichier GEDCOM</h1>

      <input type="file" accept=".ged" onChange={handleFileSelect} />

      {localFile && (
        <div>
          <p>Fichier prêt : {localFile.name}</p>
          <p>Taille : {(localFile.size / 1024).toFixed(2)} Ko</p>
          <button onClick={() => setCurrentPage('parse')}>Analyser le fichier</button>
        </div>
      )}

      <button onClick={() => setCurrentPage('home')}>Retour à l'accueil</button>
    </div>
  );
}
