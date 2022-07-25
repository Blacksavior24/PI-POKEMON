const express = require('express');
const {getAll, getDetailPoke, postCreate} = require('./services/pokemon.services');

const router = express.Router();

router.get('/', getAll);

router.get('/:id', getDetailPoke);

router.post('/', postCreate);

module.exports = router;