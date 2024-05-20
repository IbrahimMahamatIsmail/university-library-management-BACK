const { Emprunt, Utilisateur, Livre } = require('../models/index');

// Controller pour les emprunts CRUD
const empruntsController = {

    getAllEmprunts : async (req, res) => {
        try {
            const emprunts = await Emprunt.findAll();
            res.status(200).json(emprunts);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    createEmprunt : async (req, res) => {
        try {
            const { ISBN, IDUtilisateur, DateEmprunt, DateRetourPrevue } = req.body;
            
            // Vérifiez que le livre et l'utilisateur existent
            const livre = await Livre.findByPk(ISBN);
            const utilisateur = await Utilisateur.findByPk(IDUtilisateur);
            
            if (!livre) {
                return res.status(400).json({ error: 'Livre non trouvé' });
            }
            
            if (!utilisateur) {
                return res.status(400).json({ error: 'Utilisateur non trouvé' });
            }
            
            const emprunt = await Emprunt.create({ ISBN, IDUtilisateur, DateEmprunt, DateRetourPrevue });
            res.status(201).json(emprunt);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getEmprunt : async (req, res) => {
        try {
            const emprunt = await Emprunt.findByPk(req.params.idEmprunt);
            if (emprunt) {
                res.status(200).json(emprunt);
            } else {
                res.status(404).json({ error: 'Emprunt non trouvé' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    updateEmprunt: async (req, res) => {
        try {
            const idEmprunt = req.params.idEmprunt;
            const { ISBN, IDUtilisateur, DateEmprunt, DateRetourPrevue } = req.body;

            console.log("Request body:", req.body);
            console.log("Request params:", req.params);

            const currentEmprunt = await Emprunt.findByPk(idEmprunt);
            console.log("Current Emprunt before update:", currentEmprunt);

            if (!currentEmprunt) {
                return res.status(404).json({ error: 'Emprunt non trouvé' });
            }

            const utilisateurExists = await Utilisateur.findByPk(IDUtilisateur);
            if (!utilisateurExists) {
                return res.status(400).json({ error: 'Utilisateur non trouvé' });
            }

            const [updated] = await Emprunt.update(
                { ISBN, IDUtilisateur, DateEmprunt, DateRetourPrevue },
                { where: { IDEmprunt: idEmprunt } }
            );

            console.log("Update result:", updated);

            if (updated) {
                const updatedEmprunt = await Emprunt.findByPk(idEmprunt);
                console.log("Updated Emprunt:", updatedEmprunt);

                res.status(200).json(updatedEmprunt);
            } else {
                res.status(404).json({ error: 'Emprunt non trouvé' });
            }
        } catch (error) {
            console.error("Error:", error);
            res.status(400).json({ error: error.message });
        }
    },

    deleteEmprunt : async (req, res) => {
        try {
            const deleted = await Emprunt.destroy({
                where: { IDEmprunt: req.params.idEmprunt }
            });
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'Emprunt non trouvé' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};


module.exports = empruntsController;
