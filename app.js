require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { celebrate, Joi } = require('celebrate');
const mongoose = require('mongoose');
const router = require('./routes/index.js');
const login = require('./controllers/login.js');
const auth = require('./middlewares/auth.js');
const controllerUser = require('./controllers/users.js');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const createUser = controllerUser.postUser;

const app = express();
const PORT = 3000;

// const allowedCors = [
//   'https://api.domainname.students.nomoreparties.space',
//   'https://domainname.students.nomoreparties.space',
//   'http://api.domainname.students.nomoreparties.space',
//   'http://domainname.students.nomoreparties.space',
//   'localhost:3000',
// ];

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   const { origin } = req.headers;

//   if (allowedCors.includes(origin)) {
//     res.header('Access-Control-Allow-Origin', origin);
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
//   }

//   next();
// });

app.use(requestLogger);

// Не нужна авторизация
app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
}),
login);

app.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
}),
createUser);
// Не нужна авторизация

// Авторизация
app.use(auth);
// Авторизация

// Роуты которым нужна авторизация
app.use('/', router);
// Роуты которым нужна авторизация

app.use(errorLogger);

app.use((err, req, res, next) => {
  // если у ошибки нет статуса, выставляем 500
  const { statusCode = 500, message } = err;
  res
    .status(statusCode)
    .send({
      // проверяем статус и выставляем сообщение в зависимости от него
      message: statusCode === 500
        ? 'На сервере произошла ошибка'
        : message,
    });
  next();
});

app.listen(PORT, () => {

});
