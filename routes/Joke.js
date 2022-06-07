const express = require('express');
const { jokeOfTheDay } = require('../controller/Joke');

const router = express.Router();

router.get('/joke-of-the-day',jokeOfTheDay);

module.exports = router;