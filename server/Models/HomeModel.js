const db = require('../../database/index.js');

const getInfo = (callback) => {
  db.query('SELECT * FROM HomeInfo', callback);
};

const getImages = (callback) => {
  db.query('SELECT * FROM HomeImages WHERE Home_ID = 1', callback);
};

module.exports = {
  getInfo,
  getImages,
};
