const bcrypt = require('bcryptjs');
const User = require('../models/user.js');
const NotFoundError = require('../errors/not-found-err.js');
const BadRequest = require('../errors/bad-request-err.js');
const InternalServerError = require('../errors/internal-server-err.js');
const ConflictError = require('../errors/conflict-err.js');

const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      next(new InternalServerError(`${err.message}`));
    });
};

const getUser = (req, res, next) => {
  User.findById(req.params.userId)
    .then((user) => {
      if (!user) {
        next(new NotFoundError('Нет пользователя с таким id'));
      }
      return res.send(user);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequest('Переданные некоректные данные в метод получения пользователя'));
      } else {
        next(new InternalServerError(`${err.message}`));
      }
    });
};

const postUser = (req, res, next) => {
  const {
    name, about, avatar, email, password,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      email,
      password: hash,
      name,
      about,
      avatar,
    }))
    .then((user) => {
      res.status(200).send({ data: { _id: user._id, email: user.email } });
    })
    .catch((err) => {
      console.log(err.name);
      if (err.name === 'ValidationError') {
        throw new BadRequest('Переданы некорректные данные в метод создания пользователя');
      } else if (err.name === 'MongoError') {
        throw new ConflictError('Пользователь с таким email уже зарегестрирован');
      } else {
        throw new InternalServerError(`${err.message}`);
      }
    })
    .catch(next);
};

const updateUser = (req, res, next) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about }, {
    runValidators: true, // данные будут валидированы перед изменением
    new: true,
  })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequest('Переданы некорректные данные в метод обновления данных пользователя'));
      }
      if (err.name === 'ValidationError') {
        next(new BadRequest('Переданы некорректные данные в метод обновления данных пользователя'));
      } else {
        next(new InternalServerError(`${err.message}`));
      }
    });
};

const updateAvatar = (req, res, next) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, {
    runValidators: true, // данные будут валидированы перед изменением
    new: true,
  })
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequest('Переданы некорректные данные в метод обновления аватара пользователя'));
      } else {
        next(new InternalServerError(`${err.message}`));
      }
    });
};

const getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError('Нет пользователя с таким id');
      }
      res.send(user);
    })
    .catch(next);
};

module.exports = {
  getUsers, getUser, postUser, updateUser, updateAvatar, getCurrentUser,
};
