const Card = require('../models/card.js');

const NotFoundError = require('../errors/not-found-err.js');
const BadRequest = require('../errors/bad-request-err.js');
const InternalServerError = require('../errors/internal-server-err.js');

const getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch((err) => {
      next(new InternalServerError(`${err.message}`));
    });
};

const getCard = (req, res, next) => {
  Card.findById(req.user._id)
    .then((card) => {
      if (!card) {
        next(new NotFoundError('Карточка не найдена, проверьте правильность cardId'));
      }
      res.status(200).send(card);
    })
    .catch((err) => {
      next(new InternalServerError(`${err.message}`));
    });
};

const postCard = (req, res, next) => {
  const { name, link, owner = req.user._id } = req.body;
  Card.create({ name, link, owner })
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequest('Переданы некорректные данные в метод создания карточки'));
      } else {
        next(new InternalServerError(`${err.message}`));
      }
    });
};

const deleteCard = (req, res, next) => {
  Card.findById(req.params.cardId)
    .then((card) => {
      console.log(req.user._id);
      if (!card) {
        next(new NotFoundError('Такой карточки нет в Базе Данных'));
      } else if (!(Card.owner !== req.user._id)) {
        next(new BadRequest('Нельзя удалить карточку другого пользователя'));
      } else {
        Card.findByIdAndRemove(req.params.cardId)
          .then(() => {
            res.status(200).send({ message: `Карточка ${card} удалена` });
          });
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequest('Переданы некорректные данные в метод удаления карточки'));
      } else {
        next(new InternalServerError(`${err.message}`));
      }
    });
};

const putLike = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.cardId, { $addToSet: { likes: req.user._id } }, {
    new: true, // обработчик then получит на вход обновлённую запись
  })
    .then((card) => {
      if (!card) {
        next(new NotFoundError('Такой карточки нет в Базе Данных'));
      } else {
        res.status(200).send(card);
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequest('Переданы некорректные данные в метод добавления лайка'));
      } else {
        next(new InternalServerError(`${err.message}`));
      }
    });
};

const deleteLike = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.cardId, { $pull: { likes: req.user._id } }, {
    new: true, // обработчик then получит на вход обновлённую запись
  })
    .then((card) => {
      if (!card) {
        next(new NotFoundError('Такой карточки нет в Базе Данных'));
      } else {
        res.status(200).send(card);
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequest('Переданны некоректные данные в метод удаления лайка'));
      } else {
        next(new InternalServerError(`${err.message}`));
      }
    });
};

module.exports = {
  getCards, getCard, postCard, putLike, deleteLike, deleteCard,
};
