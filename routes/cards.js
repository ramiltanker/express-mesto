const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const controller = require('../controllers/cards.js');

router.get('/', controller.getCards);

router.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().min(2),
  }),
}),
controller.postCard);

router.delete('/:cardId', controller.deleteCard);

router.put('/likes/:cardId', controller.putLike);

router.delete('/likes/:cardId', controller.deleteLike);

router.get('/:cardId', controller.getCard);

module.exports = router;
