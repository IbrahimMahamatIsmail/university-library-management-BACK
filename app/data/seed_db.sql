BEGIN;

INSERT INTO "Livre" ("ISBN", "Titre", "Auteur", "Editeur", "AnneePublication", "Categorie", "NombreCopies") VALUES 
('978-3-16-148410-0', 'Introduction to Algorithms', 'Thomas H. Cormen', 'MIT Press', 2009, 'Informatique', 10),
('978-1-958391-07-5', '7 jours pour sortir de sa merde', 'Bertrand Millet', '1EntrepreneurFrançais', 2022, 'Social', 14),
('978-2080705808', 'A la recheche du temps perdu', 'Marcel Proust', 'Flammarion', 1993, 'Fiction/Classics', 12),
('978-2253161332','Les misérables', 'Victor Hugo', 'Le Livre de Poche', 1862, 'Fiction/Classics', 34),
('978-2070360024','L''Étranger', 'Albert Camus', 'Gallimard', 1942, 'Fiction/Classics', 54),
('978-0521679718', 'Introduction to the Theory of Computation', 'Michael Sipser', 'Cengage Learning', 2005, 'Mathématiques/Informatique Théorique', 22),
('978-0131103627', 'The C Programming Language', 'Brian W. Kernighan', 'Prentice Hall', 1988, ' Informatique/Programmation', 55),
('978-0132129480', 'Artificial Intelligence: A Modern Approach', 'Peter Norvig', 'Pearson', 2009, 'Informatique/Intelligence Artificielle', 21);


INSERT INTO "Utilisateur" ("Nom", "Prenom", "Email", "TypeUtilisateur", "DateInscription") VALUES
('Dupont', 'Jean', 'jean.dupont@example.com', 'Étudiant', '2024-03-16'),
('Ibrahim', 'Mahamat', 'mahamat.ibrahim@mail.com', 'Étudiant', '2024-03-15');


INSERT INTO "Emprunt" ("ISBN", "IDUtilisateur", "DateEmprunt", "DateRetourPrevue") VALUES 
('978-3-16-148410-0', 1, '2024-03-15', '2024-03-25'),
('978-0131103627', 2, '2024-03-16', '2024-03-26');


INSERT INTO "Retour" ("IDEmprunt", "DateRetourEffective") VALUES 
(1, '2024-03-25'),
(2, '2024-03-26');


COMMIT;
