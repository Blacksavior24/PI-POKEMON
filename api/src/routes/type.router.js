const express = require("express");
const { getTypes } = require('./services/type.services');

const router = express.Router();

router.get('/', getTypes);

module.exports = router;