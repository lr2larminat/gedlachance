import type { Individu, Famille } from './types';

const INDIVIDUALS_KEY = 'gedlachance_individuals';
const FAMILIES_KEY = 'gedlachance_families';

/**
 * Sauvegarde les individus et familles dans localStorage
 */
export function saveData(individuals: Individu[], families: Famille[]) {
  try {
    localStorage.setItem(INDIVIDUALS_KEY, JSON.stringify(individuals));
    localStorage.setItem(FAMILIES_KEY, JSON.stringify(families));
  } catch (e) {
    console.error('Erreur lors de la sauvegarde dans localStorage', e);
  }
}

/**
 * Charge les individus depuis localStorage
 */
export function loadIndividuals(): Individu[] {
  try {
    const json = localStorage.getItem(INDIVIDUALS_KEY);
    return json ? JSON.parse(json) : [];
  } catch (e) {
    console.error('Erreur lors du chargement des individus', e);
    return [];
  }
}

/**
 * Charge les familles depuis localStorage
 */
export function loadFamilies(): Famille[] {
  try {
    const json = localStorage.getItem(FAMILIES_KEY);
    return json ? JSON.parse(json) : [];
  } catch (e) {
    console.error('Erreur lors du chargement des familles', e);
    return [];
  }
}

/**
 * Réinitialise les données
 */
export function clearData() {
  localStorage.removeItem(INDIVIDUALS_KEY);
  localStorage.removeItem(FAMILIES_KEY);
}
