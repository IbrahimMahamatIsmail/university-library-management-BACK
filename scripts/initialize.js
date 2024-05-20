const { sequelize, connectDB } = require('../app/database'); 
const { Livre, Utilisateur, Emprunt, Retour } = require('../app/models/index');

const initializeDatabase = async () => {
    try {
        await connectDB();
        console.log('Database connected successfully.');

        await sequelize.sync({ force: true });
        console.log('Database synchronized successfully.');

        await Livre.bulkCreate([
            { ISBN: '978-3-16-148410-0', Titre: 'Introduction to Algorithms', Auteur: 'Thomas H. Cormen', Editeur: 'MIT Press', AnneePublication: 2009, Categorie: 'Informatique', NombreCopies: 10 },
            { ISBN: '978-1-958391-07-5', Titre: '7 jours pour sortir de sa merde', Auteur: 'Bertrand Millet', Editeur: '1EntrepreneurFrançais', AnneePublication: 2022, Categorie: 'Social', NombreCopies: 14 },
            { ISBN: '978-2080705808', Titre: 'A la recherche du temps perdu', Auteur: 'Marcel Proust', Editeur: 'Flammarion', AnneePublication: 1993, Categorie: 'Fiction/Classics', NombreCopies: 12 },
            { ISBN: '978-2253161332', Titre: 'Les misérables', Auteur: 'Victor Hugo', Editeur: 'Le Livre de Poche', AnneePublication: 1862, Categorie: 'Fiction/Classics', NombreCopies: 34 },
            { ISBN: '978-2070360024', Titre: 'L\'Étranger', Auteur: 'Albert Camus', Editeur: 'Gallimard', AnneePublication: 1942, Categorie: 'Fiction/Classics', NombreCopies: 54 },
            { ISBN: '978-0521679718', Titre: 'Introduction to the Theory of Computation', Auteur: 'Michael Sipser', Editeur: 'Cengage Learning', AnneePublication: 2005, Categorie: 'Mathématiques/Informatique Théorique', NombreCopies: 22 },
            { ISBN: '978-0131103627', Titre: 'The C Programming Language', Auteur: 'Brian W. Kernighan', Editeur: 'Prentice Hall', AnneePublication: 1988, Categorie: 'Informatique/Programmation', NombreCopies: 55 },
            { ISBN: '978-0132129480', Titre: 'Artificial Intelligence: A Modern Approach', Auteur: 'Peter Norvig', Editeur: 'Pearson', AnneePublication: 2009, Categorie: 'Informatique/Intelligence Artificielle', NombreCopies: 21 }
        ]);

        await Utilisateur.bulkCreate([
            { Nom: 'Dupont', Prenom: 'Jean', Email: 'jean.dupont@example.com', TypeUtilisateur: 'Étudiant', DateInscription: '2024-03-16' },
            { Nom: 'Ibrahim', Prenom: 'Mahamat', Email: 'mahamat.ibrahim@mail.com', TypeUtilisateur: 'Étudiant', DateInscription: '2024-03-15' }
        ]);

        await Emprunt.bulkCreate([
            { ISBN: '978-3-16-148410-0', IDUtilisateur: 1, DateEmprunt: '2024-03-15', DateRetourPrevue: '2024-03-25' },
            { ISBN: '978-0131103627', IDUtilisateur: 2, DateEmprunt: '2024-03-16', DateRetourPrevue: '2024-03-26' }
        ]);

        await Retour.bulkCreate([
            { IDEmprunt: 1, DateRetourEffective: '2024-03-25' },
            { IDEmprunt: 2, DateRetourEffective: '2024-03-26' }
        ]);

        console.log('Database initialized successfully.');
    } catch (err) {
        console.error('Failed to initialize the database:', err);
    } finally {
        await sequelize.close();
    }
};

initializeDatabase();
