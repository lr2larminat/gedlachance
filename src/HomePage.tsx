import React from 'react';
import './HomePage.css';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

function HomePage({ setCurrentPage }: HomePageProps) {
  return (
    <div className="home-page">
      <h1>Accueil</h1>
      <button onClick={() => setCurrentPage('import')}>Importer un fichier GEDCOM</button>
    </div>
  );
}

export default HomePage;
