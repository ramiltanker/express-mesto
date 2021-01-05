const readJson = require('../utils/readJsonFromFile.js');
const path = require('path');

const getUsers = (req, res) => {
  readJson(path.join(__dirname, '..', 'data', 'users.json'))
    .then((users) => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send(err);
    })
};

const getUser = (req, res) => {
  const { id } = req.params;
  readJson(path.join(__dirname, '..', 'data', 'users.json'))
    .then((users) => {
      const user = users.find((user) => user._id === id);
      if(!user) {
        return res.status(404).send({ message: "Нет пользователя с таким id" });
      }
      res.send(user);
    })
    .catch(err => {
      res.status(500).send(err);
    })
};

module.exports = { getUsers, getUser };