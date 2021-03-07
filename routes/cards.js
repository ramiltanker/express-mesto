const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const controller = require('../controllers/cards.js');

router.get('/', controller.getCards);

router.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(/^(https?:\/\/)?([a-zA-z0-9%$&=?/.-]+)\.([a-zA-z0-9%$&=?/.-]+)([a-zA-z0-9%$&=?/.-]+)?(#)?$/),
  }),
}),
controller.postCard);

router.delete('/:cardId', celebrate({
  body: Joi.object().keys({
    _id: Joi.string().max(24),
  }),
}), controller.deleteCard);

router.put('/:cardID/likes', controller.putLike);

router.delete('/:cardID/likes', controller.deleteLike);

router.get('/:cardId', celebrate({
  body: Joi.object().keys({
    _id: Joi.string().max(24),
  }),
}), controller.getCard);

module.exports = router;
