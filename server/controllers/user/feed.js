const { feedQuery } = require('../../database/queries');

const feed = (req, res, next) => {
  feedQuery()
    .then((data) => res.send(data.rows))
    .catch((err) => next(err));
};

module.exports = feed;
