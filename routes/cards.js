const router = require('express').Router();
const controller = require('../constrollers/cards.js');

router.get('/', controller.getCards);

router.get('/:id', controller.getCard);

module.exports = router;
