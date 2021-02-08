const db = require('../../database/index.js');

const getInfo = (callback) => {
  console.log("Made it to model")
  db.query('SELECT * FROM home_info WHERE id = 1', callback);
};

const getImages = (callback) => {
  db.query('SELECT * FROM home_images', callback);
  //WHERE Home_ID = 1
};

module.exports = {
  getInfo,
  getImages,
};
