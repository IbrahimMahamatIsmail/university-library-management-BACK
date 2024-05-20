const express = require('express');
const router = express.Router();
const livresController = require('../controllers/livres');

// Routes pour les livres
router.post('/', livresController.createLivre);
router.get('/', livresController.getAllLivres);
router.get('/:isbn', livresController.getLivre);
router.patch('/:isbn', livresController.updateLivre);
router.delete('/:isbn', livresController.deleteLivre);

module.exports = router;