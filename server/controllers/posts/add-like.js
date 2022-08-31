const { addLikeQuery } = require('../../database/queries');

const addLike = (req, res, next) => {
  const { id } = req.params;
  addLikeQuery([id])
    .then((data) => res.send({ message: 'liked the post' }))
    .catch((err) => res.send(err));
};

module.exports = addLike;
