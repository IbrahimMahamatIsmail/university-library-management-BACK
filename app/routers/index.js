const livresRouter = require('./livres');
const usersRouter = require('./users');
const empruntsRouter = require('./emprunts');
const retoursRouter = require('./retour');

const express = require('express');
const router = express.Router();

router.use('/livres', livresRouter);
router.use('/users', usersRouter);
router.use('/emprunts', empruntsRouter);
router.use('/retours', retoursRouter);

module.exports = router;