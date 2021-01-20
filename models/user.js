const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: (link) => /https?:\/\/(www\.)?(?:[-\w.]+\.[a-z]+)(?:\/[-\w@/]*#?)?(?:.(?:jpg|jpeg|png))?/gm.test(link),
    },
  },
});

module.exports = mongoose.model('user', userSchema);
