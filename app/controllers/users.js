const { Utilisateur } = require('../models/index');

// Controller pour les utilisateurs CRUD
const usersController = {

    getAllUtilisateurs : async (req, res) => {
        try {
            const utilisateurs = await Utilisateur.findAll();
            res.status(200).json(utilisateurs);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    createUtilisateur : async (req, res) => {
        try {
            const utilisateur = await Utilisateur.create(req.body);
            res.status(201).json(utilisateur);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getUtilisateur : async (req, res) => {
        try {
            const utilisateur = await Utilisateur.findByPk(req.params.idUtilisateur);
            if (utilisateur) {
                res.status(200).json(utilisateur);
            } else {
                res.status(404).json({ error: 'Utilisateur non trouvé' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    updateUtilisateur : async (req, res) => {
        try {
            const [updated] = await Utilisateur.update(req.body, {
                where: { IDUtilisateur: req.params.idUtilisateur }
            });
            if (updated) {
                const updatedUtilisateur = await Utilisateur.findByPk(req.params.idUtilisateur);
                res.status(200).json(updatedUtilisateur);
            } else {
                res.status(404).json({ error: 'Utilisateur non trouvé' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deleteUtilisateur : async (req, res) => {
        try {
            const deleted = await Utilisateur.destroy({
                where: { IDUtilisateur: req.params.idUtilisateur }
            });
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'Utilisateur non trouvé' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
};

module.exports = usersController;