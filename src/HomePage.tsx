import './HomePage.css';

import type { Page } from './App';

interface HomePageProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
}

export default function HomePage({ setCurrentPage }: HomePageProps) {
  return (
    <div className="home-page">
      <h1>Bienvenue sur Ged'LaChance v1 </h1>
      <button onClick={() => setCurrentPage('import')}>
        Importer un fichier GEDCOM
      </button>
    </div>
  );
}
