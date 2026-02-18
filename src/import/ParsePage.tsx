import { Page } from '../App';

interface ParsePageProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
  file: File | null;
}

export default function ParsePage({ setCurrentPage, file }: ParsePageProps) {
  return (
    <div>
      <h1>Résultat du parsing GEDCOM</h1>
      {file ? (
        <>
          <p>Nom du fichier : {file.name}</p>
          <p>Taille du fichier : {(file.size / 1024).toFixed(2)} Ko</p>
        </>
      ) : (
        <p>⚠️ Aucun fichier fourni !</p>
      )}

      <button onClick={() => setCurrentPage('import')}>🔙 Retour à l'import</button>
    </div>
  );
}
