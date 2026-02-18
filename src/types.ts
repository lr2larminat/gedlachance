// ---------------- INDIVIDU ----------------
export interface Individu {
  id: string;                       // identifiant unique obligatoire
  nom?: string;                     // nom de famille facultatif
  prenom?: string;                  // prénom facultatif
  sexe?: string;                    // M/F ou autre, facultatif
  dateNaissance?: string;           // facultatif
  dateDeces?: string;               // facultatif
  famillesConjointIds: string[];    // obligatoire mais peut être vide
  familleEnfantId?: string;         // facultatif
  occupation?: string;              // facultatif
}

// ---------------- FAMILLE ----------------
export interface Famille {
  id: string;                        // identifiant unique obligatoire
  pereId?: string;                   // facultatif
  mereId?: string;                   // facultatif
  enfantsIds: string[];              // obligatoire mais peut être vide
  dateMariage?: string;              // facultatif
}
