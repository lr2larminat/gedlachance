import './ParsePage.css';
import type { Page } from '../App';

interface ParsePageProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
  file: File | null;
}

export default function ParsePage({ setCurrentPage, file }: ParsePageProps) {
  return (
    <div className="parse-page">
      <h1>Résultat du parsing GEDCOM</h1>
      {file ? (
        <>
          <p>Nom du fichier : {file.name}</p>
          <p>Taille : {(file.size / 1024).toFixed(2)} Ko</p>
        </>
      ) : (
        <>
          <p>⚠️ Aucun fichier GEDCOM fourni !</p>
        </>
      )}
      <button onClick={() => setCurrentPage('import')}>🔙 Retour à l'import</button>
      <button onClick={() => setCurrentPage('home')}>🏠 Retour à l'accueil</button>
    </div>
  );
}
