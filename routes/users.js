const router = require('express').Router();
const constroller = require('../constrollers/users.js');


router.get('/', constroller.getUsers);

router.get('/:id', constroller.getUser);

module.exports = router;