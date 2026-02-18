import { Page } from './App';

interface HomePageProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
}

export default function HomePage({ setCurrentPage }: HomePageProps) {
  return (
    <div>
      <h1>Accueil</h1>
      <button onClick={() => setCurrentPage('import')}>
        Importer un fichier
      </button>
    </div>
  );
}
