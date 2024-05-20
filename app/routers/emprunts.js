const express = require('express');;
const router = express.Router();
const empruntsController = require('../controllers/emprunts.js');

// Routes pour les emprunts
router.post('/', empruntsController.createEmprunt);
router.get('/', empruntsController.getAllEmprunts);
router.get('/:idEmprunt', empruntsController.getEmprunt);
router.patch('/:idEmprunt', empruntsController.updateEmprunt);
router.delete('/:idEmprunt', empruntsController.deleteEmprunt);

module.exports = router;