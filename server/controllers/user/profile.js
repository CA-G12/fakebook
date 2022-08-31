const jwt = require('jsonwebtoken');
require('dotenv').config();
const { profileQuery } = require('../../database/queries');
const { SECRET } = process.env;

const profile = (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, SECRET, (error, decoded) => {
    if (error) {
      res.sendStatus(401);
    } else {
      const {
        id,
        name,
        email,
        img,
      } = decoded;
      profileQuery(decoded.id).then((posts) => {
        const userData = { posts: posts.rows, id, name, email, img};
        res.json(userData);
      }).catch(console.error);
    }
  });
};

module.exports = profile;
