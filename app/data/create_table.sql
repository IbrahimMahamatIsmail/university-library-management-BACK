BEGIN;

DROP TABLE IF EXISTS "Livre", "Utilisateur", "Emprunt";


CREATE TABLE IF NOT EXISTS "Livre" (
    "ISBN" VARCHAR(17) PRIMARY KEY,
    "Titre" VARCHAR(255) NOT NULL,
    "Auteur" VARCHAR(255) NOT NULL,
    "Editeur" VARCHAR(255) NOT NULL,
    "AnneePublication" INT NOT NULL,
    "Categorie" VARCHAR(100) NOT NULL,
    "NombreCopies" INT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "Utilisateur" (
    "IDUtilisateur" SERIAL PRIMARY KEY,
    "Nom" VARCHAR(100) NOT NULL,
    "Prenom" VARCHAR(100) NOT NULL,
    "Email" VARCHAR(100) NOT NULL,
    "TypeUtilisateur" VARCHAR(50) NOT NULL,
    "DateInscription" DATE NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS "Emprunt" (
    "IDEmprunt" SERIAL PRIMARY KEY,
    "ISBN" VARCHAR(17) NOT NULL,
    "IDUtilisateur" INT NOT NULL,
    "DateEmprunt" DATE NOT NULL,
    "DateRetourPrevue" DATE NOT NULL,
    FOREIGN KEY ("ISBN") REFERENCES "Livre"("ISBN") ON DELETE CASCADE,
    FOREIGN KEY ("IDUtilisateur") REFERENCES "Utilisateur"("IDUtilisateur") ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS "Retour" (
    "IDRetour" SERIAL PRIMARY KEY,
    "IDEmprunt" INT NOT NULL,
    "DateRetourEffective" DATE NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAt" TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY ("IDEmprunt") REFERENCES "Emprunt"("IDEmprunt") ON DELETE CASCADE
);

COMMIT;