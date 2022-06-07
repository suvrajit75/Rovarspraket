const express = require('express');
const { normalToRovarspraket, rovarspraketToNormal } = require('../controller/Translation');
const router = express.Router();

router.post('/translate/normal',normalToRovarspraket);
router.post('/translate/rovarsprak',rovarspraketToNormal);

module.exports = router;