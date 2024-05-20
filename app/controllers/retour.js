const { Retour, Emprunt } = require('../models/index');

// Retour recherche en CRUD

const retourController = {

    getRetours : async (req, res) => {
        try {
            const retours = await Retour.findAll();
            res.status(200).json(retours);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    createRetour : async (req, res) => {
        try {

            const { IDEmprunt, DateRetourEffective }  = req.body;

            const emprunt = await Emprunt.findByPk(IDEmprunt);

            if (!emprunt) {
                return res.status(400).json({ error: 'Emprunt non trouvé' });
            }

            const { retour } = await Retour.create({ IDEmprunt, DateRetourEffective });
            res.status(201).json(retour);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },


    getRetour : async (req, res) => {
        try {
            const retour = await Retour.findByPk(req.params.id);
            if (retour) {
                res.status(200).json(retour);
            } else {
                res.status(404).json({ error: 'Retour non trouvé' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    updateRetour : async (req, res) => {
        try {
            const [updated] = await Retour.update(req.body, {
                where: { IDRetour: req.params.id }
            });
            if (updated) {
                const updatedRetour = await Retour.findByPk(req.params.id);
                res.status(200).json(updatedRetour);
            } else {
                res.status(404).json({ error: 'Retour non trouvé' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteRetour : async (req, res) => {
        try {
            const deleted = await Retour.destroy({
                where: { IDRetour: req.params.id }
            });
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'Retour non trouvé' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = retourController;