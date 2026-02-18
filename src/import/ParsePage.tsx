import type { Page } from '../App';
import './ParsePage.css';

interface ParsePageProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>; 
}

export default function ParsePage({ setCurrentPage, file, setFile }: ParsePageProps) {
  return (
    <div className="parse-page">
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

      {/* TITRE */}
      <h1 className="page-title">Import de fichier GEDCOM</h1>

      {/* AFFICHAGE DU FICHIER */}
      {file ? (
        <div className="file-info">
          <p><b>Nom du fichier : {file.name}</b></p>
          <p>Taille : {(file.size / 1024).toFixed(2)} Ko</p>
        </div>
      ) : (
        <p>Aucun fichier sélectionné.</p>
      )}
    </div>
  );
}
