import { useEffect, useState } from 'react';
import type { Page } from '../App';
import type { Individu, Famille } from '../types';
import './ParsePage.css';

interface ParsePageProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>; 
  individuals: Individu[];
  setIndividuals: React.Dispatch<React.SetStateAction<Individu[]>>;
  families: Famille[];
  setFamilies: React.Dispatch<React.SetStateAction<Famille[]>>;
}

export default function ParsePage({ setCurrentPage, file, setFile,
individuals, setIndividuals, families, setFamilies }: ParsePageProps) {
  const [gedcomText, setGedcomText] = useState<string | null>(null);

  // Lire le fichier GEDCOM
  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setGedcomText(e.target?.result as string);
      };
      reader.readAsText(file);
    } else {
      setGedcomText(null);
    }
  }, [file]);

  // Parser le GEDCOM et stocker individus / familles
  useEffect(() => {
    if (gedcomText) {
      const { individuals: parsedInd, families: parsedFam } = parseGedcom(gedcomText);
      setIndividuals(parsedInd);
      setFamilies(parsedFam);
    }
  }, [gedcomText, setIndividuals, setFamilies]);




  // Parser GEDCOM simplifié
  function parseGedcom(text: string) {
    const individuals: Individu[] = [];
    const families: Famille[] = [];

    const lines = text.split(/\r?\n/);

    let currentIndividu: Partial<Individu> = {};
    let currentFamille: Partial<Famille> = {};

    lines.forEach((line) => {
      if (line.startsWith('0 @I')) {
        if (currentIndividu.id) individuals.push(currentIndividu as Individu);
        currentIndividu = { id: line.match(/@I\d+@/)?.[0] ?? '' };
      } else if (line.startsWith('0 @F')) {
        if (currentFamille.id) families.push(currentFamille as Famille);
        currentFamille = { id: line.match(/@F\d+@/)?.[0] ?? '' };
      } else if (line.startsWith('1 NAME')) {
        currentIndividu.nom = line.replace('1 NAME ', '');
      }
    });
    // Ajouter le dernier individu / famille
    if (currentIndividu.id) individuals.push(currentIndividu as Individu);
    if (currentFamille.id) families.push(currentFamille as Famille);

    return { individuals, families };
  }




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

      {/* INDIVIDUS PARSÉS */}
      {individuals.length > 0 && (
        <div className="parsed-individuals">
          <h2>Individus détectés :</h2>
          <ul>
            {individuals.map((ind) => (
              <li key={ind.id}>{ind.nom || ind.id}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
}
