const readJson = require('../utils/readJsonFromFile.js');
const path = require('path');

const getCards = (req, res) => {
  readJson(path.join(__dirname, '..', 'data', 'cards.json'))
    .then((cards) => {
      res.send(cards);
    })
    .catch(err => {
      res.status(500).send(err);
    })
};

const getCard = (req, res) => {
  const { id } = req.params;
  readJson(path.join(__dirname, '..', 'data', 'cards.json'))
    .then((cards) => {
      const card = cards.find((card) => card._id === id);
        if(!card) {
          res.status(404).send('Card not found');
        }
        res.send(card);
    })
    .catch(err => {
      res.status(500).send(err);
    })
}

module.exports = { getCards, getCard};