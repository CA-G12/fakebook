const jwt = require('jsonwebtoken');
const { addPostQuery } = require('../../database/queries');

const { SECRET } = process.env;

const addPost = (req, res, next) => {
  const { token } = req.cookies;
  const { post } = req.body;

  jwt.verify(token, SECRET, (err, decoded) => {
    const { id } = decoded;
    addPostQuery([post, id])
      .then((dataa) => res.send({ message: 'post added' }))
      .catch((err) => next(err));
  });
};

module.exports = addPost;
