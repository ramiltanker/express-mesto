const router = require('express').Router();
const controller = require('../controllers/cards.js');

router.get('/', controller.getCards);

router.get('/:cardId', controller.getCard);

router.post('/', controller.postCard);

router.put('/:cardId/likes', controller.putLike);

router.delete('/:cardId/likes', controller.deleteLike);

module.exports = router;
