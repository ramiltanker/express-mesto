const router = require('express').Router();
const controller = require('../controllers/users.js');

router.get('/', controller.getUsers);

router.get('/:userId', controller.getUser);

router.post('/', controller.postUser);

router.patch('/me', controller.updateUser);

router.patch('/me/avatar', controller.updateAvatar);

module.exports = router;
