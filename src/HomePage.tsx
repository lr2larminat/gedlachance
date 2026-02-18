import './HomePage.css';
import type { Page } from './App';
import type { Individu, Famille } from './types';

interface HomePageProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
  individuals: Individu[];
  families: Famille[];
}

export default function HomePage({ 
  setCurrentPage,
  individuals,
  families
}: HomePageProps) {
  return (
    <div className="home-page">
      <h1>Bienvenue sur Ged La Chance</h1>
      <button onClick={() => setCurrentPage('import')}>
        Importer un fichier GEDCOM
      </button>

      {/* Message si des individus ont déjà été importés */}
      {individuals.length > 0 && (
        <p>{individuals.length} individu{individuals.length > 1 ? 's' : ''} déjà importé{individuals.length > 1 ? 's' : ''}</p>
      )}
      
      {/* Optionnel : même chose pour les familles */}
      {families.length > 0 && (
        <p>{families.length} famille{families.length > 1 ? 's' : ''} déjà importée{families.length > 1 ? 's' : ''}</p>
      )}

    </div>
  );
}
