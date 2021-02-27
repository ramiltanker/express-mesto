const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const controller = require('../controllers/users.js');

router.get('/', controller.getUsers);

router.get('/me', controller.getCurrentUser);

router.get('/:userId', controller.getUser);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}),
controller.updateUser);

router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required(),
  }),
}),
controller.updateAvatar);

module.exports = router;
