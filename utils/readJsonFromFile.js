const fs = require('fs').promises;

const readJson = (path) => fs.readFile(path)
  .catch((err) => {
    throw `file ${path} not found`;
  })
  .then((text) => {
    try {
      return JSON.parse(text);
    } catch (_) {
      throw 'Json is invalid';
    }
  });

module.exports = readJson;
