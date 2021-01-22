const Card = require('../models/card.js');

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch((err) => {
      res.status(500).send({ err });
    });
};

const getCard = (req, res) => {
  Card.findById(req.user._id)
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: ' Карточка не найдена, проверьте правильность cardId ' });
      }
      res.status(200).send(card);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

const postCard = (req, res) => {
  const { name, link, owner = req.user._id } = req.body;
  Card.create({ name, link, owner })
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы некорректные данные в метод создания карточки' });
      } else {
        res.status(500).send({ message: 'Произошла ошибка' });
      }
    });
};

const putLike = (req, res) => {
  Card.findByIdAndUpdate(req.params.cardId, { $addToSet: { likes: req.user._id } }, {
    new: true, // обработчик then получит на вход обновлённую запись
  })
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'Такой карточки нет в Базе Данных' });
      } else {
        res.status(200).send({ card });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({ message: 'Переданы некорректные данные в метод добавления лайка' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
};

const deleteLike = (req, res) => {
  Card.findByIdAndUpdate(req.params.cardId, { $pull: { likes: req.user._id } }, {
    new: true, // обработчик then получит на вход обновлённую запись
  })
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'Такой карточки нет в Базе Данных' });
      } else {
        res.status(200).send({ card });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({ message: 'Переданны некоректные данные в метод удаления лайка ' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
};

module.exports = {
  getCards, getCard, postCard, putLike, deleteLike,
};
