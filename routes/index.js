const router = require('express').Router();
const userRoutes = require('./users.js');
const cardsRoutes = require('./cards.js');

router.use('/users', userRoutes);
router.use('/cards', cardsRoutes);

module.exports = router;