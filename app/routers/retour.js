const express = require('express');
const router = express.Router();
const retourController = require('../controllers/retour.js');

// Routes pour les retours
router.post('/', retourController.createRetour);
router.get('/', retourController.getRetours);
router.get('/:id', retourController.getRetour);
router.patch('/:id', retourController.updateRetour);
router.delete('/:id', retourController.deleteRetour);

module.exports = router;