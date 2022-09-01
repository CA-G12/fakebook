const jwt = require('jsonwebtoken');

const { feedQuery } = require('../../database/queries');
const { SECRET } = process.env;


const feed = (req, res, next) => {
  const { token } = req.cookies;

  jwt.verify(token, SECRET, (err, payload) => {
    const { id } = payload;

    feedQuery([id])
      .then((data) => res.send(data.rows))
      .catch((err) => next(err));
  });
};

module.exports = feed;
