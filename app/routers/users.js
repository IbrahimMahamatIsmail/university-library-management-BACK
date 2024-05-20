const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

// Routes pour les utilisateurs
router.post('/', usersController.createUtilisateur);
router.get('/', usersController.getAllUtilisateurs);
router.get('/:idUtilisateur', usersController.getUtilisateur);
router.patch('/:idUtilisateur', usersController.updateUtilisateur);
router.delete('/:idUtilisateur', usersController.deleteUtilisateur);

module.exports = router;