const { Livre } = require('../models/index');

// Livre recherche en CRUD

const livresController = {

    createLivre : async (req, res) => {
        try {
            const livre = await Livre.create(req.body);
            res.status(201).json(livre);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getAllLivres : async (req, res) => {
        try {
            const livres = await Livre.findAll();
            res.status(200).json(livres);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    
    getLivre : async (req, res) => {
        try {
            const livre = await Livre.findByPk(req.params.isbn);
            if (livre) {
                res.status(200).json(livre);
            } else {
                res.status(404).json({ error: 'Livre non trouvé' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    
    updateLivre : async (req, res) => {
        try {

            const isbn = req.params.isbn;
            const { ISBN, ...updateData } = req.body; 

            console.log("Request body:", req.body);
            console.log("Request params:", req.params);

            const currentLivre = await Livre.findByPk(isbn);
            console.log("Current Livre before update:", currentLivre);

            const [updated] = await Livre.update(updateData, {
                where: { ISBN: isbn }
            });

            console.log("Update result:", updated);

            if (updated) {
                const updatedLivre = await Livre.findByPk(isbn);

                console.log("Updated Livre:", updatedLivre);

                if (!updatedLivre) {

                    console.log("Livre non trouvé après mise à jour.");
                    console.log("Vérifiez si l'ISBN est correct:", isbn);
                }

                res.status(200).json(updatedLivre);
            } else {
                res.status(404).json({ error: 'Livre non trouvé' });
            }
        } catch (error) {
            console.error("Error:", error);
            res.status(400).json({ error: error.message });
        }
    },
    
    deleteLivre : async (req, res) => {
        try {
            const deleted = await Livre.destroy({
                where: { ISBN: req.params.isbn }
            });
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'Livre non trouvé' });
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
};

module.exports = livresController;
