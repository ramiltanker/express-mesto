const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => validator.isEmail(email),
    },
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
    role: {
      default: 'Жак-Ив Кусто',
    },
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
    role: {
      default: 'Исследователь',
    },
  },
  avatar: {
    type: String,
    required: true,
    role: {
      default: 'https://pictures.s3.yandex.net/resources/jacques-cousteau_1604399756.png',
    },
    validate: {
      validator: (link) => /https?:\/\/(www\.)?(?:[-\w.]+\.[a-z]+)(?:\/[-\w@/]*#?)?(?:.(?:jpg|jpeg|png))?/gm.test(link),
    },
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error('Неправильные почта или пароль'));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new Error('Неправильные почта или пароль'));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
